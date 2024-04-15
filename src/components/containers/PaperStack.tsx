import React from "react";
import { Paper, Stack, StackProps } from "@mui/material";

interface Props extends StackProps {
  elevation?: number;
  children: React.ReactNode;
}

export function PaperStack({ elevation = 6, children, ...rest }: Props) {
  return (
    <Paper elevation={elevation} sx={{ borderRadius: "1rem", p: "3rem" }}>
      <Stack spacing={3} {...rest}>
        {children}
      </Stack>
    </Paper>
  );
}

export function CenteredPaperStack({
  elevation = 6,
  children,
  ...rest
}: Props) {
  return (
    <Paper
      elevation={elevation}
      sx={{ borderRadius: "1rem", p: "3rem", width: "50%", mx: "auto" }}
    >
      <Stack spacing={3} {...rest}>
        {children}
      </Stack>
    </Paper>
  );
}
