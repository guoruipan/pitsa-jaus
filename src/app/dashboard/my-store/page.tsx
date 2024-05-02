import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { getWithManagerId as getStore } from "#/models/store";
import RegisterStoreScreen from "#/screens/RegisterStore";
import MyStoreScreen from "#/screens/MyStore";

const pageTitle = "Mi tienda";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  const user = await getSessionUser();
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "manager")
    throw new Error("Este usuario no tiene permiso para ver esta página");

  const store = await getStore(user.id);

  return store ? (
    <MyStoreScreen store={store} />
  ) : (
    <RegisterStoreScreen user={user} />
  );
}
