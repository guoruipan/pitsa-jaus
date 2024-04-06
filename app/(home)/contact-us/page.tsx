import React from "react";
import { Metadata } from "next";
import ContactScreen from "#/screens/ContactUs";

const pageTitle = "Contáctanos";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return <ContactScreen pageTitle={pageTitle} />;
}
