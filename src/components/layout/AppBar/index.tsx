import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import LoginButton from "./components/LoginButton";
import UserMenu from "./components/UserMenu";
import MainMenu from "./components/MainMenu";
import { auth } from "#/auth";
import Logo from "./components/Logo";

// basado en la plantilla "App bar with responsive menu" de aquí
// https://mui.com/material-ui/react-app-bar/

export default async function MyAppBar() {
  const session = await auth();

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

          {session ? <UserMenu /> : <LoginButton />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
