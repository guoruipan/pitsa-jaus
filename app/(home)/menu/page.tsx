import Card from "#/components/ui/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { list as listPizzas } from "#/models/pizza";
import { Metadata } from "next";

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
        <Typography variant="h2" component={"h1"} color="text.primary" >
          {pageTitle}
        </Typography>
      </Grid>

      {pizzas.map((pizza) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            key={pizza.id}
            imgUrl="/placeholder.jpg"
            text={`Pizza ${pizza.name}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
