import React from "react";
import { isUserLoggedIn } from "#/lib/session";
import { Stack, Typography } from "@mui/material";
import H1 from "#/components/texts/H1";

export default async function Page() {
  const user = await isUserLoggedIn();

  return (
    <Stack>
      <H1 sx={{ py: "1rem" }}>Bienvenido, {user.name}</H1>
      <Typography>Selecciona una opcción para continuar</Typography>
    </Stack>
  );
}
