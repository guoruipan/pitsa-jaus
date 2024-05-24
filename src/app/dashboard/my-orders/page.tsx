import React from "react";
import { Metadata } from "next";
import { checkUserRole } from "#/lib/session";

const pageTitle = "Mis pedidos";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  await checkUserRole("customer");

  return <>Mis pedidos</>;
}
