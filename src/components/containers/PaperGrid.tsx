import React from "react";
import { Paper, Grid, GridProps, SxProps, Theme } from "@mui/material";

interface Props extends GridProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function PaperGrid({ children, sx, ...rest }: Props) {
  return (
    <Grid
      container
      component={Paper}
      elevation={6}
      spacing={3}
      sx={{ borderRadius: "1rem", p: "3rem", ...sx }}
      {...rest}
    >
      {children}
    </Grid>
  );
}
