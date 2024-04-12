import React from "react";
import H1 from "#/components/ui/H1";
import { Stack, Typography, Button } from "@mui/material";

interface Props {
  pageTitle: string;
}

export default function RegisterSuccessScreen({ pageTitle }: Props) {
  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <Typography variant="h6" component="p">
        Pulsa el botón para volver a la página de login
      </Typography>
      <Button variant="contained" href="/login">
        Volver a inicio de sesión
      </Button>
    </Stack>
  );
}
