import { Metadata } from 'next';
import PageTitle from '#/components/ui/PageTitle';

const pageTitle = 'Inicia sesión';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page (){
  return (
    <PageTitle>{pageTitle}</PageTitle>
  );
}