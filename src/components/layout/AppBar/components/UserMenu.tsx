"use client";

import React from "react";
import { useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "#/lib/session";

import { Typography } from "@mui/material";

const settings: { name: string; href: string }[] = [
  { name: "Mi perfil", href: "/dashboard" },
];

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  console.log(
    "Consider just nesting a link inside menuitems for more optimized routing",
  );

  const handleCloseUserMenu = (href?: string) => {
    setAnchorElUser(null);
    href && (window.location.href = href);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        {/* TODO implementar avatar imagen */}
        <Avatar alt="Usuario" />
      </IconButton>

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
        onClose={() => handleCloseUserMenu()}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.name}
            onClick={() => handleCloseUserMenu(setting.href)}
          >
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
        <MenuItem key={"logout"} onClick={() => handleCloseUserMenu()}>
          <form action={logout}>
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                margin: 0,
                padding: 0,
                font: "inherit",
                cursor: "pointer",
              }}
            >
              Cierra sesión
            </button>
          </form>
        </MenuItem>
      </Menu>
    </Box>
  );
}
