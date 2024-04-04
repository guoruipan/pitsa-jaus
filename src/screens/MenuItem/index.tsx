import PageTitle from "#/components/ui/PageTitle";
import { Pizza } from "#/models/pizza";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from 'next/image';

interface Params {
  pageTitle: string;
  pizza: Pizza;
}

export default function MenuItemScreen({ pageTitle, pizza }: Params) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Image src="/placeholder.jpg" alt={`Imagen de una pizza ${pizza.name}`} width={200} height={200} />
      </Grid>
      <Grid item xs={12} md={6}>
      <PageTitle>{pageTitle}</PageTitle>
        <Typography variant={"body1"}>{pizza.description}</Typography>
      </Grid>
    </Grid>
  );
}
