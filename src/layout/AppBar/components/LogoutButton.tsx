"use server";

import React from "react";
import { signOut } from "#/auth";

async function handleLogout() {
  "use server";
  return await signOut();
}

export default async function LogoutButton() {
  return (
    <form action={handleLogout}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
