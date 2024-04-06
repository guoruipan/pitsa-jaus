import React from 'react';
import { Metadata } from "next";
import PrivacyPolicyScreen from "#/screens/PrivacyPolicy";

const pageTitle = "Política de privacidad";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return <PrivacyPolicyScreen pageTitle={pageTitle} />;
}
