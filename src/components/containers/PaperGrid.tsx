import React from "react";
import { Paper, Grid, GridProps } from "@mui/material";

interface Props extends GridProps {
  elevation?: number;
  children: React.ReactNode;
}

export function PaperGrid({ elevation = 6, children, ...rest }: Props) {
  return (
    <Paper elevation={elevation} sx={{ borderRadius: "1rem", p: "3rem" }}>
      <Grid container spacing={3} {...rest}>
        {children}
      </Grid>
    </Paper>
  );
}
