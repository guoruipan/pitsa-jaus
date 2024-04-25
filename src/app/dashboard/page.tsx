import React from "react";
import { Metadata } from "next";
import { auth } from "#/auth";

const pageTitle = "Dashboard";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  const session = await auth();

  if (session === null) throw new Error();

  if (!session.user) return null;
  return <>Esto es el dashboard {session.user.name}</>;
}
