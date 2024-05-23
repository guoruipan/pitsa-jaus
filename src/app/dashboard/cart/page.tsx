import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import CartStepper from "./CartStepper";
import { completeList as listStores } from "#/models/store";

const pageTitle = "Carrito";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  const user = await getSessionUser();
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "customer")
    throw new Error(
      "Tienes que iniciar sesión como cliente para ver esta página",
    );

  const stores = await listStores();

  return <CartStepper stores={stores} user={user} />;
}
