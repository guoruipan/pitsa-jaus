"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

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

  revalidatePath("/register-success");
  redirect("/register-success");
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
