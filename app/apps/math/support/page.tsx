import { Metadata } from "next";
import SupportPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Support - Math Answers AI",
  description: "Get help with Math Answers AI application",
};

export default function SupportPage() {
  return (
    <div>
      <SupportPageClient />
    </div>
  );
}
