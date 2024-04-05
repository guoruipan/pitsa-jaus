import H1 from "#/components/ui/H1";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { getWithId as getPizza } from "#/models/pizza";

interface Props {
  id: number;
}

export default async function MenuItemScreen({ id }: Props) {
  const pizza = await getPizza(id);

  // en principio si no encuentra pizza con el id aportado, lanza un error y se va a la página de error /menu/[id]/error.tsx

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Image
          src="/placeholder.jpg"
          alt={`Imagen de una pizza ${pizza!!.name}`}
          width={200}
          height={200}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <H1>{pizza!!.name}</H1>
        <Typography variant={"body1"}>{pizza!!.description}</Typography>
      </Grid>
    </Grid>
  );
}
