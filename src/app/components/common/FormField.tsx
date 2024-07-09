import type { ReactNode } from 'react';
import { FormLabel } from 'components/ui/form-label';
import { Stack } from 'styled-system/jsx';
import { Text } from 'components/ui/text';

export function FormField({
  name,
  label,
  error,
  children
}: {
  name: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <Stack flex={1} gap="1">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      {children}
      {error && (
        <Text id={`${name}-error`} color="red.9" fontSize="xs">
          {error}
        </Text>
      )}
    </Stack>
  );
}
