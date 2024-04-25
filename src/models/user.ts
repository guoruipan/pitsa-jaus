"use server";

import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
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

  console.log("find a better way to redirect after insert user");
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
