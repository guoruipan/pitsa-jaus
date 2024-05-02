import { sql } from "@vercel/postgres";

export type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
};

const ITEMS_PER_PAGE = 8;

export function getPhotoRoute(pizza: Pizza) {
  return `/pizza/${pizza.id}_${pizza.photo}`;
}

export async function list(currentPage = 1) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data =
      await sql<Pizza>`SELECT * FROM pizzas ORDER BY id LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};`;

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about pizzas");
  }
}

export async function getTotalPages() {
  try {
    const res = await sql`SELECT COUNT(*) FROM pizzas;`;

    // total pages
    return Math.ceil(Number(res.rows[0].count) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of pizzas.");
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
    throw new Error("Failed to fetch pizza with specified ID");
  }
}
