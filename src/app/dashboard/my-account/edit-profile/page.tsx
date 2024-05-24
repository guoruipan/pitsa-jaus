import React from "react";
import { isUserLoggedIn } from "#/lib/session";
import EditProfileForm from "./EditProfileForm";

export default async function Page() {
  const user = await isUserLoggedIn();

  return <EditProfileForm user={user} />;
}
