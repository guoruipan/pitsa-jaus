import React from "react";
import { isUserLoggedIn } from "#/lib/session";
import DeleteAccountForm from "./DeleteAccountForm";

export default async function Page() {
  const user = await isUserLoggedIn();

  return <DeleteAccountForm user={user} />;
}
