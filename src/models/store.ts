import { sql } from "@vercel/postgres";

export type Store = {
    id: number;
    name: string;
    address: string;
    postcode: string;
    manager_id: number;
  };