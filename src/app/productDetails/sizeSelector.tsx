
import { cn } from "@/app/lib/utils"
import type { SizeOption } from "@/app/types/product"

interface SizeSelectorProps {
  sizes: SizeOption[]
  selectedSize: string
  onChange: (size: string) => void
}

export function SizeSelector({ sizes, selectedSize, onChange }: SizeSelectorProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {sizes.map((size) => (
        <button
          key={size.sizeValue}
          className={cn(
            "rounded border px-4 py-2 text-sm",
            selectedSize === size.sizeValue
              ? "border-primary bg-primary text-primary-foreground"
              : "border-input hover:bg-accent"
          )}
          onClick={() => onChange(size.sizeValue)}
        >
          {size.sizeName}
        </button>
      ))}
    </div>
  )
}

