"use client"; // Error components must be Client Components

// https://nextjs.org/docs/app/building-your-application/routing/error-handling
import React from "react";
import { useEffect } from "react";
import ErrorScreen from "#/screens/Error";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorScreen reset={reset} />;
}
