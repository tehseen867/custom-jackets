'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/app/lib/utils'
import { urlFor } from '@/sanity/lib/image' // Import urlFor

interface Asset {
  _id: string;
  url: string;
}

interface ProductGalleryProps {
  images: Asset[]; // Array of Asset objects
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Fallback if no images are available
  if (!images || images.length === 0) {
    return (
      <div className="flex justify-center items-center h-[512px]">
        <span>No images available</span>
      </div>
    )
  }

  return (
    <div className="flex gap-4">
      {/* Thumbnail images */}
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={index} // Using _id as the key for uniqueness
            className={cn(
              'relative h-24 w-24 overflow-hidden rounded border',
              selectedImage === index && 'ring-2 ring-primary'
            )}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={urlFor(image).url() || '/placeholder.svg'} // Use urlFor to generate image URL
              alt={`Product image ${index + 1}`}
              className="object-cover"
              layout="fill"
            />
          </button>
        ))}
      </div>

      {/* Main selected image */}
      <div className="relative flex-1">
        <div className="relative h-[512px] overflow-hidden rounded-lg">
          <Image
            src={urlFor(images[selectedImage]).url() || '/placeholder.svg'} // Use urlFor to generate image URL
            alt="Main product image"
            className="object-cover"
            layout="fill"
          />
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
