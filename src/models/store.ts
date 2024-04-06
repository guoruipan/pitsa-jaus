import { sql } from "@vercel/postgres";

export type Store = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  phone_number: string;
  manager_id: number;
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
        await sql<Store>`SELECT * FROM stores WHERE postcode ILIKE '%' || ${term} || '%' LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    } else {
      data =
        await sql<Store>`SELECT * FROM stores LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    }

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about stores");
  }
}

export async function getTotalPages(term = "") {
  try {
    let count;

    if (term !== "") {
      count = await sql`SELECT COUNT(*) FROM stores WHERE postcode ILIKE '%' || ${term} || '%';`;
    } else {
      count = await sql`SELECT COUNT(*) FROM stores;`;
    }

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of stores.");
  }
}
