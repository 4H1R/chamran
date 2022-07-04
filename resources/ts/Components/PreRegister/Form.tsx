import React, { Fragment, useMemo } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import toast from 'react-hot-toast';

import { IMajor } from '@/App/interfaces';
import { TField } from '@/App/types';
import { educational, personal } from '@/Fixtures/preRegisterFormSchema';
import { Button, FieldList } from '@/Shared/Form';

type TFormSchema = {
  title: string;
  formSchema: TField[];
};

type FormProps = {
  majors: IMajor[];
};

function Form({ majors }: FormProps) {
  const majorOptions = majors.map((major) => ({
    label: major.name,
    value: major.id,
  }));

  const formSchema: TFormSchema[] = useMemo(
    () => [
      {
        title: 'اطلاعات شخصی',
        formSchema: [
          ...personal,
          {
            isRequired: true,
            type: 'select',
            name: 'major_id',
            label: 'رشته مورد نظر',
            fieldProps: {
              options: majorOptions,
            },
          },
        ],
      },
      {
        title: 'نمرات',
        formSchema: educational,
      },
    ],
    [majors]
  );

  const initialValues = useMemo(() => {
    return formSchema.reduce((acc, forms) => {
      return {
        ...acc,
        ...forms.formSchema.reduce((acc, field) => {
          return { ...acc, [field.name]: '' };
        }, {}),
      };
    }, {} as Record<string, string>);
  }, []);

  const form = useForm(initialValues);
  const { processing, post, setData } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/pre-register', {
      onSuccess: () => {
        toast.success('ثبت نام شما با موفقیت انجام شد', {
          duration: 5000,
        });
        setData(initialValues);
      },
      onError: (errors) => {
        // scroll to the first error
        const lastErrorKey = Object.keys(errors).pop();
        if (!lastErrorKey) return;

        const element = document.getElementById(lastErrorKey);
        if (element) {
          element.scrollIntoView({
            block: 'center',
          });
        }
      },
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {formSchema.map(({ title, formSchema }) => (
        <Fragment key={title}>
          <h1 className="h1">{title}</h1>
          <FieldList formSchema={formSchema} form={form} />
        </Fragment>
      ))}
      <Button
        isLoading={processing}
        disabled={processing}
        type="submit"
        className="btn btn-primary"
      >
        ثبت اطلاعات
      </Button>
    </form>
  );
}

export default Form;
