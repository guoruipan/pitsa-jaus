import React from "react";
import type { User } from "#/models/user";
import { Button, Stack, Typography } from "@mui/material";
import H1 from "#/components/texts/H1";
import { deleteWithId as deleteUser } from "#/models/user";
import { logout } from "#/lib/session";

interface Props {
  user: User;
}

export default function DeleteUser({ user }: Props) {
  function handleDelete() {
    deleteUser(user.id);
    logout();
  }

  return (
    <Stack spacing={2}>
      <H1>Borrar cuenta</H1>
      <Typography>Esta acción es irreversible</Typography>
      <Button variant="contained" onClick={handleDelete}>
        Borrar mi cuenta
      </Button>
    </Stack>
  );
}
