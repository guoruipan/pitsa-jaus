"use client";

import React from "react";
import { useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Link from "#/components/texts/Link";

const settings: { name: string; href: string }[] = [
  { name: "Mi perfil", href: "/dashboard" },
];

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        {/* TODO implementar avatar imagen */}
        <Avatar alt="Usuario" src="/static/images/avatar/2.jpg" />
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
        onClose={handleCloseUserMenu}
      >
        {/* TODO implementar enlaces */}
        {settings.map((setting) => (
          <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
            <Link
              href={setting.href}
              textAlign={"center"}
              color={"inherit"}
              underline="hover"
            >
              {setting.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
