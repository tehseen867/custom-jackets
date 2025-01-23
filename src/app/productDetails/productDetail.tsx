'use client';

import { useState } from 'react';
import { useCart } from '@/app/components/cartContext';
import Link from 'next/link';
import { CheckIcon, Star } from 'lucide-react';
import { ProductGallery } from '@/app/productDetails/productGallery';
import { ColorPicker } from '@/app/productDetails/colorPicker';
import { SizeSelector } from '@/app/productDetails/sizeSelector';
import { Button } from '@/components/ui/button';
import type { detailsProduct } from '@/app/types/product';
import Alert from '@mui/material/Alert';
import { urlFor } from '@/sanity/lib/image';

interface ProductDetailsProps {
  product: detailsProduct;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  // State for selected color and size
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colorOptions.length > 0 ? product.colorOptions[0].colorValue : ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizeOptions.length > 0 ? product.sizeOptions[0].sizeValue : ''
  );

  // State for alert visibility
  const [showAlert, setShowAlert] = useState(false);

  // Use the `useCart` hook to add items to the cart
  const { addToCart } = useCart();

  // Add to cart function
  const handleAddToCart = () => {
    const newItem = {
      id: product._id, // Ensure this matches the ID format expected in the cart
      name: product.productName,
      price: product.price,
      image: urlFor(product.productImages[0]).url(),// Use the first image as the thumbnail
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };

    // Add the item to the cart
    addToCart(newItem);

    // Show the alert
    setShowAlert(true);

    // Auto-hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Alert Component */}
      {showAlert && (
        <div className="fixed bottom-4 right-4 z-50">
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            onClose={() => setShowAlert(false)}
          >
            {`product added to cart!`}
          </Alert>
        </div>
      )}

      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>Leather Jackets</li>
          <li>/</li>
          <li className="text-foreground">{product.productName}</li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2">
        <ProductGallery images={product.productImages} />

        <div className="space-y-4 px-10">
          <div>
            <h1 className="text-3xl font-bold">{product.productName}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-3xl font-bold">{'$' + product.price + ' ' + 'USD'}</p>
            <div className="text-muted-foreground">
              <p>{product.description}</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              (Free shipping and 30 days to return)
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="font-medium">Color:</label>
              <span className="text-muted-foreground">
                {product.colorOptions.find((c) => c.colorValue === selectedColor)
                  ?.colorName}
              </span>
            </div>
            <ColorPicker
              colors={product.colorOptions}
              selectedColor={selectedColor}
              onChange={setSelectedColor}
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="font-medium">Size:</label>
              <Link href="/sizeGuaide" className="text-sm underline">
                Size Guide
              </Link>
            </div>
            <p className="mb-2 text-sm text-muted-foreground">
              (Size up for layering or if you&apos;re between sizes)
            </p>
            <SizeSelector
              sizes={product.sizeOptions}
              selectedSize={selectedSize}
              onChange={setSelectedSize}
            />
          </div>

          <Button className="w-full" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}