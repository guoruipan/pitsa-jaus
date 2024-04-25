import React from "react";
import { auth } from "#/auth";

export default async function DashboardScreen() {
  const session = await auth();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (session === null) throw new Error();
  if (!session.user) return null;

  return (
    <>
      Esto es el dashboard {session.user.name}
      <p>asdf</p>
    </>
  );
}
