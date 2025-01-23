'use client'

import Image from 'next/image'
import { StarRating } from '@/app/ui-components/starRating'
import type { Review } from '@/app/types/review'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ReviewsSliderProps {
  reviews: Review[]
}

export function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  return (
    <div className="bg-background p-32 ">
     
      <Carousel>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <div className="grid gap-x-20 md:grid-cols-2 items-center ">
             
                <div className="space-y-6 ">
                
        <h2 className=" text-3xl font-bold text-gray-600">PEOPLE ARE TALKING</h2>
    
                  <StarRating rating={review.rating} />
                  <div className="relative min-h-[200px]">
                    <p className="text-[27px] tracking-wide text-gray-600">{review.text}</p>
                    <div className="mt-6">
                      <p className="font-semibold">- {review.author},</p>
                      <p className="text-gray-600">{review.productName}</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[4/4] overflow-hidden">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={`${review.author} wearing ${review.productName}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}