import { Metadata } from 'next';
import FindUsScreen from '#/components/screens/FindUs';

const pageTitle = 'Encuentra tu PitsaJaus';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page (){
  return (
    <FindUsScreen pageTitle={pageTitle} />
  );
}