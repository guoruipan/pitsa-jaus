import { sql } from "@vercel/postgres";

export type User = {
  id: number;
  name: string;
  pwd: string;
  email: string;
  home_address: string;
  role: "admin" | "manager" | "customer";
};