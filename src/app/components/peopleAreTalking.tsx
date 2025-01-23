import { ReviewsSlider } from '@/app/ui-components/reviewSlider'

const reviews = [
  {
    id: '1',
    rating: 5,
    text: "Love this jacket. Got it made to measure and it fits perfectly. Quality construction and even though the jacket is made to order, the website photo is pretty accurate to how it really looks. Recommended.",
    author: "Jeff Greer",
    productName: "Aaron Brown Leather Bomber Jacket",
    image: "/man-jacket-1.jpg"
  },
  {
    id: '2',
    rating: 5,
    text: "Exceptional quality and craftsmanship. The attention to detail is remarkable, and the fit is exactly what I wanted. Couldn't be happier with my purchase.",
    author: "Sarah Chen",
    productName: "Classic Black Leather Jacket",
  image: "/winter.jpg"
  },
  {
    id: '3',
    rating: 5,
    text: "The customization options are fantastic. The team was very helpful throughout the process, and the final product exceeded my expectations. Worth every penny.",
    author: "Michael Rodriguez",
    productName: "Custom Navy Leather Jacket",
   image: "/puffer-jacket-1.jpg"
  }
]

export default function Peoples_taliking() {
  return <ReviewsSlider reviews={reviews} />
}

