import { Metadata } from 'next';
import { getWithId as getPizza } from "#/models/pizza";
import MenuItemScreen from '#/screens/MenuItem';

const pageTitle = 'Pizza';

export const metadata: Metadata = {
  title: pageTitle,
};

interface Params {
  // parece que no puedo poner directamente id, tiene que estar dentro de params
  params: { id: number }
}

export default async function Page ({params} : Params){
    const pizza = await getPizza(params.id);

    //TODO utilizado !! porque en getPizza() creo que ya valido. Probar

     // modifica el título utilizando la propiedad 'name' de la pizza
     metadata.title = `${pageTitle} ${pizza!!.name}`;

    return (
      <MenuItemScreen pageTitle={metadata.title} pizza={pizza!!} />
    );
}