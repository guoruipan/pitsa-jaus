"use server";

import { auth } from "#/auth";
import { OrderLine } from "#/models/order";

export async function getSessionCart() {
  const session = await auth();
  return session?.user?.cart;
}

export async function clearSessionCart() {
  const session = await auth();
  if (session?.user?.cart) session.user.cart = [];
}

export async function addToSessionCart(item: OrderLine) {
  const session = await auth();
  if (!session || !session.user) return;

  const currentCart = session.user.cart || []; // inicializo carrito vacío si no existe
  console.log(`Carrito en sesión antes de añadir: `);
  console.log(session.user.cart);
  session.user.cart = [...currentCart, item];
  console.log(`Carrito en sesión después de añadir: `);
  console.log(session.user.cart);
}

export async function removeFromSessionCart(position: number) {
  const session = await auth();
  if (!session || !session.user) return;

  const currentCart = session.user.cart || []; // inicializo carrito vacío si no existe
  session.user.cart = currentCart.splice(position, 1);
  console.log(session.user.cart);
}
