import React from "react";
import { Metadata } from "next";
import { checkUserRole } from "#/lib/session";
import CartStepper from "./CartStepper";
import { completeList as listStores } from "#/models/store";

const pageTitle = "Carrito";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  const user = await checkUserRole("customer");
  const stores = await listStores();

  return <CartStepper stores={stores} user={user} />;
}
