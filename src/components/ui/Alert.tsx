import React from "react";
import Alert from "@mui/material/Alert";

export function AlertError({ message }: { message: string }) {
  return (
    <Alert variant="outlined" severity="error">
      {message}
    </Alert>
  );
}
