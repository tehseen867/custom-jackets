
  // Define a shared type for manProduct and womanProduct
export interface sanityProduct {
  _id: string; // Sanity document ID
  productName: string; // Product name
  productImages: Array<{ asset: { _ref: string } }>; // Array of images with asset references
  category: string; // Category of the product
  subCategory?: string; // Optional subcategory
  description: string; // Description of the product
  colorOptions: string[]; // Available color options
  sizeOptions: string[]; // Available size options
  price: number; // Price of the product
  stock: {
    isLimited: boolean; // Stock limitation status
    quantity?: number; // Optional quantity if limited
  };
  stockLimit?: boolean;
  popular?:boolean,
  _type:string,
  sale?:boolean // Optional: stock limitation flag
  oldPrice?: number|undefined
}

// Type for the asset, representing an image object
interface Asset {
  _id: string;
  url: string;
}

// Type for the color option
export interface ColorOption {
  colorName: string;
  colorValue: string;
}

// Type for the size option
export interface SizeOption {
  sizeName: string;
  sizeValue: string;
}

// Type for the product data response
export interface detailsProduct {
  _id: string;
  productName: string;
  price: number;
  description: string;
  productImages: Asset[];  // Array of image assets
  colorOptions: ColorOption[];  // Array of color options
  sizeOptions: SizeOption[];  // Array of size options
  category: string;
  subCategory?: string;  // Optional subCategory
}
