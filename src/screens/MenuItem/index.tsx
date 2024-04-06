import React from 'react';
import H1 from "#/components/ui/H1";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { getWithId as getPizza } from "#/models/pizza";
import Breadcrumbs from "./components/Breadcrumbs";

interface Props {
  id: number;
}

export default async function MenuItemScreen({ id }: Props) {
  const pizza = await getPizza(id);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Breadcrumbs currentPageName={pizza.name} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Image
          src="/placeholder.jpg"
          alt={`Imagen de una pizza ${pizza.name}`}
          width={200}
          height={200}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <H1>{pizza.name}</H1>
        <Typography variant={"body1"}>{pizza.description}</Typography>
      </Grid>
    </Grid>
  );
}
