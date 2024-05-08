import React from "react";
import { getSessionUser } from "#/lib/session";
import { Stack, Typography } from "@mui/material";
import H1 from "#/components/texts/H1";

export default async function Page() {
  const user = await getSessionUser();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (!user) throw new Error("No hay usuario logueado");

  return (
    <Stack>
      <H1 sx={{ py: "1rem" }}>Bienvenido, {user.name}</H1>
      <Typography>Selecciona una opcción para continuar</Typography>
    </Stack>
  );
}
