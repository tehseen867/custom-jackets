"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { sanityProduct } from "@/app/types/product";
import { client } from "@/sanity/lib/client";
import Card from "@/app/components/card";
import { urlFor } from "@/sanity/lib/image";

export default function SearchResultsPage() {
  const [products, setProducts] = useState<sanityProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const query = params.query as string;

  useEffect(() => {
    async function fetchProducts(query: string) {
      if (!query) {
        setProducts([]);
        setLoading(false);
        return;
      }

      try {
        const searchQuery = `*[
          _type in ["manProduct", "womanProduct",] &&
          (productName match $query || category match $query || subCategory match $query)
        ] {
          subCategory,
          category,
          productName,
          productImages,
          _id,
          stock,
          description,
          colorOptions,
          sizeOptions,
          price,
          oldPrice,
          stockLimit,
          popular,
          sale
        }`;

        // Corrected params object: the key must match the placeholder in the query ($query)
        const paramsSanity: Record<string, string> = { query: `*${query}*` };

        // Fetch products from Sanity
        const res = await client.fetch<sanityProduct[]>(searchQuery, paramsSanity);

        setProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts(query);
  }, [query]);

  console.log(query);

  return (
    <main className="container mx-auto mt-20 py-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          Search Results for &quot;{query}&quot;
        </h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p className="text-red-500">No products found for &quot;{query}&quot;.</p>
        )}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                name={product.productName}
                price={product.oldPrice}
                newPrice={product.price}
                popular={product.popular}
                image={
                  product.productImages?.[0]
                    ? urlFor(product.productImages[0]).url()
                    : "/placeholder-image.png"
                }
                isSale={product.sale}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}