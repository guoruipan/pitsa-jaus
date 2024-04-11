import React from "react";
import Alert, { AlertProps } from "@mui/material/Alert";

interface Props extends AlertProps {
  children: React.ReactNode;
}

export function AlertError({ children, ...rest }: Props) {
  return (
    <Alert variant="filled" severity="error" {...rest}>
      {children}
    </Alert>
  );
}
