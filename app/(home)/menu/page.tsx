import MenuScreen from "#/screens/Menu";
import { Metadata } from "next";
import { list as listPizzas } from "#/models/pizza";

const pageTitle = "Nuestra Carta";

export const metadata: Metadata = {
  title: pageTitle,
};

// hacer la función async permite usar await para obtener datos
export default async function Page() {
  const pizzas = await listPizzas();

  return <MenuScreen pageTitle={pageTitle} pizzas={pizzas}/>
}
