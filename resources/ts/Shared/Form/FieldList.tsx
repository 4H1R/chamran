import React from 'react';
import { InertiaFormProps } from '@inertiajs/inertia-react';

import { IInput, ISelect } from '@/App/interfaces';
import { TField } from '@/App/types';
import Input from './Fields/Input';
import Container, { ContainerProps } from './Container';
import Field from './Field';
import Select from './Fields/Select';

type FieldListProps = {
  formSchema: TField[];
  form: InertiaFormProps<any>;
  containerProps?: ContainerProps;
};

function FieldList({ formSchema, form, containerProps }: FieldListProps) {
  const { errors, data, setData, clearErrors } = form;

  const hasError = (name: string) => errors[name] !== undefined;
  const handleFocus = (name: string) => hasError(name) && clearErrors(name);

  return (
    <Container {...containerProps}>
      {formSchema.map(({ isRequired, name, label, type, fieldProps }) => (
        <Field
          isRequired={isRequired}
          name={name}
          label={label}
          error={errors[name]}
          key={name}
        >
          {type === 'input' && (
            <Input
              {...(fieldProps as IInput)}
              name={name}
              hasError={hasError(name)}
              value={data[name]}
              onChange={(e) => setData(name, e.target.value)}
              onFocus={() => handleFocus(name)}
            />
          )}
          {type === 'select' && (
            <Select
              {...(fieldProps as ISelect)}
              name={name}
              hasError={hasError(name)}
              value={data[name]}
              onChange={(e) => {
                setData(name, e.target.value);
                fieldProps.onChange && fieldProps.onChange(e);
              }}
              onFocus={() => handleFocus(name)}
            />
          )}
        </Field>
      ))}
    </Container>
  );
}

export default FieldList;
