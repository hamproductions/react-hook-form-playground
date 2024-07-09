'use client';

import { useState } from 'react';

import type { LoginData } from '../schemas/login-form';
import { FormInput } from './common/FormInput';
import { Button } from 'components/ui/button';
import { Code } from 'components/ui/code';
import { Stack, styled } from 'styled-system/jsx';

export function VanillaLoginForm() {
  const [results, setResults] = useState<LoginData>();

  //TODO: Implement form function

  //TODO: Implement Validation

  return (
    <Stack>
      <styled.form>
        <Stack>
          <FormInput label="Email" name="email" />
          <FormInput label="Password" type="password" name="password" />
          <Button type="submit">Login</Button>
        </Stack>
      </styled.form>
      {results && (
        <Code p="4" whiteSpace="pre">
          {JSON.stringify(results, null, 4)}
        </Code>
      )}
    </Stack>
  );
}
