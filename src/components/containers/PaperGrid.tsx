import React from "react";
import { Paper, Grid, GridProps } from "@mui/material";

interface Props extends GridProps {
  children: React.ReactNode;
}

export function PaperGrid({ children, ...rest }: Props) {
  return (
    <Grid
      container
      spacing={3}
      component={Paper}
      elevation={6}
      padding={"3rem"}
      borderRadius={"1rem"}
      {...rest}
    >
      {children}
    </Grid>
  );
}
