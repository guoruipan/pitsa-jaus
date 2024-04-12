import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import H1 from "#/components/ui/H1";
import { Typography } from "@mui/material";

interface Props {
  reset: () => void;
}

export default function ErrorScreen({ reset }: Props) {
  return (
    <Stack spacing={3}>
      <H1>¡Ups! Algo ha ido mal</H1>
      <Typography variant="h6" component={"p"}>
        Lo sentimos, se ha producido un error inesperado. Por favor, inténtalo
        de nuevo más tarde.
      </Typography>
      <Button
        variant={"contained"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Inténtalo de nuevo
      </Button>
    </Stack>
  );
}
