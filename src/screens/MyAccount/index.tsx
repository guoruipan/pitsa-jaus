"use client";

import React from "react";
import { useState } from "react";
import { PaperStack } from "#/components/containers/PaperStack";
import EditAccountForm from "./components/EditAccountForm";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import type { User } from "#/models/user";
import DeleteUser from "./components/DeleteUser";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import WelcomeUser from "./components/WelcomeUser";

interface Props {
  user: User;
}

export default function MyAccountScreen({ user }: Props) {
  const [option, setOption] = useState(0);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <List>
          <ListSubheader>Opciones</ListSubheader>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOption(1)}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Editar perfil" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOption(2)}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Borrar usuario" />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={9}>
        <PaperStack>
          {(() => {
            switch (option) {
              case 1:
                return <EditAccountForm user={user} />;
              case 2:
                return <DeleteUser user={user} />;
              default:
                return <WelcomeUser user={user} />;
            }
          })()}
        </PaperStack>
      </Grid>
    </Grid>
  );
}
