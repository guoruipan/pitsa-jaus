import React from "react";
import { auth } from "#/auth";
import { Metadata } from "next";
import { getWithEmail as getUser } from "#/models/user";

const pageTitle = "Gestión de pedidos";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  const session = await auth();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (session === null || !session.user) throw new Error();

  const user = await getUser(session.user.email as string);
  if (!user) throw new Error();

  return <>Gestión pedidos</>;
}
