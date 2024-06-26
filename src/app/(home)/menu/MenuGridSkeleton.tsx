import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// no puedes escribir un bucle for normal directamente en jsx. Hay que utilizar métodos de javascript como map
export default function MenuGridSkeleton() {
  return (
    <Grid container spacing={1}>
      {Array.from({ length: 8 }, (_, i) => (
        <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ minWidth: 275 }}>
            <div>
              <Skeleton variant="rectangular" width="100%" height={150} />
            </div>
            <CardContent>
              <Skeleton variant="text" width="100%" height={30} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
