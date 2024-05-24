import React from "react";
import { isUserLoggedIn } from "#/lib/session";
import ChangePasswordForm from "./ChangePasswordForm";

export default async function Page() {
  const user = await isUserLoggedIn();

  return <ChangePasswordForm user={user} />;
}
