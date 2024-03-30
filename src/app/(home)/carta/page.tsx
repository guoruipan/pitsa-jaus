import Card from "#/components/Card";
import { listado as listadoPizzas } from "#/models/pizza";

// hacer la función async permite usar await para obtener datos
export default async function Page() {
  const pizzas = await listadoPizzas();

  return (
    <>
      <h1 className="text-3xl font-bold">La carta</h1>
      <div
        className="grid grid-cols-4 gap-5 p-5"
      >
        {pizzas.map((pizza) => (
          <Card key={pizza.id} imgUrl='/placeholder.jpg' texto={`Pizza ${pizza.nombre}`} />
        ))}
      </div>
    </>
  );
}
