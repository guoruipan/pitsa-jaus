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

const ITEMS_PER_PAGE = 5;

// TODO make noStore??
export async function list(term = "", currentPage = 1) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // TODO DELETE BELOW
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    //TODO DELETE ABOVE

    let data;

    // el param term es opcional. Si está, filtra por él. Si no, muestra la lista completa
    if (term !== "") {
      data =
        await sql<User>`SELECT * FROM users WHERE email ILIKE '%' || ${term} || '%' LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    } else {
      data =
        await sql<User>`SELECT * FROM users LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    }

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about users");
  }
}

export async function getTotalPages(term = "") {
  try {
    let count;

    if (term !== "") {
      count =
        await sql`SELECT COUNT(*) FROM users WHERE email ILIKE '%' || ${term} || '%';`;
    } else {
      count = await sql`SELECT COUNT(*) FROM users;`;
    }

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of users.");
  }
}

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

export async function update(user: User, newPwd: boolean) {
  try {
    // si mantienen la vieja contraseña no quiero hacer hash otra vez
    const hashedPassword = newPwd ? await bcrypt.hash(user.pwd, 10) : user.pwd;

    await sql<User>`
    UPDATE users SET name=${user.name}, email=${user.email}, pwd=${hashedPassword}, home_address=${user.home_address}, role=${user.role}
    WHERE id=${user.id}
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update user.");
  }
}

// delete es una palabra reservada en ts
export async function deleteWithId(id: number) {
  try {
    await sql<User>`
    DELETE FROM users WHERE id=${id}
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete user.");
  }
}

export async function getWithEmail(email: string) {
  try {
    const data = await sql<User>`SELECT * FROM users WHERE email=${email}`;

    return data.rowCount > 0 ? data.rows[0] : undefined;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user with email");
  }
}

export async function getWithId(id: number) {
  // unused
  try {
    const data = await sql<User>`SELECT * FROM users WHERE id=${id}`;

    return data.rowCount > 0 ? data.rows[0] : undefined;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user with id");
  }
}
