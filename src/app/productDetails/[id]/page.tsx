"use client";
import { ProductDetails } from "@/app/productDetails/productDetail";
import type { detailsProduct,} from "@/app/types/product";
import { client } from "@/sanity/lib/client"; // Sanity client to fetch data
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const params = useParams(); // Get product ID from URL params
  const [product, setProduct] = useState<detailsProduct | null>(null); // State to store product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    // Fetch product data from Sanity using _id
    async function getProduct(id: string) {
      try {
        // Query Sanity for product based on _id
        const query = `*[_type in ["manProduct", "womanProduct","sale"] && _id == $id]{
          _id,
          productName,
          price,
          description,
          productImages[] {
            asset->{
              _id,
              url
            }
          },
          colorOptions[]{colorName,colorValue},
          sizeOptions[]{sizeName,sizeValue},
            category,
            subCategory
        }`;

        // Fetch data from Sanity
        const res = await client.fetch(query, { id });

        if (res && res.length > 0) {
          setProduct(res[0]); // Set the fetched product in state
        } else {
          setError("Product not found"); // Handle case where product is not found
        }
      } catch (error) {
        setError("Error fetching product"); // Set error message
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    }

    if (params.id) {
      const productId = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure it's a string
      getProduct(productId); // Fetch product data when component mounts or when params.id changes
    }
  }, [params.id]); // Re-fetch product when the id changes

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  // Handle product not found state
  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />; // Return ProductDetails component with product data
}
