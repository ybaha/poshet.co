import { redirect } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const SupportPage = ({ params }: PageProps) => {
  redirect(`/apps/${params.slug}/contact`);
};

export default SupportPage;
