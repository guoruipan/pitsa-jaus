import React from "react";
import { Paper, Stack, StackProps } from "@mui/material";

interface Props extends StackProps {
  children: React.ReactNode;
}

export function PaperStack({ children, ...rest }: Props) {
  return (
    <Stack
      spacing={3}
      component={Paper}
      elevation={6}
      padding={"3rem"}
      borderRadius={"1rem"}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export function CenteredPaperStack({ children, ...rest }: Props) {
  return (
    <Stack
      spacing={3}
      component={Paper}
      elevation={6}
      padding={"3rem"}
      borderRadius={"1rem"}
      width={"50%"}
      mx={"auto"}
      {...rest}
    >
      {children}
    </Stack>
  );
}
