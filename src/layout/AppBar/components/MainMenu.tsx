import React from "react";
import { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface Page {
  name: string;
  href: string;
}

const pages: Page[] = [
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
  const handleCloseNavMenu = (href?: string) => {
    setAnchorElNav(null);
    window.location.href = href || "#"; // en el menú hamburguesa daba error sino
  };

  if (breakpoint === "xs") {
    return (
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
    );
  } else {
    return (
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
    );
  }
}
