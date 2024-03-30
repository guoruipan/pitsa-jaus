import { Metadata } from 'next';

const pageTitle = 'Encuentra tu PitsaJaus';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page (){
    return <h1>{pageTitle}</h1>;
}