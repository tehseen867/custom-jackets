
import { cn } from "@/app/lib/utils"
import type { ColorOption } from "@/app/types/product"
interface ColorPickerProps {
  colors: ColorOption[]
  selectedColor: string
  onChange: (color: string) => void
}

export function ColorPicker({ colors, selectedColor, onChange }: ColorPickerProps) {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color.colorValue}
          className={cn(
            "h-8 w-8 rounded-full border-2",
            selectedColor === color.colorValue ? "border-primary" : "border-transparent"
          )}
          style={{ backgroundColor: color.colorValue }}
          onClick={() => onChange(color.colorValue)}
          title={color.colorName}
        >
          <span className="sr-only">{color.colorName}</span>
        </button>
      ))}
    </div>
  )
}

