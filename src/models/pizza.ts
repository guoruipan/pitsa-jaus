import { sql } from "@vercel/postgres";

export type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
};

// TODO make noStore??
export async function list(currentPage?: number) {
  const pageSize = 8; // Número de elementos a mostrar
  const pageNumber = currentPage || 1; // Número de la página
  const offset = (pageNumber - 1) * pageSize;

  try {
    // TODO DELETE BELOW
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    //TODO DELETE ABOVE

    const data =
      await sql<Pizza>`SELECT * FROM pizzas LIMIT ${pageSize} OFFSET ${offset};`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about pizzas");
  }
}

export async function getWithId(id: number) {
  // devuevlve la pizza con el id especificado
  try {
    const data = await sql<Pizza>`SELECT * FROM pizzas WHERE id=${id}`;

    if (data.rowCount > 0) {
      return data.rows[0]; // Devuelve la primera pizza encontrada
    }
    // si no encuentra nada debería irse al catch
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch pizza with specified ID");
  }
}
