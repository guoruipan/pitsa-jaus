import H1 from "#/components/texts/H1";
import { User } from "#/models/user";
import { Stack, Typography } from "@mui/material";
import React from "react";
import RegisterStoreForm from "./components/RegisterStoreForm";
import { PaperStack } from "#/components/containers/PaperStack";

interface Props {
  user: User;
}

export default function RegisterStoreScreen({ user }: Props) {
  return (
    <PaperStack spacing={4}>
      <Stack spacing={2}>
        <H1>Registra tu tienda</H1>
        <Typography variant="body1">
          No hay una tienda asociada a tu perfil todavía. Creála ahora:
        </Typography>
      </Stack>

      <RegisterStoreForm manager_id={user.id} />
    </PaperStack>
  );
}
