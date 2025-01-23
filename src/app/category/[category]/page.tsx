"use client";
import { sanityProduct } from "@/app/types/product";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Card from "@/app/components/card";
import { menuMen, menuWomen } from "@/app/components/data/menu";

const menCategories = [
  { name: "Bomber Jackets", href: "/subcategory/manleatherjackets/bomberjackets" },
  { name: "Biker Jackets", href: "/subcategory/manleatherjackets/bikerjackets" },
  { name: "Suede Jackets", href: "/subcategory/manleatherjackets/suedejackets" },
  { name: "Leather Blazers", href: "/subcategory/manleatherjackets/leatherblazers" },
  { name: "Aviator Jackets", href: "/subcategory/manleatherjackets/aviatorjackets" },
  { name: "Winter Coats", href: "/subcategory/mancoats/wintercoats" },
  { name: "Winter Jackets", href: "/subcategory/manleatherjackets/winterjackets" },
  { name: "Hooded Leather Jackets", href: "/subcategory/manleatherjackets/hoodedleatherjackets" },
  { name: "Vintage Leather Jackets", href: "/subcategory/manleatherjackets/vintageleatherjackets" },
  { name: "Varsity jackets", href: "/subcategory/manleatherjackets/varsityjackets" },
  { name: "Leather Vests", href: "/subcategory/manleatherjackets/leathervests" },
];

const womenCategories = [
  { name: "Varsity Jackets", href: "/subcategory/womanleatherjackets/varsityJackets" },
  { name: "Bomber Jackets", href: "/subcategory/womanleatherjackets/bomberjackets" },
  { name: "Biker Jackets", href: "/subcategory/womanleatherjackets/bikerjackets" },
  { name: "Aviator Jackets", href: "/subcategory/womanleatherjackets/aviatorjackets" },
  { name: "Suede Jackets", href: "/subcategory/womanleatherjackets/suedejackets" },
  { name: "Leather Blazers", href: "/subcategory/womanleatherjackets/leatherblazers" },
  { name: "Leather Vests", href: "/subcategory/womanleatherjackets/leathervests" },
  { name: "Plus Size Leather Jackets", href: "/subcategory/womanleatherjackets/plussizeleatherjackets" }
];

export default function CategoryPage() {
  const [products, setProducts] = useState<sanityProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState("");

  const params = useParams();
  const pathname = usePathname();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;

  useEffect(() => {
    async function fetchProducts(category: string | undefined) {
      const formattedCategory = category?.toLowerCase().replace(/%26/g, "&");

      try {
        let query = `*[_type in ["manProduct", "womanProduct"]`;

        if (formattedCategory) {
          query += ` && category match $formattedCategory`;
        }

        query += `] {
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
          stockLimit,
          popular,
          sale,
          oldPrice
        }`;

        const res = await client.fetch(query, {
          formattedCategory: formattedCategory ?? "",
        });

        setProducts(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }

      // Set the category name based on the URL parameter
      const matchedName = [...menuMen, ...menuWomen]
        .map((item) => item.name)
        .find((name) => {
          const formattedName = name.toLowerCase().replace(/\s+/g, "");
          return (
            formattedCategory === `man${formattedName}` ||
            formattedCategory === `woman${formattedName}`
          );
        });

      setCategoryName(matchedName || "");
    }

    fetchProducts(category);
  }, [category]);

  return (
    <main className="container mx-auto mt-12 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 pr-8">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">MEN&apos;S COLLECTION</h2>
            <nav className="space-y-2 px-2">
              {menCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`block text-sm hover:text-black hover:underline underline-offset-1 hover:px-1 ${
                    pathname.startsWith(cat.href) ? "text-black font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">WOMEN&apos;S COLLECTION</h2>
            <nav className="space-y-2 px-2">
              {womenCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`block text-sm hover:text-black hover:underline underline-offset-1 hover:px-1 ${
                    pathname.startsWith(cat.href) ? "text-black font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-center items-center mt-4">
            <div className="flex flex-col gap-y-3">
              <h1 className="text-5xl font-bold text-gray-700 text-center tracking-wide">
                {categoryName || "Category"}
              </h1>
              <h3 className="text-gray-400 text-lg text-center">
                We provide 100% Real Leather items
              </h3>
              <div className="flex items-center justify-center text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-black">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-black">{categoryName}</span>
              </div>
            </div>
          </div>
          <hr className="my-4" />

          {/* Loading State */}
          {loading && <div>Loading...</div>}

          {/* Error State */}
          {error && <div className="text-red-600 text-lg text-center">{error}</div>}

          {/* No Products Found */}
          {!loading && !error && products.length === 0 && (
            <div className="text-red-600 text-lg flex h-screen justify-center">
              No products found in this category.
            </div>
          )}

          {/* Products Grid */}
          {!loading && !error && products.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product: sanityProduct) => (
                <Card
                  key={product._id}
                  id={product._id}
                  name={product.productName}
                  newPrice={product.price}
                  price={product.oldPrice}
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
      </div>
    </main>
  );
}