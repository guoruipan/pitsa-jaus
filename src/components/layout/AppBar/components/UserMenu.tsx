"use client";

import React from "react";
import { useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "#/lib/session";
import type { User } from "#/models/user";
import Link from "#/components/texts/Link";
import { Typography } from "@mui/material";

const settings = [
  { name: "Mi perfil", href: "/dashboard" },
  { name: "Mis pedidos", href: "/dashboard/my-orders", role: "customer" },
  {
    name: "Mi tienda",
    href: "/dashboard/my-store",
    role: "manager",
  },
  {
    name: "Gestión de pedidos",
    href: "/dashboard/manage-orders",
    role: "manager",
  },
  {
    name: "Gestión de usuarios",
    href: "/dashboard/manage-users",
    role: "admin",
  },
];

interface Props {
  user: User;
}

export default function UserMenu({ user }: Props) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar src="/customer.png" alt="Usuario" />
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
        {settings.map(
          (setting) =>
            // en jsx no puedes meter un if, hay que usar operador lógico o ternario
            (!setting.role || setting.role === user.role) && (
              <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                <Link
                  href={setting.href}
                  color={"inherit"}
                  underline="none"
                  width={"100%"}
                  height={"100%"}
                >
                  {setting.name}
                </Link>
              </MenuItem>
            ),
        )}

        <MenuItem key={"logout"} onClick={handleCloseUserMenu}>
          {/* width y height a 100% para que el texto de enlace ocupe el contenedor entero (más o menos) */}
          <Typography onClick={handleLogout} width={"100%"} height={"100%"}>
            Cerrar sesión
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
