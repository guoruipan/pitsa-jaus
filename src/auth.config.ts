/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnAuthPages = nextUrl.pathname.startsWith("/auth");

      if (isOnDashboard) {
        return isLoggedIn; // Redirect unauthenticated users to login page
      }
      if (isLoggedIn && isOnAuthPages) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    // https://authjs.dev/concepts/session-strategies
    // https://authjs.dev/guides/extending-the-session
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
