"use client";

import React from "react";
import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import NextLink from "next/link";

// basado en la plantilla "App bar with responsive menu" de aquí
// https://mui.com/material-ui/react-app-bar/

interface Page {
  name: string;
  href: string;
}

const pages: Page[] = [
  { name: "Nuestra carta", href: "/menu" },
  { name: "Encuéntranos", href: "/find-us" },
];

const settings = ["Mi cuenta", "Cerrar sesión"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (href?: string) => {
    setAnchorElNav(null);
    window.location.href = href || "#"; // en el menú hamburguesa daba error sino
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* icono (pantalla grande) */}
          <LocalPizzaIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          {/* texto pitsajaus (pantalla grande) */}
          <Typography
            variant="h6"
            noWrap
            component={NextLink}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PITSAJAUS
          </Typography>

          {/* menú hamburguesa (pantalla pequeña) */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* implementados los enlaces */}
              {pages.map((page) => (
                <MenuItem
                  key={page.href}
                  onClick={() => handleCloseNavMenu(page.href)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* icono (pantalla pequeña) */}
          <LocalPizzaIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* texto pitsajaus (pantalla pequeña) */}
          <Typography
            variant="h5"
            noWrap
            component={NextLink}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PITSAJAUS
          </Typography>
          {/* menú normal (pantalla grande) */}
          {/* implementados los enlaces */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.href}
                onClick={() => handleCloseNavMenu(page.href)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* menú usuario */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir ajustes">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* TODO implementar avatar imagen */}
                <Avatar alt="Usuario" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* TODO implementar enlaces */}
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
