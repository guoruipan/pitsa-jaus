import React from "react";
import { Metadata } from "next";
import H1 from "#/components/texts/H1";
import { Typography, Button } from "@mui/material";
import { CenteredPaperStack } from "#/components/containers/PaperStack";

const pageTitle = "Registro completado";

export const metadata: Metadata = {
  title: pageTitle,
};

// no merece la pena sacar esto a /screens

export default function Page() {
  return (
    <CenteredPaperStack>
      <H1>{pageTitle}</H1>
      <Typography variant="h6" component="p">
        Pulsa el botón para volver a la página de login
      </Typography>
      <Button variant="contained" href="/auth/login">
        Volver a inicio de sesión
      </Button>
    </CenteredPaperStack>
  );
}
