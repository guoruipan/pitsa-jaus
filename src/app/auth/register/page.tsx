import React from "react";
import { Metadata } from "next";
import H1 from "#/components/texts/H1";
import RegisterForm from "./RegisterForm";
import { PaperStack } from "#/components/containers/PaperStack";

const pageTitle = "Regístrate";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return (
    <PaperStack>
      <H1>{pageTitle}</H1>
      <RegisterForm />
    </PaperStack>
  );
}
