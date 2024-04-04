import { Metadata } from 'next';
import FindUsScreen from '#/screens/FindUs';
import { list as listStores } from "#/models/store";

const pageTitle = 'Encuentra tu PitsaJaus';

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page (){
  const stores = await listStores();

  return (
    <FindUsScreen pageTitle={pageTitle} stores={stores} />
  );
}