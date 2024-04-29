import React from "react";
import Alert, { AlertProps } from "@mui/material/Alert";

interface Props extends AlertProps {
  children: React.ReactNode;
}

// variant: por defecto "outlined". Para "filled" indicar al llamar <AlertError variant="filled">

export function AlertError({ children, ...rest }: Props) {
  return (
    <Alert severity="error" {...rest}>
      {children}
    </Alert>
  );
}

export function AlertSuccess({ children, ...rest }: Props) {
  return (
    <Alert severity="success" {...rest}>
      {children}
    </Alert>
  );
}
