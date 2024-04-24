/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { getWithEmail as getUser, checkPassword } from "./models/user";
import z from "zod";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
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
