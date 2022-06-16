import React from 'react';
import { InertiaFormProps } from '@inertiajs/inertia-react';

import { IField, IInput, ISelect } from '@/App/interfaces';
import Input from './Fields/Input';
import Container, { ContainerProps } from './Container';
import Field from './Field';
import Select from './Fields/Select';

type FieldListProps = {
  formSchema: IField[];
  form: InertiaFormProps<any>;
  containerProps?: ContainerProps;
};

function FieldList({ formSchema, form, containerProps }: FieldListProps) {
  const { errors, data, setData, clearErrors } = form;

  return (
    <Container {...containerProps}>
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
    </Container>
  );
}

export default FieldList;
