import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";

const pageTitle = "Gestión de pedidos";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  const user = await getSessionUser();
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "manager")
    throw new Error("Este usuario no tiene permiso para ver esta página");

  return <>Gestión pedidos</>;
}
