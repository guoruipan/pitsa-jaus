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

export async function list(term = "", currentPage = 1) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // el param term es opcional. Si está, filtra por él. Si no, muestra la lista completa
    const query =
      term !== ""
        ? sql<Store>`SELECT * FROM stores WHERE postcode ILIKE '%' || ${term} || '%' LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
        : sql<Store>`SELECT * FROM stores LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

    const data = await query;

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about stores");
  }
}

export async function getTotalPages(term = "") {
  try {
    const query =
      term !== ""
        ? sql`SELECT COUNT(*) FROM stores WHERE postcode ILIKE '%' || ${term} || '%';`
        : sql`SELECT COUNT(*) FROM stores;`;

    const res = await query;

    return Math.ceil(Number(res.rows[0].count) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of stores.");
  }
}
