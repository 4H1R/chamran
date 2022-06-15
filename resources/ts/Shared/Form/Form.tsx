import React from 'react';
import { InertiaFormProps } from '@inertiajs/inertia-react';

import { IField } from '@/App/interfaces';
import Input from './Fields/Input';
import InputContainer from './InputContainer';
import Field from './Field';

type Props = {
  formSchema: IField[];
  form: InertiaFormProps<any>;
  onSubmit: () => void;
};

function Form({ formSchema, form, onSubmit }: Props) {
  const { errors, data, setData, clearErrors } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <InputContainer>
        {formSchema.map(({ name, label, type, fieldProps }) => (
          <Field name={name} label={label} error={errors[name]} key={name}>
            {type === 'input' && (
              <Input
                {...fieldProps}
                name={name}
                hasError={errors[name] !== undefined}
                value={data[name]}
                onChange={(e) => setData(name, e.target.value)}
                onFocus={() => clearErrors(name)}
              />
            )}
          </Field>
        ))}
      </InputContainer>
    </form>
  );
}

export default Form;
