import React, { Suspense } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import LoginButton from "./components/LoginButton";
import UserMenu from "./components/UserMenu";
import MainMenu from "./components/MainMenu";
import { auth } from "#/auth";
import Logo from "./components/Logo";
import { getWithEmail as getUser } from "#/models/user";
import ShoppingCartIcon from "./components/ShoppingCartIcon";
import { CircularProgress } from "@mui/material";

// basado en la plantilla "App bar with responsive menu" de aquí
// https://mui.com/material-ui/react-app-bar/

export default function MyAppBar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* tamaño pequeño */}
          <MainMenu breakpoint="xs" />
          <Logo breakpoint="xs" />
          {/* tamaño grande */}
          <Logo breakpoint="md" />
          <MainMenu breakpoint="md" />

          <Suspense
            key={"appbar suspense"}
            fallback={<CircularProgress color="inherit" />}
          >
            <UserIconsContainer />
          </Suspense>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

async function UserIconsContainer() {
  const session = await auth();
  const user = await getUser(session?.user?.email as string);

  // este contenedor es para evitar un warning. como es async, tarda en renderizarse y no devuelve ReactNode válido

  return (
    <>
      {user && user.role === "customer" && <ShoppingCartIcon />}
      {user ? <UserMenu user={user} /> : <LoginButton />}
    </>
  );
}
