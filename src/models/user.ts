"use server";

import { sql } from "@vercel/postgres";

export type User = {
  id: number;
  name: string;
  email: string;
  pwd: string;
  home_address?: string;
  role: "admin" | "manager" | "customer";
  status: "validated" | "pending";
};

const ITEMS_PER_PAGE = 5;

// TODO make noStore??
export async function list(term = "", currentPage = 1) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // el param term es opcional. Si está, filtra por él. Si no, muestra la lista completa
    const query =
      term !== ""
        ? sql<User>`SELECT * FROM users WHERE email ILIKE '%' || ${term} || '%' LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
        : sql<User>`SELECT * FROM users LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

    const data = await query;

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about users");
  }
}

export async function getTotalPages(term = "") {
  try {
    const query =
      term !== ""
        ? sql`SELECT COUNT(*) FROM users WHERE email ILIKE '%' || ${term} || '%';`
        : sql`SELECT COUNT(*) FROM users;`;

    const res = await query;

    return Math.ceil(Number(res.rows[0].count) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of users.");
  }
}

export async function insert(user: User) {
  try {
    await sql<User>`
    INSERT INTO users (name, email, pwd, home_address, role, status)
    VALUES (${user.name}, ${user.email}, ${user.pwd}, ${user.home_address}, ${user.role}, ${user.status})
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to register new user.");
  }
}

export async function update(user: User) {
  try {
    await sql<User>`
    UPDATE users SET name=${user.name}, email=${user.email}, pwd=${user.pwd}, home_address=${user.home_address}, role=${user.role}, status=${user.status}
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

    if (data.rowCount > 0) return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user with email");
  }
}
