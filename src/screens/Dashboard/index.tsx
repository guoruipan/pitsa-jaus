"use client";

import React from "react";
import { useState } from "react";
import { PaperStack } from "#/components/containers/PaperStack";
import H1 from "#/components/texts/H1";
import ProfileForm from "./components/ProfileForm";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import type { User } from "#/models/user";
import DeleteUser from "./components/DeleteUser";

interface Props {
  user: User;
}

export default function DashboardScreen({ user }: Props) {
  const [option, setOption] = useState(0);

  return (
    <Stack spacing={3}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOption(1)}>
            <ListItemText primary="Editar perfil" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOption(2)}>
            <ListItemText primary="Borrar usuario" />
          </ListItemButton>
        </ListItem>
      </List>

      <PaperStack>
        {(() => {
          switch (option) {
            case 1:
              return <ProfileForm user={user} />;
            case 2:
              return <DeleteUser user={user} />;
            default:
              return <H1 sx={{ py: "1rem" }}>Bienvenido, {user.name}</H1>;
          }
        })()}
      </PaperStack>
    </Stack>
  );
}
