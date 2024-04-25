import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import LoginButton from "./components/LoginButton";
import UserMenu from "./components/UserMenu";
import LogoAndTitle from "./components/LogoAndTitle";
import MainMenu from "./components/MainMenu";
import LogoutButton from "./components/LogoutButton";
import { auth } from "#/auth";

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
          <LogoAndTitle breakpoint="xs" />
          {/* tamaño grande */}
          <LogoAndTitle breakpoint="md" />
          <MainMenu breakpoint="md" />

          {!session && <LoginButton />}

          {session && (
            <>
              <UserMenu>
                <LogoutButton />
              </UserMenu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
