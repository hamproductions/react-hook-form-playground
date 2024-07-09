import { FormField } from './FormField';
import type { InputProps } from 'components/ui/input';
import { Input } from 'components/ui/input';

export function FormInput({
  name,
  label,
  error,
  ...rest
}: { name: string; label: string; error?: string } & InputProps) {
  return (
    <FormField name={name} label={label} error={error}>
      <Input
        name={name}
        type="text"
        data-invalid={!!error ? true : undefined}
        aria-invalid={!!error ? true : undefined}
        aria-describedby={`${name}-error`}
        borderColor={{
          _invalid: 'red.8'
        }}
        {...rest}
      />
    </FormField>
  );
}
