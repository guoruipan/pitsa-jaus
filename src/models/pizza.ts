import { sql } from "@vercel/postgres";

export type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const ITEMS_PER_PAGE = 8;

// TODO make noStore??
export async function list(currentPage = 1) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // TODO DELETE BELOW
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    //TODO DELETE ABOVE

    const data =
      await sql<Pizza>`SELECT * FROM pizzas LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about pizzas");
  }
}

export async function getTotalPages() {
  try {
    const count = await sql`SELECT COUNT(*) FROM pizzas;`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of pizzas.");
  }
}

export async function getWithId(id: number) {
  // devuevlve la pizza con el id especificado
  try {
    const data = await sql<Pizza>`SELECT * FROM pizzas WHERE id=${id}`;

    if (data.rowCount > 0) {
      return data.rows[0]; // Devuelve la primera pizza encontrada
    } else {
      throw new Error("Failed to fetch pizza with specified ID"); // en principio el else no hace falta, pero typescript se queja porque esto puede devolver undefined si no está
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch pizza with specified ID");
  }
}
