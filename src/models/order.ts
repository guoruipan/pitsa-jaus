"use server";

// import { sql } from "@vercel/postgres";
import { Pizza } from "./pizza";

export type Order = {
  id: number;
  user_id: number;
  store_id: number;
  total: number;
  order_date: Date;
  sent_date: Date | undefined;
};

// en lugar de guardar pizza_id: number, guardo un objeto de tipo Pizza para tener acceso directamente a
// datos como el precio, nombre y la foto
export type OrderLine = {
  id: number;
  order_id: number;
  pizza: Pizza;
  quantity: number;
};
