import React from 'react';
import { InertiaFormProps } from '@inertiajs/inertia-react';

import { IField, IInput, ISelect } from '@/App/interfaces';
import Input from './Fields/Input';
import InputContainer from './InputContainer';
import Field from './Field';
import Select from './Fields/Select';

type FieldListProps = {
  formSchema: IField[];
  form: InertiaFormProps<any>;
};

function FieldList({ formSchema, form }: FieldListProps) {
  const { errors, data, setData, clearErrors } = form;

  return (
    <InputContainer>
      {formSchema.map(({ name, label, type, fieldProps }) => (
        <Field name={name} label={label} error={errors[name]} key={name}>
          {type === 'input' && (
            <Input
              {...(fieldProps as IInput)}
              name={name}
              hasError={errors[name] !== undefined}
              value={data[name]}
              onChange={(e) => setData(name, e.target.value)}
              onFocus={() => clearErrors(name)}
            />
          )}
          {type === 'select' && (
            <Select
              {...(fieldProps as ISelect)}
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
  );
}

export default FieldList;
