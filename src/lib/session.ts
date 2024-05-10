"use server";

import { auth, signIn, signOut } from "#/auth";
import { AuthError } from "next-auth";
import { User } from "#/models/user";
import { getWithEmail as getUser } from "#/models/user";

export async function authenticate(credentials: {
  email: string;
  password: string;
}) {
  // el tipo de retorno implícito es : Promise<"Usuario o contraseña incorrectos" | "Algo fue mal" | undefined>
  try {
    await signIn("credentials", credentials);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Usuario o contraseña incorrectos";
        default:
          return "Algo fue mal";
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut();
}

export async function getSessionUser(): Promise<User | undefined> {
  const session = await auth();
  if (!session || !session.user) return;

  const user = await getUser(session.user.email as string);
  // user: User | undefined
  return user;
}
