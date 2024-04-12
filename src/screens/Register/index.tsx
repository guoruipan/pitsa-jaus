import React from "react";
import H1 from "#/components/texts/H1";
import RegisterForm from "./components/RegisterForm";
import { PaperStack } from "#/components/containers/PaperStack";

interface Props {
  pageTitle: string;
}

export default function RegisterScreen({ pageTitle }: Props) {
  return (
    <PaperStack>
      <H1>{pageTitle}</H1>
      <RegisterForm />
    </PaperStack>
  );
}
