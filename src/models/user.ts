"use server";

import { sql } from "@vercel/postgres";

import bcrypt from "bcrypt";
import { signIn } from "#/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// bcrypt example
// https://github.com/vercel/next-learn/blob/main/dashboard/final-example/scripts/seed.js

export type User = {
  id: number;
  name: string;
  email: string;
  pwd: string;
  home_address?: string;
  role: "admin" | "manager" | "customer";
};

export async function insert(user: User) {
  try {
    const hashedPassword = await bcrypt.hash(user.pwd, 10);

    await sql<User>`
    INSERT INTO users (name, email, pwd, home_address, role)
    VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.home_address}, ${user.role})
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to register new user.");
  }

  // tiene que estar en un componente de servidor
  revalidatePath("/auth/register-success");
  redirect("/auth/register-success");
}

export async function getWithEmail(email: string) {
  try {
    const data = await sql<User>`SELECT * FROM users WHERE email=${email}`;

    return data.rowCount > 0 ? data.rows[0] : null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user with email");
  }
}

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
