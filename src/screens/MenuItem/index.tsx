import React from "react";
import H1 from "#/components/texts/H1";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {
  getWithId as getPizza,
  getPhotoRoute as getPizzaPhoto,
} from "#/models/pizza";
import Breadcrumbs from "./components/Breadcrumbs";
import { PaperGrid } from "#/components/containers/PaperGrid";
import { Stack } from "@mui/material";

interface Props {
  id: number;
}

export default async function MenuItemScreen({ id }: Props) {
  const pizza = await getPizza(id);

  return (
    <Stack spacing={3}>
      <Breadcrumbs currentPageName={pizza.name} />
      <PaperGrid>
        <Grid item xs={12} md={6}>
          <Image
            src={getPizzaPhoto(pizza)}
            alt={`Imagen de una pizza ${pizza.name}`}
            width={300}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <H1>{pizza.name}</H1>
          <Typography variant={"body1"}>{pizza.description}</Typography>
        </Grid>
      </PaperGrid>
    </Stack>
  );
}
