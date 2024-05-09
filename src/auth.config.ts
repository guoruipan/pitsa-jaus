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
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as any;
      session.user.cart = [
        {
          id: 1, // Replace with actual ID
          order_id: 2, // Replace with actual order ID
          pizza: {
            id: 3, // Replace with actual pizza ID
            name: "Margherita",
            description:
              "A classic pizza with tomato sauce and mozzarella cheese.",
            price: 12.99,
            photo: "https://example.com/pizza_margherita.jpg",
          },
          quantity: 1,
        },
      ];
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
