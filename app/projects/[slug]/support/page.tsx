import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SupportPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  redirect(`/projects/${slug}/contact`);
};

export default SupportPage;
