"use server";

// si no tiene "use server" no compila

import bcrypt from "bcrypt";

export async function hashPassword(plainPassword: string) {
  return bcrypt.hash(plainPassword, 10);
}

export async function checkPassword(
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  // https://www.npmjs.com/package/bcrypt
  // tenerlo directamente en componentes de lado del Cliente parece dar problemas
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
}
