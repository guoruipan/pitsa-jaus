import { Metadata } from 'next';
import PageTitle from '#/components/ui/PageTitle';

const pageTitle = 'Encuentra tu PitsaJaus';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page (){
  return (
    <PageTitle>{pageTitle}</PageTitle>
  );
}