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

// TODO make noStore??
export async function list(term = "", currentPage = 1) {
  const pageSize = 5; // Número de elementos a mostrar
  const offset = (currentPage - 1) * pageSize;

  console.log("Term in Store.list: " + term);
  console.log("currentPage in Store.list: " + currentPage);

  try {
    // TODO DELETE BELOW
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    //TODO DELETE ABOVE

    let data;

    // el param term es opcional. Si está, filtra por él. Si no, muestra la lista completa
    if (term !== "") {
      data =
        await sql<Store>`SELECT * FROM stores WHERE postcode ILIKE '%' || ${term} || '%' LIMIT ${pageSize} OFFSET ${offset}`;
    } else {
      data =
        await sql<Store>`SELECT * FROM stores LIMIT ${pageSize} OFFSET ${offset}`;
    }

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about stores");
  }
}
