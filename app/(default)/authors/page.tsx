import { Metadata } from "next";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { authors } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Authors - Poshet.co",
  description: "Meet the expert contributors behind Poshet's content",
};

export default function AuthorsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Authors</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {authors.map((author) => (
          <Link
            key={author.slug}
            href={`/author/${author.slug}`}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={author.image} alt={author.name} />
                <AvatarFallback>
                  {author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{author.name}</h2>
                <p className="text-gray-600 mb-2">{author.role}</p>
                <p className="text-gray-500 text-sm">{author.bio}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
