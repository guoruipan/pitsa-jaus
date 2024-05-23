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
