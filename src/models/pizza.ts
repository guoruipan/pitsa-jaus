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

// TODO make noStore??
export async function list(currentPage = 1) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // TODO DELETE BELOW
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    //TODO DELETE ABOVE

    const data =
      await sql<Pizza>`SELECT * FROM pizzas ORDER BY id LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};`;

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
    // TODO DELETE BELOW
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    //TODO DELETE ABOVE

    const data =
      await sql<Pizza>`SELECT id, name, description, price, photo FROM pizzas WHERE id=${id}`;
    console.log(data.rows[0]);
    // si hago select * a veces no coge la foto

    if (data.rowCount > 0) {
      return data.rows[0]; // Devuelve la primera pizza encontrada
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch pizza with specified ID");
  }
}
