import Card from "#/components/ui/Card";
import Grid from "@mui/material/Grid";
import PageTitle from "#/components/ui/PageTitle";
import { Pizza } from "#/models/pizza";

interface Params {
  pageTitle: string;
  pizzas: Pizza[];
}

export default function MenuScreen({ pageTitle, pizzas }: Params) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageTitle>{pageTitle}</PageTitle>
      </Grid>

      {pizzas.map((pizza) => (
        <Grid key={pizza.id} item xs={12} sm={6} md={4} lg={3}>
          <Card
            href={`/menu/${pizza.id}`}
            imgUrl="/placeholder.jpg"
            text={`Pizza ${pizza.name}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
