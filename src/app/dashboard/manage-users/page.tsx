import React from "react";
import { auth } from "#/auth";
import { Metadata } from "next";
import { getWithEmail as getUser } from "#/models/user";
import ManageUsersScreen from "#/screens/ManageUsers";

const pageTitle = "Gestión de usuarios";

export const metadata: Metadata = {
  title: pageTitle,
};

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const session = await auth();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (session === null || !session.user) throw new Error();

  const user = await getUser(session.user.email as string);
  if (!user) throw new Error();

  if (user.role !== "admin") throw new Error();

  return (
    <ManageUsersScreen
      pageTitle={pageTitle}
      query={searchParams?.query}
      page={searchParams?.page}
    />
  );
}
