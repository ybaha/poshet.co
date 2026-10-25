import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";

export function ProductGrid({ products }: { products: readonly Product[] }) {
  return (
    <ul className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {products.map((product) => (
        <li key={product.slug}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
