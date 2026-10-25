import Image from "next/image";
import type { Product } from "@/data/products";
import { ButtonLink } from "../button-link";
import { Card, CardMedia } from "../card";
import { TagList } from "../tag-list";

/** Large card for a web product: native 16:9 screenshot, story, stack and an outbound link. */
export function ProductCard({ product }: { product: Product }) {
  const { name, category, description, href, hostname, image, stack } = product;

  return (
    <Card as="article" elevated padding="none" className="flex h-full flex-col p-2">
      <CardMedia aspect="16/9" className="bg-studio-ice">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 560px, 92vw"
          className="object-cover"
        />
      </CardMedia>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-6 md:px-6 md:pb-6">
        <p className="text-sm text-studio-muted">{category}</p>
        <h3 className="mt-2 font-display text-section font-medium text-studio-navy">{name}</h3>
        <p className="mt-4 text-[16px] leading-relaxed text-studio-muted">{description}</p>
        <TagList tags={stack} className="mt-6" />
        <div className="mt-auto pt-8">
          <ButtonLink href={href} external variant="outline">
            Visit {hostname}
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
