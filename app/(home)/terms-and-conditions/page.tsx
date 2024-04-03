import { Metadata } from "next";
import TermsAndCondScreen from "#/components/screens/TermsAndConditions";

const pageTitle = "Términos y condiciones";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return (
    <TermsAndCondScreen pageTitle={pageTitle} />
  );
}
