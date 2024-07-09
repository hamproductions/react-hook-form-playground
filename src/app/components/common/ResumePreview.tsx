import type { ResumeData } from '@/app/schemas/resume-form';
import { Badge } from 'components/ui/badge';
import { Heading } from 'components/ui/heading';
import { Link } from 'components/ui/link';
import { Text } from 'components/ui/text';
import { Divider, HStack, Stack, Wrap } from 'styled-system/jsx';

export function ResumePreview({ data }: { data: ResumeData }) {
  const {
    firstName,
    middleName,
    lastName,
    email,
    phone,
    web,
    introduction,
    skills,
    education,
    experience
  } = data;
  return (
    <Stack
      flex={1}
      border={{ base: '1px solid', _print: 'none' }}
      w="full"
      h="full"
      p={{ base: 4, _print: '10mm' }}
    >
      <Stack gap={1} w="full">
        <Heading fontSize="2xl">
          {firstName} {middleName ?? ''} {lastName}
        </Heading>
        {introduction && <Text>{introduction}</Text>}
        <Wrap fontSize="sm">
          {email && (
            <Link target="_blank" href={`mailto:${email}`}>
              {email}
            </Link>
          )}
          {phone && <Text>{phone}</Text>}
          {web && (
            <Link target="_blank" href={web}>
              {web}
            </Link>
          )}
        </Wrap>
      </Stack>
      <Divider />
      <HStack>
        <Heading fontSize="lg">Skills</Heading>
        <Wrap>
          {skills.map((s, index) => (
            <Badge key={index}>{s.name}</Badge>
          ))}
        </Wrap>
      </HStack>
      <Divider />
      {experience.length > 0 && (
        <>
          <Heading fontSize="lg">Experience</Heading>
          <Stack>
            {experience.map((experience, index) => {
              const { name, jobTitle, description, date } = experience;
              return (
                <Stack key={index} gap="1">
                  <HStack>
                    <Heading fontSize="md">{name}</Heading>
                    {jobTitle && <Text fontSize="sm">| {jobTitle}</Text>}
                  </HStack>
                  {date && <Text fontSize="xs">{date}</Text>}
                  {description && <Text fontSize="sm">{description}</Text>}
                </Stack>
              );
            })}
          </Stack>
        </>
      )}
      <Divider />
      {education.length > 0 && (
        <>
          <Heading fontSize="lg">Education</Heading>
          <Stack>
            {education.map((education, index) => {
              const { name, description } = education;
              return (
                <Stack key={index} gap="1">
                  <Heading fontSize="md">{name}</Heading>
                  {description && <Text fontSize="sm">{description}</Text>}
                </Stack>
              );
            })}
          </Stack>
        </>
      )}
    </Stack>
  );
}
