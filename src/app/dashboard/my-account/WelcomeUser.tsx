import React from "react";
import { Stack, Typography } from "@mui/material";
import type { User } from "#/models/user";
import H1 from "#/components/texts/H1";

interface Props {
  user: User;
}

export default function WelcomeUser({ user }: Props) {
  return (
    <Stack>
      <H1 sx={{ py: "1rem" }}>Bienvenido, {user.name}</H1>
      <Typography>Selecciona una opcción para continuar</Typography>
    </Stack>
  );
}
