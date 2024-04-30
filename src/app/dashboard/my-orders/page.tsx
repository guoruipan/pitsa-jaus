import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";

const pageTitle = "Mis pedidos";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  const user = await getSessionUser();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "customer")
    throw new Error("Este usuario no tiene permiso para ver esta página");

  return <>Mis pedidos</>;
}
