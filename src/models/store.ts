import { sql } from "@vercel/postgres";

export type Store = {
    id: number;
    name: string;
    address: string;
    postcode: string;
    manager_id: number;
  };

  export async function list(postcode? : string) {
    // TODO : IMPLEMENT PAGINATION
    // const ITEMS_PER_PAGE = 8;
    // const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
      let data;

      // el param postcode es opcional. Si está, filtra por él. Si no, muestra la lista completa
      // no puedo guardar query en variable y pasarla a data, tiene que estar directamente después de sql<Store>. probablemente para prevenir inyecciones de sql
      if (postcode){
        data = await sql<Store>`SELECT * FROM stores WHERE postcode ILIKE ${postcode}`;
      }
      else {
        data = await sql<Store>`SELECT * FROM stores`;
      }

      // si no encuentra registros, devolver array vacío
      if (data) {
        return data.rows;
      }
      else {
        return [];
      }
      
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch data about stores");
    }
  }