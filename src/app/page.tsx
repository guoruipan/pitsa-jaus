import React from "react";
import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import photo from "@/public/logo3.png";

// https://nextjs.org/docs/app/building-your-application/optimizing/images#responsive

export default async function Home() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        display={{ xs: "flex", sm: "none" }}
        justifyContent={"center"}
      >
        <Typography variant="h4">Felicidad en cada bocado</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Image
          src={photo}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="Imagen logo"
        />
      </Grid>
      <Grid
        item
        xs={12}
        display={{ xs: "flex", sm: "none" }}
        justifyContent={"center"}
      >
        <Button variant="contained">Pide ya</Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        display={{ xs: "none", sm: "flex" }}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="h4">
            PitsaJaus, donde la tradición se fusiona con el sabor.
          </Typography>
          <Button variant="contained" sx={{ px: 3, mt: 3 }}>
            Pide ya
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
