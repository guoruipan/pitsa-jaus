"use client";

import React from "react";
import { PaperStack } from "#/components/containers/PaperStack";
import H1 from "#/components/texts/H1";
import { User } from "#/models/user";
import UserDataSummary from "./UserDataSummary";
import OrderDataSummary from "./OrderDataSummary";
import CompleteOrderButton from "./CompleteOrderButton";

interface Props {
  user: User;
}

export default function CheckoutScreen({ user }: Props) {
  return (
    <PaperStack spacing={4}>
      <H1>Comprueba tus datos</H1>
      <UserDataSummary user={user} />
      <OrderDataSummary />
      <CompleteOrderButton user={user} />
    </PaperStack>
  );
}
