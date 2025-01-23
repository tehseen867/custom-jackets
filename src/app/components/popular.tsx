"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Card from "./card";
import { sanityProduct } from "../types/product";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Men");
  const [products, setProducts] = useState<sanityProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch products from both manProduct and womanProduct
        const query = `*[_type == "manProduct" || _type == "womanProduct"]{
          _id,
          stockLimit,
          description,
          price,
          colorOptions,
          sizeOptions,
          subCategory,
          category,
          stock,
          oldPrice,
          productName,
          productImages,
          popular,
          sale,
          _type // Add _type to distinguish between manProduct and womanProduct
        }`;
        const res = await client.fetch(query);

        setProducts(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Filter products based on the selected category and popularity
  const filteredProducts = products.filter((product) => {
    // Check if the product is popular
    if (!product.popular) {
      return false;
    }

    // Filter by category
    if (selectedCategory === "Men") {
      return product._type === "manProduct"; // Filter for men's products
    } else if (selectedCategory === "Women") {
      return product._type === "womanProduct"; // Filter for women's products
    }
    return false;
  });
if (loading){
  return <div>Loading....</div>
}
if(error){
  return <div className="text-red text-sm">filed to fetch product</div>
}
  return (
    <div className="mt-10">
      <div className="flex justify-center flex-col items-center gap-y-10 pt-10">
        {/* Header */}
        <div>
          <h3 className="text-2xl tracking-wider uppercase text-gray-500">Most Popular</h3>
        </div>

        {/* Category Buttons */}
        <div className="mb-4 flex gap-x-4">
          <button
            onClick={() => setSelectedCategory("Men")}
            className={`text-black py-2 px-14 text-sm tracking-wider uppercase rounded-full border border-gray-500 ${
              selectedCategory === "Men" ? "bg-gray-950 text-white" : "hover:border-black hover:bg-gray-200"
            }`}
          >
            Men
          </button>
          <button
            className={`text-black py-2 px-14 text-sm tracking-wider uppercase rounded-full border ${
              selectedCategory === "Women" ? "bg-gray-950 text-white" : "hover:border-black hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory("Women")}
          >
            Women
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-2 py-8 flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[1100px]"
        >
          <CarouselContent>
            {filteredProducts.map((product) => (
              <CarouselItem
                key={product._id}
                className="flex flex-col transition-shadow duration-300 gap-y-2 overflow-hidden w-60 basis-1/4"
              >
                <Card
                  image={urlFor(product.productImages[0]).url()}
                  id={product._id}
                  newPrice={product.price}
                  price={product.oldPrice}
                  name={product.productName}
                  popular={product.popular}
                  isSale={product.sale}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductListPage;