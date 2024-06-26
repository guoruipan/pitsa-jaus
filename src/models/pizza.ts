"use server";

/* eslint no-console: "off" */
import { sql } from "@vercel/postgres";

export type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
};

const ITEMS_PER_PAGE = 8;

export async function insert(pizza: Pizza): Promise<number | undefined> {
  try {
    const data = await sql`
    INSERT INTO pizzas (name, description, price, photo)
    VALUES (${pizza.name}, ${pizza.description}, ${pizza.price}, ${pizza.photo})
    RETURNING id AS generated_id
  `;
    if (data.rowCount > 0) return data.rows[0].generated_id as number;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("No se pudo registrar la nueva pizza");
  }
}

export async function update(pizza: Pizza) {
  try {
    await sql<Pizza>`
    UPDATE pizzas SET name=${pizza.name}, description=${pizza.description}, price=${pizza.price}, photo=${pizza.photo}
    WHERE id=${pizza.id}
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("No se pudo actualizar los datos de la pizza");
  }
}

// delete es una palabra reservada en ts
export async function deleteWithId(id: number) {
  try {
    await sql<Pizza>`
    DELETE FROM pizzas WHERE id=${id}
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("No se pudo borrar la pizza.");
  }
}

export async function list(term = "", currentPage = 1) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // el param term es opcional. Si está, filtra por él. Si no, muestra la lista completa
    const query =
      term !== ""
        ? sql<Pizza>`SELECT * FROM pizzas WHERE name ILIKE '%' || ${term} || '%' LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
        : sql<Pizza>`SELECT * FROM pizzas LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};`;

    const data = await query;

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("No se pudo obtener los datos de las pizzas");
  }
}

export async function getTotalPages(term = "") {
  try {
    const query =
      term !== ""
        ? sql`SELECT COUNT(*) FROM pizzas WHERE name ILIKE '%' || ${term} || '%';`
        : sql`SELECT COUNT(*) FROM pizzas;`;

    const res = await query;

    // total pages
    return Math.ceil(Number(res.rows[0].count) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("No se pudo obtener los datos de las pizzas.");
  }
}

export async function getWithId(id: number) {
  // Devuelve la primera pizza encontrada con el id pasado
  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Pizza>`SELECT * FROM pizzas WHERE id=${id}`;

    if (data.rowCount > 0) return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("No se pudo obtener los datos de la pizza");
  }
}
