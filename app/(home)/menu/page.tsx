import Card from "#/components/ui/Card";
import { list as listPizzas } from "#/models/pizza";
import { Metadata } from 'next';

const pageTitle = 'Nuestra Carta';

export const metadata: Metadata = {
  title: pageTitle,
};

// hacer la función async permite usar await para obtener datos
export default async function Page() {
  const pizzas = await listPizzas();

  return (
    <>
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
      <div
        className="grid grid-cols-4 gap-5 p-5"
      >
        {pizzas.map((pizza) => (
          <Card key={pizza.id} imgUrl='/placeholder.jpg' text={`Pizza ${pizza.name}`} />
        ))}
      </div>
    </>
  );
}
