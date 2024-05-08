import React from "react";
import { getSessionUser } from "#/lib/session";
import DeleteAccountForm from "./DeleteAccountForm";

export default async function Page() {
  const user = await getSessionUser();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (!user) throw new Error("No hay usuario logueado");

  return <DeleteAccountForm user={user} />;
}
