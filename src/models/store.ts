"use server";

import { sql } from "@vercel/postgres";

export type Store = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  phone_number: string | undefined;
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

export async function completeList(term = "") {
  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // el param term es opcional. Si está, filtra por él. Si no, muestra la lista completa
    const query =
      term !== ""
        ? sql<Store>`SELECT * FROM stores WHERE postcode ILIKE '%' || ${term} || '%'`
        : sql<Store>`SELECT * FROM stores`;

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

export async function insert(store: Store) {
  try {
    await sql<Store>`
    INSERT INTO stores (name, address, city, state, postcode, phone_number, manager_id)
    VALUES (${store.name}, ${store.address}, ${store.city}, ${store.state}, ${store.postcode}, ${store.phone_number}, ${store.manager_id})
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to register new store.");
  }
}

export async function update(store: Store) {
  try {
    await sql<Store>`
    UPDATE stores SET name=${store.name}, address=${store.address}, city=${store.city}, state=${store.state}, 
    postcode=${store.postcode}, phone_number=${store.phone_number}, manager_id=${store.manager_id}
    WHERE id=${store.id}
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update store.");
  }
}

export async function getWithManagerId(manager_id: number) {
  try {
    const data =
      await sql<Store>`SELECT * FROM stores WHERE manager_id=${manager_id}`;

    if (data.rowCount > 0) return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch store with manager id");
  }
}

export async function getWithName(name: string) {
  try {
    const data = await sql<Store>`SELECT * FROM stores WHERE name=${name}`;

    if (data.rowCount > 0) return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch store with name");
  }
}
