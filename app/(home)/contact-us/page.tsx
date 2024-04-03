import { Metadata } from 'next';
import PageTitle from '#/components/ui/PageTitle';

const pageTitle = 'Contáctanos';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page (){
    return (
      <PageTitle>{pageTitle}</PageTitle>
    );
}