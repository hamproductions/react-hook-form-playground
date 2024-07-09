import { LoginForm } from '../components/rhf/LoginForm';
import { VanillaLoginForm } from '../components/VanillaLoginForm';
import { Heading } from 'components/ui/heading';
import { Link } from 'components/ui/link';
import { Text } from 'components/ui/text';
import { Center, Divider, HStack, Stack } from 'styled-system/jsx';

export default function Home() {
  return (
    <Center flex={1} w="full" minH="screen">
      <Stack alignItems="center" w="full">
        <Heading>React Hook Form デモ</Heading>
        <HStack justifyContent="space-around" alignItems="stretch" w="full">
          <Stack>
            <Text>With React Hook Form</Text>
            <LoginForm />
          </Stack>
          <Divider orientation="vertical" />
          <Stack>
            <Text>Vanilla React</Text>
            <VanillaLoginForm />
          </Stack>
        </HStack>
        <Link href="/complex">Complex example</Link>
      </Stack>
    </Center>
  );
}
