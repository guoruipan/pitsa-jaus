import Card from "#/components/ui/Card";
import Grid from "@mui/material/Grid";
import { list as listPizzas } from "#/models/pizza";
import { Metadata } from "next";
import PageTitle from "#/components/ui/PageTitle";

const pageTitle = "Nuestra Carta";

export const metadata: Metadata = {
  title: pageTitle,
};

// hacer la función async permite usar await para obtener datos
export default async function Page() {
  const pizzas = await listPizzas();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageTitle>{pageTitle}</PageTitle>
      </Grid>

      {pizzas.map((pizza) => (
        <Grid key={pizza.id} item xs={12} sm={6} md={4} lg={3}>
          <Card href={`/menu/${pizza.id}`} imgUrl="/placeholder.jpg" text={`Pizza ${pizza.name}`} />
        </Grid>
      ))}
    </Grid>
  );
}
