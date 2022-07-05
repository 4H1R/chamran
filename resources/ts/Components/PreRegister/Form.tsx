import React, { Fragment, useMemo, useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import toast from 'react-hot-toast';

import { IMajor } from '@/App/interfaces';
import { TField } from '@/App/types';
import { educational, personal } from '@/Fixtures/preRegisterFormSchema';
import { Button, FieldList } from '@/Shared/Form';

export type TFormSchema = {
  title: string;
  formSchema: TField[];
};

type FormProps = {
  majors: IMajor[];
};

function Form({ majors }: FormProps) {
  const [selectedMajors, setSelectedMajors] = useState<Record<string, number>>(
    {}
  );
  const handleSelectMajor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMajors({
      ...selectedMajors,
      [e.target.id]: parseInt(e.target.value, 10),
    });
  };
  const getMajorOptions = (name: string) => {
    return majors
      .map((major) => ({
        label: major.name,
        value: major.id,
      }))
      .filter((major) => {
        const isSelected = !Object.values(selectedMajors).find(
          (id) => id === major.value
        );
        const isSelectedByCurrentName = selectedMajors[name] === major.value;
        return isSelected || isSelectedByCurrentName;
      });
  };

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
            label: 'رشته اولویت اول',
            fieldProps: {
              onChange: handleSelectMajor,
              options: getMajorOptions('major_id'),
            },
          },
          {
            isRequired: false,
            type: 'select',
            name: 'second_major_id',
            label: 'رشته اولویت دوم',
            fieldProps: {
              onChange: handleSelectMajor,
              options: getMajorOptions('second_major_id'),
            },
          },
          {
            isRequired: false,
            type: 'select',
            name: 'third_major_id',
            label: 'رشته اولویت سوم',
            fieldProps: {
              onChange: handleSelectMajor,
              options: getMajorOptions('third_major_id'),
            },
          },
        ],
      },
      {
        title: 'نمرات',
        formSchema: educational,
      },
    ],
    [selectedMajors]
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
