"use client";

import { sanityProduct } from "@/app/types/product";
import { urlFor } from "@/sanity/lib/image";
import { menuMen, menuWomen } from "@/app/components/data/menu";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useParams, usePathname } from "next/navigation";
import Card from "@/app/components/card";

// Move categories to a separate file (e.g., data/categories.ts)
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
  { name: "Varsity Jackets", href: "/subcategory/manleatherjackets/varsityjackets" },
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
  { name: "Plus Size Leather Jackets", href: "/subcategory/womanleatherjackets/plussizeleatherjackets" },
];

// Reusable Category Navigation Component
const CategoryNav = ({ title, categories }: { title: string; categories: { name: string; href: string }[] }) => {
  const pathname = usePathname();

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <nav className="space-y-2 px-2">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            aria-current={pathname.startsWith(cat.href) ? "page" : undefined}
            className={`block text-sm hover:text-black hover:underline underline-offset-1 hover:px-1 ${
              pathname.startsWith(cat.href)
                ? "text-black font-semibold"
                : "text-muted-foreground"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default function CategoryPage() {
  const [products, setProducts] = useState<sanityProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string>("");
  const [subCategoryName, setSubCategoryName] = useState<string>("");

  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category || "";
  const subCategory = Array.isArray(params.subCategory) ? params.subCategory[0] : params.subCategory || "";

  const fetchProducts = useCallback(async (category: string, subCategory: string) => {
    const formattedCategory = category.toLowerCase().replace(/%26/g, "&");
    try {
      let query = `*[_type in ["manProduct", "womanProduct"]`;

      if (formattedCategory) {
        query += ` && category match $formattedCategory`;
        setCategoryName(formattedCategory);
      }

      if (subCategory) {
        query += ` && subCategory match $subCategory`;
        setSubCategoryName(subCategory);
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
        subCategory: subCategory ?? "",
      });

      setProducts(res);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
      setLoading(false);
    }

    const matchedData = [...menuMen, ...menuWomen]
      .flatMap((item) =>
        item.categories.map((e) => ({
          originalCat: item.name,
          originalSubCat: e,
          formatted: (item.name + e).toLowerCase().replace(/\s+/g, ""),
        }))
      )
      .find((cat) => {
        const formattedCategory2 = `${category}${subCategory}`.toLowerCase().replace(/\s+/g, "").replace(/%26/g, "&");
        return formattedCategory2 === `man${cat.formatted}` || formattedCategory2 === `woman${cat.formatted}`;
      });

    if (matchedData) {
      setCategoryName(matchedData.originalCat);
      setSubCategoryName(matchedData.originalSubCat);
    } else {
      setCategoryName("");
      setSubCategoryName("");
    }
  }, []);

  useEffect(() => {
    fetchProducts(category, subCategory);
  }, [category, subCategory, fetchProducts]);

  return (
    <main className="container mx-auto mt-12 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 pr-8">
          <CategoryNav title="MEN'S COLLECTION" categories={menCategories} />
          <CategoryNav title="WOMEN'S COLLECTION" categories={womenCategories} />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-center items-center mt-4">
            <div className="flex flex-col gap-y-3">
              <h1 className="text-5xl font-bold text-gray-700 text-center tracking-wide">
                {subCategoryName || "Category"}
              </h1>
              <h3 className="text-gray-400 text-lg text-center">We provide 100% Real Leather items</h3>
              <div className="flex justify-center items-center text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-black">Home</Link>
                <span className="mx-2">/</span>
                <span>{categoryName}</span>
                <span className="mx-2">/</span>
                <span className="text-black">{subCategoryName}</span>
              </div>
            </div>
          </div>
          <hr className="my-4" />

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-red-600 text-lg flex flex-col items-center gap-2">
              <p>{error}</p>
              <button
                onClick={() => fetchProducts(category, subCategory)}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Retry
              </button>
            </div>
          )}

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
                  popular={product.popular}
                  key={product._id}
                  id={product._id}
                  name={product.productName}
                  newPrice={product.price}
                  image={
                    product.productImages?.[0]
                      ? urlFor(product.productImages[0]).url()
                      : "/placeholder-image.png"
                  }
                  isSale={product.sale}
                  price={product.oldPrice}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}