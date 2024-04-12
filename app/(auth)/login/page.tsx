import React from "react";
import { Metadata } from "next";
import LoginScreen from "#/screens/Login"; 

const pageTitle = "Inicia sesión";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return  <LoginScreen pageTitle={pageTitle} />;
}
