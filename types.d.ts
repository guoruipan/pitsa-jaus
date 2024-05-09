/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import type { OrderLine } from "#/models/order";

// https://authjs.dev/getting-started/typescript#module-augmentation
declare module "next-auth" {
  interface User {
    // optional id: string; (when using database cast as number)
    // optional email: null | string;
    // optional image: null | string; (not in my database schema)
    // optional name: null | string;

    cart: OrderLine[];
  }
}
