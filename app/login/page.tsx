import { Metadata } from 'next';
import H1 from '#/components/ui/H1';

const pageTitle = 'Inicia sesión';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page (){
  return (
    <H1>{pageTitle}</H1>
  );
}