import React from "react";
import { Metadata } from "next";
import MyAccountScreen from "#/app/dashboard/my-account/MyAccountScreen";
import { getSessionUser } from "#/lib/session";

const pageTitle = "Mi cuenta";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  const user = await getSessionUser();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (!user) throw new Error("No hay usuario logueado");

  return <MyAccountScreen user={user} />;
}
