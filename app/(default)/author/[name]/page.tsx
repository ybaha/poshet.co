import { Metadata } from "next";
import Image from "next/image";
import { authors } from "../../authors/page";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export async function generateStaticParams() {
  return authors.map((author) => ({
    name: author.slug,
  }));
}

export const generateMetadata = ({
  params,
}: {
  params: { name: string };
}): Metadata => {
  const author = authors.find((a) => a.slug === params.name);
  return {
    title: `${author?.name} - Poshet.co Author`,
    description: author?.bio,
    openGraph: {
      images: author?.image ? [author.image] : [],
    },
  };
};

export default function AuthorPage({ params }: { params: { name: string } }) {
  const author = authors.find((a) => a.slug === params.name);

  if (!author) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Author not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-16 h-16 mb-4">
          <AvatarImage src={author.image} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold">{author.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{author.role}</p>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600">{author.bio}</p>
      </div>
    </div>
  );
}
