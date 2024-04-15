import React from "react";
import H1 from "#/components/texts/H1";
import { Typography, Button } from "@mui/material";
import { CenteredPaperStack } from "#/components/containers/PaperStack";

interface Props {
  pageTitle: string;
}

export default function RegisterSuccessScreen({ pageTitle }: Props) {
  return (
    <CenteredPaperStack>
      <H1>{pageTitle}</H1>
      <Typography variant="h6" component="p">
        Pulsa el botón para volver a la página de login
      </Typography>
      <Button variant="contained" href="/login">
        Volver a inicio de sesión
      </Button>
    </CenteredPaperStack>
  );
}
