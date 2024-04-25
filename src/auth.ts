/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { getWithEmail as getUser } from "./models/user";
import { checkPassword } from "./lib/session";
import z from "zod";

// https://stackoverflow.com/questions/74089665/next-auth-credentials-provider-authorize-type-error
// nextauth parece haber sido desarollado usando strict=false en la configuración de typescript.
// por ello, hay un error conocido con el tipo de retorno de la función authorize
// la solución recomendada es desactivar typescript strict mode en todo el proyecto
// No es la solución ideal, pero defino el tipo como Promise<any> y desactivo la advertencia con eslint-disable

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<any> {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await checkPassword(password, user.pwd);
          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});
