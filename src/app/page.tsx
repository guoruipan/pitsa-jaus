import React from "react";
import Image from "next/image";
import { Button, Grid, Stack, SxProps, Theme, Typography } from "@mui/material";
import photo from "@/public/logo3.png";
import NextLink from "next/link";

// https://nextjs.org/docs/app/building-your-application/optimizing/images#responsive

export default async function Home() {
  return (
    <>
      <HomeXS />
      <HomeMD />
    </>
  );
}

function HomeXS() {
  return (
    <Stack
      spacing={2}
      display={{ xs: "flex", sm: "none" }}
      justifyContent={"center"}
      textAlign={"center"}
    >
      <Typography variant="h2" component={"h1"}>
        Felicidad en cada bocado
      </Typography>
      <Image
        src={photo}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="Logo pitsajaus"
        placeholder="blur"
      />
      <OrderNowButton />
    </Stack>
  );
}

function HomeMD() {
  return (
    <Grid container spacing={2} display={{ xs: "none", sm: "flex" }}>
      <Grid item xs={12} sm={4}>
        <Image
          src={photo}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="Logo pitsajaus"
          placeholder="blur"
        />
      </Grid>
      <Grid item xs={12} sm={8} alignContent={"center"}>
        <Typography variant="h4" component={"h1"}>
          PitsaJaus, donde la tradición se fusiona con el sabor.
        </Typography>
        <OrderNowButton sx={{ px: 3, mt: 3 }} />
      </Grid>
    </Grid>
  );
}

function OrderNowButton({ sx }: { sx?: SxProps<Theme> }) {
  // gracias a middleware, si intento entrar a dashboard sin sesión iniciada redirige a login
  return (
    <Button
      href="/dashboard/cart"
      component={NextLink}
      variant="contained"
      sx={{ ...sx }}
    >
      Pide ya
    </Button>
  );
}
