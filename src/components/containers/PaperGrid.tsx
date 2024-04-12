import React from "react";
import { Paper, Grid, GridProps } from "@mui/material";

interface Props extends GridProps {
  elevation?: number;
  children: React.ReactNode;
}

export function PaperGrid({ elevation = 6, children, ...rest }: Props) {
  return (
    <Paper elevation={elevation}>
      <Grid
        container
        spacing={3}
        padding={"3rem"}
        borderRadius={"1rem"}
        {...rest}
      >
        {children}
      </Grid>
    </Paper>
  );
}
