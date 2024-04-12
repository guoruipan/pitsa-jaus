import React from "react";
import { Paper, Stack, StackProps } from "@mui/material";

interface Props extends StackProps {
  elevation?: number;
  children: React.ReactNode;
}

export function PaperStack({ elevation = 6, children, ...rest }: Props) {
  return (
    <Paper elevation={elevation}>
      <Stack spacing={3} padding={"3rem"} borderRadius={"1rem"} {...rest}>
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
    <Paper elevation={elevation}>
      <Stack
        spacing={3}
        padding={"3rem"}
        borderRadius={"1rem"}
        width={"50%"}
        mx={"auto"}
        {...rest}
      >
        {children}
      </Stack>
    </Paper>
  );
}
