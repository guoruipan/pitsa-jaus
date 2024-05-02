import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import H1 from "#/components/texts/H1";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { getWithId as getPizza } from "#/models/pizza";
import { getPizzaPhoto } from "#/lib/utils";
import { PaperGrid } from "#/components/containers/PaperGrid";
import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "#/components/texts/Link";

const pageTitle = "Pizza";

export const metadata: Metadata = {
  title: pageTitle,
};

// no puedo poner directamente id, tiene que estar dentro de params que es una propiedad especial de next js
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
interface Props {
  params: { id: number };
}

// https://nextjs.org/docs/app/building-your-application/optimizing/images
// https://nextjs.org/docs/app/api-reference/components/image

export default async function Page({ params }: Props) {
  const user = await getSessionUser();

  const { id } = params || {};
  const pizza = await getPizza(id);
  if (!pizza) throw new Error("No se ha podido encontrar la pizza");

  return (
    <Stack spacing={3}>
      <Breadcrumbs>
        <Link href="/menu" underline="hover">
          Nuestra carta
        </Link>
        <Typography color="text.primary">{pizza.name}</Typography>
      </Breadcrumbs>
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
