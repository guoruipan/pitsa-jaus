import React from "react";
import { auth } from "#/auth";
import { PaperStack } from "#/components/containers/PaperStack";
import H1 from "#/components/texts/H1";
import { getWithEmail as getUser } from "#/models/user";
import ProfileForm from "./components/ProfileForm";

export default async function DashboardScreen() {
  const session = await auth();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (session === null || !session.user) throw new Error();

  const user = await getUser(session.user.email as string);

  if (!user) throw new Error();

  return (
    <PaperStack>
      <H1>Bienvenido, {user.name}</H1>
      <ProfileForm user={user} />
    </PaperStack>
  );
}
