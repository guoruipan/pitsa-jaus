import React from "react";
import { Metadata } from "next";
import ManageUsersScreen from "#/screens/ManageUsers";
import { getSessionUser } from "#/lib/session";

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
  const user = await getSessionUser();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "admin")
    throw new Error("Este usuario no tiene permiso para ver esta página");

  return (
    <ManageUsersScreen
      pageTitle={pageTitle}
      query={searchParams?.query}
      page={searchParams?.page}
    />
  );
}
