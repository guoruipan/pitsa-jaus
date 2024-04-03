import { sql } from "@vercel/postgres";

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export async function list() {
  // TODO : IMPLEMENT PAGINATION
  // const ITEMS_PER_PAGE = 8;
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<Pizza>`SELECT * FROM pizzas`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about pizzas");
  }
}

export async function getWithId(id: number) {
  // returns the pizza with the specified id
  try {
    const data = await sql<Pizza>`SELECT * FROM pizzas WHERE id=${id}`;

    if (data.rowCount > 0) {
      return data.rows[0]; // Devuelve la primera pizza encontrada
    } else {
      throw new Error("Failed to fetch pizza with specified ID");
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch pizza with specified ID");
  }
}
