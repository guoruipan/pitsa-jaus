import { Metadata } from "next";
import PrivacyPolicyScreen from "#/components/screens/PrivacyPolicy";

const pageTitle = "Política de privacidad";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return (
    <PrivacyPolicyScreen pageTitle={pageTitle} />
  );
}
