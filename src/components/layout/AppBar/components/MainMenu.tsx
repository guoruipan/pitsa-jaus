"use client";

import React from "react";
import { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "#/components/texts/Link";

const pages = [
  { name: "Nuestra carta", href: "/menu" },
  { name: "Encuéntranos", href: "/find-us" },
];

interface Props {
  breakpoint: "xs" | "md";
}

export default function MainMenu({ breakpoint }: Props) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  if (breakpoint === "xs") {
    return (
      <MainMenuXS
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
    );
  } else {
    return <MainMenuMD handleCloseNavMenu={handleCloseNavMenu} />;
  }
}

function MainMenuXS({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}: {
  anchorElNav: HTMLElement | null;
  handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
}) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="Menú principal"
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
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.href} onClick={handleCloseNavMenu}>
            <Link
              href={page.href}
              textAlign="center"
              color={"inherit"}
              underline="none"
            >
              {page.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function MainMenuMD({
  handleCloseNavMenu,
}: {
  handleCloseNavMenu: () => void;
}) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page.href}
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: "inherit",
            display: "block",
            ":hover": { textDecoration: "underline" },
          }}
        >
          <Link
            href={page.href}
            textAlign="center"
            color={"inherit"}
            underline="none"
          >
            {page.name}
          </Link>
        </Button>
      ))}
    </Box>
  );
}
