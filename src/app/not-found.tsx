import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import H1 from "#/components/texts/H1";
import { Typography } from "@mui/material";
import { CenteredPaperStack } from "#/components/containers/PaperStack";

// https://nextjs.org/docs/app/api-reference/file-conventions/not-found

export default function NotFound() {
  return (
    <CenteredPaperStack>
      <H1>No encontrado</H1>
      <Typography variant="h6" component={"p"}>
        No hemos podido encontrar lo que estabas buscando
      </Typography>
      <Button component={Link} href="/" variant="contained">
        Volver a inicio
      </Button>
    </CenteredPaperStack>
  );
}
