import React from "react";
import { Paper, Stack, StackProps, SxProps, Theme } from "@mui/material";

interface Props extends StackProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function PaperStack({ children, sx, ...rest }: Props) {
  return (
    <Stack
      component={Paper}
      elevation={6}
      spacing={3}
      sx={{ borderRadius: "1rem", p: "3rem", ...sx }}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export function CenteredPaperStack({ children, sx, ...rest }: Props) {
  return (
    <PaperStack sx={{ width: "50%", mx: "auto", ...sx }} {...rest}>
      {children}
    </PaperStack>
  );
}
