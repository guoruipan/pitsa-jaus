import { Metadata } from 'next';

const pageTitle = 'Contáctanos';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page (){
    return <h1>{pageTitle}</h1>;
}