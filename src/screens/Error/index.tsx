import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import H1 from "#/components/ui/H1";

interface Props {
  reset: () => void;
}

export default function ErrorScreen({ reset }: Props) {
  return (
    <Box>
      <H1 gutterBottom>¡Algo ha ido mal!</H1>
      <Button
        variant={"contained"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Inténtalo de nuevo
      </Button>
    </Box>
  );
}
