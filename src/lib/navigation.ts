"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function redirectTo(path: string, revalidate = true) {
  // tiene que estar en un componente de servidor
  // https://nextjs.org/docs/app/api-reference/functions/redirect#client-component

  // revalidatePath borra el caché para esta ruta.
  revalidate && revalidatePath(path);
  redirect(path);
}
