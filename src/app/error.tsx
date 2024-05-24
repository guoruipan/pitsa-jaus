"use client"; // Error components must be Client Components

// https://nextjs.org/docs/app/building-your-application/routing/error-handling

import React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import H1 from "#/components/texts/H1";
import { Typography } from "@mui/material";
import { CenteredPaperStack } from "#/components/containers/PaperStack";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <CenteredPaperStack>
      <H1>Algo ha ido mal</H1>
      <Typography variant="h6" component={"p"}>
        {error.message}
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
    </CenteredPaperStack>
  );
}
