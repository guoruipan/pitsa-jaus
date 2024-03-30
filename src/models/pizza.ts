import { sql } from "@vercel/postgres";

type Pizza = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
};

export async function listado() {
  // TODO : IMPLEMENT PAGINATION
  // const ITEMS_PER_PAGE = 8;
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<Pizza>`SELECT * FROM pizzas`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("No se pudo obtener los datos de pizzas");
  }
}
