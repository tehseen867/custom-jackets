import { Card, CardContent } from "@/app/ui-components/card"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
    _id:string
  name: string
  price: number
  imageUrl: string

}

export function ProductCard({ name, price, imageUrl, _id }: ProductCardProps) {
  return (
    <Link href={`/products/${_id}`}>
      <Card className="group overflow-hidden">
        <div className="relative">
          
          <div className="aspect-square overflow-hidden bg-gray-100">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              width={400}
              height={400}
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg mb-2 line-clamp-2">{name}</h3>
          <p className="text-xl font-bold">£{price.toFixed(2)} GBP</p>
        </CardContent>
      </Card>
    </Link>
  )
}
