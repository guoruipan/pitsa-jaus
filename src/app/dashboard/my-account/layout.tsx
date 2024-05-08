import React from "react";
import { Metadata } from "next";
import { PaperStack } from "#/components/containers/PaperStack";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Key as KeyIcon,
} from "@mui/icons-material";
import NextLink from "next/link";

const pageTitle = "Mi cuenta";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const options = [
    {
      name: "Editar perfil",
      link: "edit-profile",
      icon: <EditIcon />,
    },
    {
      name: "Cambiar contraseña",
      link: "change-password",
      icon: <KeyIcon />,
    },
    { name: "Borrar cuenta", link: "delete-account", icon: <DeleteIcon /> },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <List>
          <ListSubheader>Opciones</ListSubheader>
          {options.map((option) => {
            return (
              <ListItem key={option.link} disablePadding>
                <ListItemButton
                  href={`/dashboard/my-account/${option.link}`}
                  component={NextLink}
                >
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={12} md={9}>
        <PaperStack>{children}</PaperStack>
      </Grid>
    </Grid>
  );
}
