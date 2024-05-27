"use server";

import { sql } from "@vercel/postgres";
import { Pizza } from "./pizza";

export type Order = {
  id: number;
  user_id: number;
  store_id: number;
  total: number;
  order_date: Date;
  sent_date: Date | undefined;
  address: string;
};

// en lugar de guardar pizza_id: number, guardo un objeto de tipo Pizza para tener acceso directamente a
// datos como el precio, nombre y la foto
export type OrderLine = {
  id: number;
  order_id: number;
  pizza: Pizza;
  quantity: number;
};

export async function insertOrder(order: Order): Promise<number | undefined> {
  try {
    const data = await sql`
      INSERT INTO orders (user_id, store_id, total, order_date, sent_date, address)
      VALUES (${order.user_id}, ${order.store_id}, ${order.total}, ${order.order_date.toISOString()}, ${undefined}, ${order.address})
      RETURNING id AS generated_id
    `;
    if (data.rowCount > 0) return data.rows[0].generated_id as number;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to register new order.");
  }
}

export async function insertOrderLine(orderLine: OrderLine) {
  try {
    await sql<OrderLine>`
    INSERT INTO order_lines (order_id, pizza_id, quantity)
    VALUES (${orderLine.order_id}, ${orderLine.pizza.id}, ${orderLine.quantity})
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to register new orderline.");
  }
}

const ITEMS_PER_PAGE = 5;

export async function listOrders(currentPage = 1, user_id: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<
      Order & { storename: string }
    >`SELECT o.*, s.name as storename FROM orders o INNER JOIN stores s ON o.store_id=s.id WHERE user_id=${user_id} LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};`;

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about orders");
  }
}

export async function getTotalPages(user_id: number) {
  try {
    const res =
      await sql`SELECT COUNT(*) FROM orders WHERE user_id=${user_id};`;

    // total pages
    return Math.ceil(Number(res.rows[0].count) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of orders.");
  }
}
