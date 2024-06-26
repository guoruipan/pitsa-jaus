// funciones de utilidad general, como es el formateo de fechas o de moneda

import { Pizza } from "#/models/pizza";

export function clamp(value: number, min: number, max: number) {
  // se asegura de que value permanezca entre el rango
  // min <= value && max >= value && value
  // value > max && max
  // value < min && min
  return Math.max(min, Math.min(value, max));
}

export function getPizzaPhoto(pizza: Pizza) {
  // no puede estar en /models/pizza.ts, ya que ahora es "use server", y las funciones dentro deben ser async
  return `/pizza/${pizza.id}_${pizza.photo}`;
}

export function formatCurrency(
  value: number,
  options?: { precision?: number },
): string {
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    ...options,
  });

  return formatter.format(value);
}
