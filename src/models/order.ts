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

export type OrderLine = {
  id: number;
  order_id: number;
  pizza_id: number;
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

export async function updateOrder(order: Order) {
  try {
    await sql<Order>`
    UPDATE orders SET user_id=${order.user_id}, store_id=${order.store_id}, total=${order.total}, 
    order_date=${order.order_date.toISOString()}, sent_date=${order.sent_date?.toISOString()}, address=${order.address}
    WHERE id=${order.id}
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update order.");
  }
}

export async function insertOrderLine(orderLine: OrderLine) {
  try {
    await sql<OrderLine>`
    INSERT INTO order_lines (order_id, pizza_id, quantity)
    VALUES (${orderLine.order_id}, ${orderLine.pizza_id}, ${orderLine.quantity})
  `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to register new orderline.");
  }
}

const ITEMS_PER_PAGE = 5;

export async function listCustomerOrders(currentPage = 1, user_id: number) {
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

export async function getCustomerOrderTotalPages(user_id: number) {
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

export async function listStoreOrders(currentPage = 1, store_id: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<
      Order & { useremail: string }
    >`SELECT o.*, u.email as useremail FROM orders o INNER JOIN users u ON o.user_id=u.id WHERE store_id=${store_id} LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};`;

    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about orders");
  }
}

export async function getStoreOrderTotalPages(store_id: number) {
  try {
    const res =
      await sql`SELECT COUNT(*) FROM orders WHERE store_id=${store_id};`;

    // total pages
    return Math.ceil(Number(res.rows[0].count) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of orders.");
  }
}

export interface OrderLineDetails extends Pizza {
  quantity: number;
}

export async function listOrderDetails(order_id: number) {
  try {
    // FOR TESTING ONLY, NEVER IN PRODUCTION
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data =
      await sql<OrderLineDetails>`SELECT o.quantity, p.* FROM order_lines o INNER JOIN pizzas p ON o.pizza_id=p.id WHERE order_id=${order_id}`;

    console.log("reconsider this type");
    // si no encuentra registros, devolver array vacío
    return data?.rows || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data about order_lines");
  }
}
