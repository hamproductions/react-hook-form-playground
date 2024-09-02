'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import type { LoginData } from '../../schemas/login-form';
import { loginFormSchema } from '../../schemas/login-form';
import { FormInput } from '../common/FormInput';
import { Stack, styled } from 'styled-system/jsx';
import { Button } from 'components/ui/button';
import { Code } from 'components/ui/code';

export function LoginForm() {
  const [results, setResults] = useState<LoginData>();
  const { control, register, formState, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginFormSchema)
  });
  const { isValid, errors } = formState;

  const onSubmit = (data: LoginData) => {
    setResults(data);
  };

  useEffect(() => {
    if (!isValid) setResults(undefined);
  }, [isValid]);

  return (
    <Stack>
      <styled.form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormInput
            label="Email"
            error={errors.email?.message}
            {...register('email', { required: true })}
          />
          <FormInput
            label="Password"
            error={errors.password?.message}
            type="password"
            {...register('password', { required: true })}
          />
          <Controller
            control={control}
            name="save-password"
            render={({ field: { value, onChange } }) => (
              <input type="checkbox" checked={value} onChange={onChange} />
            )}
          ></Controller>
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
