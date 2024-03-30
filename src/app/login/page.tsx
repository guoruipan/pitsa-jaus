import { Metadata } from 'next';

const pageTitle = 'Inicia sesión';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page (){
    return <h1>{pageTitle}</h1>;
}