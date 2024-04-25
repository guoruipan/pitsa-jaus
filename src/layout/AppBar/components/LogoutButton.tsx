"use server";

import React from "react";
import { signOut } from "#/auth";
import { Button } from "@mui/material";

async function handleLogout() {
  "use server";
  return await signOut();
}

export default async function LogoutButton() {
  return (
    <form action={handleLogout}>
      <Button variant="text" type="submit">
        Sign Out
      </Button>
    </form>
  );
}
