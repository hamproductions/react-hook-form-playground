'use client';

import { useState } from 'react';

import type { LoginData } from '../schemas/login-form';
import { FormInput } from './common/FormInput';
import { Button } from 'components/ui/button';
import { Code } from 'components/ui/code';
import { Stack, styled } from 'styled-system/jsx';

export function VanillaLoginForm() {
  const [results, setResults] = useState<LoginData>({} as LoginData);

  //TODO: Implement form function

  //TODO: Implement Validation

  const handleSubmit = () => {
    // Validation
    console.log(results);
  };

  return (
    <Stack>
      <styled.form onSubmit={(e) => e.preventDefault()}>
        <Stack>
          <FormInput
            label="Email"
            value={results?.email}
            onChange={(e) => setResults((s) => ({ ...s, email: e.target.value ?? '' }))}
            name="email"
          />
          <FormInput
            label="Password"
            value={results?.password}
            onChange={(e) => setResults((s) => ({ ...s, password: e.target.value ?? '' }))}
            type="password"
            name="password"
          />
          <Button type="submit" onChange={() => handleSubmit()}>
            Login
          </Button>
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
