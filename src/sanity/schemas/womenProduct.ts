import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'womanProduct',
  title: "Woman's Product",
  type: 'document',
  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productImages',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.min(1).max(5).required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Leather Jacket', value: 'womanleatherJacket' },
          { title: 'Coats', value: 'womancoats' },
          { title: 'Shoes', value: 'womanshoes' },
          { title: 'Bags', value: 'womanbags' },
          { title: 'Leather Accessory', value: 'womanleatherAccessories' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subCategory',
      title: 'Sub Category',
      type: 'string',
      options: {
        list: [
          { title: 'Varsity Jackets', value: 'varsityJackets' },
          { title: 'Bomber Jackets', value: 'bomberJackets' },
          { title: 'Biker Jackets', value: 'bikerJackets' },
          { title: 'Aviator Jackets', value: 'aviatorJackets' },
          { title: 'Suede Jackets', value: 'suedeJackets' },
          { title: 'Leather Blazers', value: 'leatherBlazers' },
          { title: 'Leather Vests', value: 'leatherVests' },
          { title: 'Plus Size Leather Jackets', value: 'plusSizeLeatherJackets' },
          { title: 'Leather Coats', value: 'leatherCoats' },
          { title: 'Leather Trench Coat', value: 'leatherTrenchCoat' },
          { title: 'Trench & Winter Coats', value: 'trenchWinterCoats' },
          { title: 'Shearling Jackets & Coats', value: 'shearlingJacketsCoats' },
          { title: 'Leather Bags', value: 'leatherBags' },
          { title: 'Vintage Leather Bags', value: 'vintageLeatherBags' },
          { title: 'Business Bags', value: 'businessBags' },
          { title: 'Travel Bags', value: 'travelBags' },
          { title: 'Leather Shoes', value: 'leatherShoes' },
          { title: 'Dress Shoes', value: 'dressShoes' },
          { title: 'Casual Shoes', value: 'casualShoes' },
          { title: 'Leather Boots', value: 'leatherBoots' },
          { title: 'Leather Sneakers', value: 'leatherSneakers' },
          { title: 'Leather Loafers', value: 'leatherLoafers' },
          { title: 'Leather Wallets', value: 'leatherWallets' },
          { title: 'Leather Gifts', value: 'leatherGifts' },
          { title: 'Leather Belts', value: 'leatherBelts' },
        ],
      },
      hidden: ({ parent }) => !parent?.category, // Only show if category is selected
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const { parent } = context as { parent: { category?: string } };
          if (parent?.category && !value) {
            return 'Sub Category is required when a category is selected.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'sale',
      title: 'In Sale?',
      type: 'boolean',
      description: 'Mark if this product is in Sale',
      initialValue: false,
    }),
    defineField({
      name: 'oldPrice',
      title: 'Old Price',
      type: 'number',
      hidden: ({ parent }) => parent?.sale !== true,
      validation: (Rule) => Rule.required().positive().min(0),
    }),
    
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
   // Color Options Schema
defineField({
  name: 'colorOptions',
  title: 'Color Options',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'colorName',
          title: 'Color Name',
          type: 'string',
          validation: (Rule) => Rule.required().min(1).max(50),  // Ensures that colorName is required and has a reasonable length
        },
        {
          name: 'colorValue',
          title: 'Color Value (Hex/RGB)',
          type: 'string',
          validation: (Rule) => 
            Rule.required()
              .min(1)
              .regex(/^#[0-9A-Fa-f]{6}$/)  // Ensures colorValue follows Hex format (e.g., #FFFFFF for white)
              .error('Color value must be a valid Hex code (e.g., #FFFFFF) or RGB format'),
        },
      ],
      preview: {
        select: {
          title: 'colorName',
          subtitle: 'colorValue',
        },
      },
    },
  ],
  validation: (Rule) => Rule.required().min(1),  // Ensures at least one color option is provided in the array
}),

// Size Options Schema
defineField({
  name: 'sizeOptions',
  title: 'Size Options',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'sizeName',
          title: 'Size Name',
          type: 'string',
          validation: (Rule) => Rule.required().min(1).max(50),  // Ensures sizeName is required and has a reasonable length
        },
        {
          name: 'sizeValue',
          title: 'Size Value',
          type: 'string',
          validation: (Rule) => 
            Rule.required()
              .min(1)
              .max(10)
              .regex(/^[A-Za-z0-9]+$/, { name: 'alphanumeric' })  // Ensures sizeValue is alphanumeric (e.g., "S", "M", "L")
              .error('Size value should be alphanumeric (e.g., "S", "M", "L")'),
        },
      ],
      preview: {
        select: {
          title: 'sizeName',
          subtitle: 'sizeValue',
        },
      },
    },
  ],
  validation: (Rule) => Rule.required().min(1),  // Ensures at least one size option is provided in the array
}),

    defineField({
      name: 'stock',
      title: 'Stock Availability',
      type: 'string',
      options: {
        list: [
          { title: 'Limited', value: 'limited' },
          { title: 'Unlimited', value: 'unlimited' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stockLimit',
      title: 'Stock Limit (if limited)',
      type: 'number',
      hidden: ({ parent }) => parent?.stock !== 'limited', // Only show if stock is limited
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const { parent } = context as { parent: { stock?: string } };
          if (parent?.stock === 'limited' && !value) {
            return 'Stock Limit is required when stock is limited.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'popular',
      title: 'Is Popular?',
      type: 'boolean',
      description: 'Mark if this product is popular',
      initialValue: false,
    }),
  ],
});