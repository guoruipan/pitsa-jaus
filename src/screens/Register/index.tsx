import React from "react";
import H1 from "#/components/ui/H1";
import Stack from "@mui/material/Stack";
import RegisterForm from "./components/RegisterForm";

interface Props {
  pageTitle: string;
}

export default function RegisterScreen({ pageTitle }: Props) {
  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <RegisterForm />
    </Stack>
  );
}
