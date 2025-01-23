import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  className?: string
}

export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={`flex ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-6 w-6 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

