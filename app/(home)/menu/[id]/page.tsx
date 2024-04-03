import { Metadata } from 'next';
import PageTitle from '#/components/ui/PageTitle';
import { getWithId as getPizza } from "#/models/pizza";

const pageTitle = 'Pizza';

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page ({ params }: { params: { id: number } }){
    const pizza = await getPizza(params.id);

     // modifica el título utilizando la propiedad 'name' de la pizza
     metadata.title = `${pageTitle} ${pizza.name}`;

    return (
      <PageTitle>{metadata.title}</PageTitle>
    );
}