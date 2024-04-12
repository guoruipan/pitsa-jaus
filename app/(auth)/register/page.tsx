import React from "react";
import { Metadata } from "next";
import RegisterScreen from "#/screens/Register";

const pageTitle = "Regístrate";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return <RegisterScreen pageTitle={pageTitle} />;
}
