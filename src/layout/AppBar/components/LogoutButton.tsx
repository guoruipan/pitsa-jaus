"use server";

import React from "react";
import { signOut } from "#/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}
