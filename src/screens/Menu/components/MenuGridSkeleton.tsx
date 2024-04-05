import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

// no puedes escribir un bucle for normal directamente en jsx. Hay que utilizar métodos de javascript como map
export default function MenuGridSkeleton() {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 8 }, (_, i) => (
        <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant="rounded" width={275} height={200} />
        </Grid>
      ))}
    </Grid>
  );
}
