"use server";

import { signIn, signOut } from "#/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";

export async function checkPassword(
  plainPassword: string,
  hash: string,
): Promise<boolean> {
  // https://www.npmjs.com/package/bcrypt
  // tenerlo directamente en componentes de lado del Cliente parece dar problemas
  const result = await bcrypt.compare(plainPassword, hash);
  return result;
}

export async function authenticate(credentials: {
  email: string;
  password: string;
}): Promise<"Usuario o contraseña incorrectos" | "Algo fue mal" | undefined> {
  // TODO make return type
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
