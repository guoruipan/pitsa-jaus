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
import { Box, Button, Stack } from "@mui/material";
import type { User } from "#/models/user";

// https://nextjs.org/docs/app/building-your-application/optimizing/images
// https://nextjs.org/docs/app/api-reference/components/image

interface Props {
  id: number;
  user?: User;
}

export default async function MenuItemScreen({ id, user }: Props) {
  const pizza = await getPizza(id);

  if (!pizza) throw new Error("No se ha podido encontrar la pizza");

  return (
    <Stack spacing={3}>
      <Breadcrumbs currentPageName={pizza.name} />
      <PaperGrid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: "400px",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={getPizzaPhoto(pizza)}
              alt={`Imagen de una pizza ${pizza.name}`}
              fill
              objectFit="cover"
              priority
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ my: "auto" }}>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <H1>{pizza.name}</H1>
            <Typography variant={"body1"}>{pizza.description}</Typography>
            {user?.role === "customer" && (
              <Button variant="contained">Añadir</Button>
            )}
          </Stack>
        </Grid>
      </PaperGrid>
    </Stack>
  );
}
