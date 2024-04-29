import React from "react";
import { Paper, Stack, StackProps } from "@mui/material";

interface Props extends StackProps {
  children: React.ReactNode;
}

export function PaperStack({ children, ...rest }: Props) {
  return (
    <Paper elevation={6} sx={{ borderRadius: "1rem", p: "3rem" }}>
      <Stack spacing={3} {...rest}>
        {children}
      </Stack>
    </Paper>
  );
}

export function CenteredPaperStack({ children, ...rest }: Props) {
  return (
    <Paper
      elevation={6}
      sx={{ borderRadius: "1rem", p: "3rem", width: "50%", mx: "auto" }}
    >
      <Stack spacing={3} {...rest}>
        {children}
      </Stack>
    </Paper>
  );
}
