import React from "react";
import { Metadata } from "next";
import RegisterSuccessScreen from "#/screens/RegisterSuccess"; 

const pageTitle = "Registro completado";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return  <RegisterSuccessScreen pageTitle={pageTitle} />
}
