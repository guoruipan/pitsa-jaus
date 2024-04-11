"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type User = {
  id: number;
  name: string;
  pwd: string;
  email: string;
  home_address?: string;
  role: "admin" | "manager" | "customer";
};

export async function insert(user: User) {
  try {
    await sql<User>`
    INSERT INTO users (name, pwd, email, home_address, role)
    VALUES (${user.name}, ${user.pwd}, ${user.email}, ${user.home_address}, ${user.role})
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
