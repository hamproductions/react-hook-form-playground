'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { FormInput } from '../common/FormInput';
import { FormField } from '../common/FormField';
import { ResumePreview } from '../common/ResumePreview';
import { DatePickerInput } from '../common/DatePickerInput';
import type { ResumeData } from '@/app/schemas/resume-form';
import { resumeSchema } from '@/app/schemas/resume-form';
import { Heading } from 'components/ui/heading';
import { Center, Divider, HStack, Stack, styled } from 'styled-system/jsx';
import { Button } from 'components/ui/button';
import { Textarea } from 'components/ui/textarea';
import { Code } from 'components/ui/code';

export function ComplexForm() {
  const [result, setResult] = useState<ResumeData>();
  const { register, formState, handleSubmit, reset, control } = useForm<ResumeData>({
    resolver: zodResolver(resumeSchema)
  });
  const { errors } = formState;
  const skills = useFieldArray({ control, name: 'skills' });
  const experience = useFieldArray({ control, name: 'experience' });
  const education = useFieldArray({ control, name: 'education' });

  const onSubmit = (data: ResumeData) => {
    localStorage.setItem('form-data', JSON.stringify(data));
    setResult(data);
  };

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('form-data');
      if (!savedData) return;
      reset(JSON.parse(savedData));
    } finally {
    }
  }, []);

  return (
    <Stack flexDirection={{ lg: 'row' }} w="full" h="full" py="4" _print={{ py: 0 }}>
      <Stack flex="1" _print={{ display: 'none' }}>
        <Heading py="2" fontSize="2xl">
          履歴書メーカー
        </Heading>
        <Divider />
        <styled.form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Heading
              zIndex="overlay"
              position="sticky"
              top="0"
              w="full"
              py="2"
              fontSize="xl"
              bgColor="bg.default"
            >
              Information
            </Heading>
            <HStack alignItems="flex-start">
              <FormInput
                label="First Name"
                error={errors.firstName?.message}
                autoComplete="given-name"
                {...register('firstName', { required: true })}
              />
              <FormInput
                label="Middle Name"
                error={errors.middleName?.message}
                autoComplete="additional-name"
                {...register('middleName')}
              />
              <FormInput
                label="Last Name"
                error={errors.lastName?.message}
                autoComplete="family-name"
                {...register('lastName', { required: true })}
              />
            </HStack>
            <HStack alignItems="flex-start">
              <FormInput
                label="Email"
                error={errors.email?.message}
                w="full"
                {...register('email', { required: true })}
              />
              <FormInput
                label="Phone No."
                error={errors.phone?.message}
                autoComplete="tel"
                w="full"
                {...register('phone')}
              />
            </HStack>
            <FormInput
              label="Homepage"
              error={errors.web?.message}
              autoComplete="url"
              {...register('web')}
            />
            <FormField
              label="Introduction"
              name="introduction"
              error={errors.introduction?.message}
            >
              <Textarea {...register('introduction')} />
            </FormField>
            <Divider />
            <Heading
              zIndex="overlay"
              position="sticky"
              top="0"
              w="full"
              py="2"
              fontSize="xl"
              bgColor="bg.default"
            >
              Skills
            </Heading>
            <Stack>
              {skills.fields.map((field, index) => {
                return (
                  <Stack key={field.id} gap="1">
                    <HStack alignItems="stretch">
                      <FormInput
                        label="Skill Name"
                        error={errors.skills?.[index]?.name?.message}
                        size="sm"
                        w="full"
                        {...register(`skills.${index}.name`, { required: true })}
                      />
                      <Center>
                        <Button onClick={() => skills.remove(index)}>Remove</Button>
                      </Center>
                    </HStack>
                  </Stack>
                );
              })}
              <Button
                variant="ghost"
                onClick={() =>
                  skills.append({
                    name: ''
                  })
                }
              >
                Add skill
              </Button>
            </Stack>
            <Divider />
            <Heading
              zIndex="overlay"
              position="sticky"
              top="0"
              w="full"
              py="2"
              fontSize="xl"
              bgColor="bg.default"
            >
              Education
            </Heading>
            <Stack>
              {education.fields.map((field, index) => {
                return (
                  <Stack key={field.id} gap="1">
                    <HStack alignItems="stretch">
                      <FormInput
                        label="School Name"
                        error={errors.education?.[index]?.name?.message}
                        size="sm"
                        w="full"
                        {...register(`education.${index}.name`, { required: true })}
                      />
                      <FormInput
                        label="Description"
                        error={errors.education?.[index]?.description?.message}
                        size="sm"
                        w="full"
                        {...register(`education.${index}.description`, { required: true })}
                      />
                      <Center>
                        <Button onClick={() => education.remove(index)}>Remove</Button>
                      </Center>
                    </HStack>
                  </Stack>
                );
              })}
              <Button
                variant="ghost"
                onClick={() =>
                  education.append({
                    name: '',
                    description: ''
                  })
                }
              >
                Add Education
              </Button>
            </Stack>
            <Divider />
            <Heading
              zIndex="overlay"
              position="sticky"
              top="0"
              w="full"
              py="2"
              fontSize="xl"
              bgColor="bg.default"
            >
              Experience
            </Heading>
            <Stack>
              {experience.fields.map((field, index) => {
                return (
                  <Stack key={field.id} gap="1">
                    <FormInput
                      label="Job name"
                      error={errors.experience?.[index]?.name?.message}
                      size="sm"
                      w="full"
                      {...register(`experience.${index}.name`, { required: true })}
                    />
                    <HStack alignItems="flex-start">
                      <FormInput
                        label="Job Title"
                        error={errors.experience?.[index]?.jobTitle?.message}
                        size="sm"
                        w="full"
                        {...register(`experience.${index}.jobTitle`, { required: true })}
                      />
                      <Controller
                        control={control}
                        name={`experience.${index}.date`}
                        render={({ field }) => {
                          const { value, onChange } = field;
                          return (
                            <DatePickerInput
                              label="Date"
                              value={[value]}
                              onValueChange={({ value }) => {
                                const date = value[0];
                                onChange(
                                  `${date.year}-${date.month.toString().padStart(2, '0')}-${date.day
                                    .toString()
                                    .padStart(2, '0')}`
                                );
                              }}
                            />
                          );
                        }}
                      ></Controller>
                    </HStack>
                    <FormField
                      label="Description"
                      name="description"
                      error={errors.experience?.[index]?.description?.message}
                    >
                      <Textarea size="sm" {...register(`experience.${index}.description`)} />
                    </FormField>
                    <HStack>
                      <Button onClick={() => experience.remove(index)}>Remove</Button>
                    </HStack>
                    <Divider />
                  </Stack>
                );
              })}
              <Button
                variant="ghost"
                onClick={() =>
                  experience.append({
                    date: '',
                    name: '',
                    jobTitle: '',
                    description: ''
                  })
                }
              >
                Add Experience
              </Button>
            </Stack>
            <Divider />
            <HStack>
              <Button>Make Resume</Button>
            </HStack>
          </Stack>
        </styled.form>
      </Stack>
      {result && (
        <Stack>
          <ResumePreview data={result} />
          <Code p="4" whiteSpace="pre" _print={{ display: 'none' }}>
            {JSON.stringify(result, null, 4)}
          </Code>
        </Stack>
      )}
    </Stack>
  );
}
