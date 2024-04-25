import React from "react";
import { Metadata } from "next";
import DashboardScreen from "#/screens/Dashboard";

const pageTitle = "Dashboard";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return <DashboardScreen />;
}
