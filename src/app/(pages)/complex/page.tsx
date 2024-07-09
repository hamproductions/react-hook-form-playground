import { ComplexForm } from '@/app/components/rhf/ComplexForm';
import { Stack } from 'styled-system/jsx';
import './page.css';

export default function Home() {
  return (
    <Stack flex={1} w="full" h="full" minH="screen">
      <ComplexForm />
    </Stack>
  );
}
