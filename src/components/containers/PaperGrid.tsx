import React from "react";
import { Paper, Grid, GridProps } from "@mui/material";

interface Props extends GridProps {
  children: React.ReactNode;
}

export function PaperGrid({ children, ...rest }: Props) {
  return (
    <Paper elevation={6} sx={{ borderRadius: "1rem", p: "3rem" }}>
      <Grid container spacing={3} {...rest}>
        {children}
      </Grid>
    </Paper>
  );
}
