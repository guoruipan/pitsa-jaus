import React from "react";
import Image from "next/image";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import photo from "@/public/logo3.png";
import NextLink from "next/link";

// https://nextjs.org/docs/app/building-your-application/optimizing/images#responsive

export default async function Home() {
  return (
    <>
      <HomeXS />
      <HomeMD />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <MyCard
            image="/two_pizza.webp"
            title="2x1 por tiempo limitado"
            description="No te pierdas nuestras ofertas semanales"
            href="/auth/login"
            buttonText="¡Lo quiero!"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyCard
            image="/pizza_slice.webp"
            title="¡Listo en 10 minutos!"
            description="Pide y paga desde donde quieras, como quieras"
            href="/auth/login"
            buttonText="Descúbrelo"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyCard
            image="/delivery_guy.webp"
            title="¿Ganas de Pitsajaus&#174;?"
            description="Elige tu pizza favorita y nosotros te la llevamos."
            href="/menu"
            buttonText="¡Pide ya!"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyCard
            image="/discount.webp"
            title="Acumula puntos"
            description="Y canjéalos por recompensas increíbles"
            href="/auth/login"
            buttonText="Regístrate"
          />
        </Grid>
      </Grid>
    </>
  );
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

function MyCard({ image, title, description, href, buttonText }: CardProps) {
  return (
    <Card sx={{ borderRadius: "1rem", pb: 2 }}>
      <CardMedia sx={{ height: 250 }} image={image} />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          component={NextLink}
          href={href}
          sx={{ width: "75%" }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

function HomeXS() {
  return (
    <Stack
      spacing={2}
      display={{ xs: "flex", sm: "none" }}
      justifyContent={"center"}
      textAlign={"center"}
      sx={{ mb: 4 }}
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
