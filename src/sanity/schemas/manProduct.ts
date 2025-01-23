import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'manProduct',
  title: "Man's Product",
  type: 'document',
  fields: [
    // Existing fields...
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
      of: [defineArrayMember({ type: 'image' })],
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Leather Jackets', value: 'manleatherJackets' },
          { title: 'Wind Breaker & Puffers', value: 'manwindbreaker&puffers' },
          { title: 'Coats', value: 'mancoats' },
          { title: 'Shoes', value: 'manshoes' },
          { title: 'Bags', value: 'manbags' },
          { title: 'Leather Accessory', value: 'manleatheraccessories' },
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
          { title: 'Bomber Jackets', value: 'bomberJackets' },
          { title: 'Biker Jackets', value: 'bikerJackets' },
          { title: 'Suede Jackets', value: 'suedeJackets' },
          { title: 'Varsity Jackets', value: 'varsityJackets' },
          { title: 'Fur & Shearling', value: 'furShearling' },
          { title: 'Leather Blazers', value: 'leatherBlazers' },
          { title: 'Aviator Jackets', value: 'aviatorJackets' },
          { title: 'Winter Jackets', value: 'winterJackets' },
          { title: 'Hooded Leather Jackets', value: 'hoodedLeatherJackets' },
          { title: 'Leather Vests', value: 'leatherVests' },
          { title: 'Best Seller', value: 'bestSeller' },
          { title: 'Puffer Jackets', value: 'pufferJackets' },
          { title: 'Lightweight Jackets', value: 'lightweightJackets' },
          { title: 'Soft Shell Jackets', value: 'softShellJackets' },
          { title: 'Puffer Vests', value: 'pufferVests' },
          { title: 'Down Jackets', value: 'downJackets' },
          { title: 'Winter Coats', value: 'winterCoats' },
          { title: 'Wool Coats and Jackets', value: 'woolCoatsJackets' },
          { title: 'Fur & Shearling Coats', value: 'furShearlingCoats' },
          { title: 'Leather Coats', value: 'leatherCoats' },
          { title: 'Leather Dusters', value: 'leatherDusters' },
          { title: 'Leather Shoes', value: 'leatherShoes' },
          { title: 'Dress Shoes', value: 'dressShoes' },
          { title: 'Casual Shoes', value: 'casualShoes' },
          { title: 'Leather Boots', value: 'leatherBoots' },
          { title: 'Leather Sneakers', value: 'leatherSneakers' },
          { title: 'Leather Loafers', value: 'leatherLoafers' },
          { title: 'Leather Bags', value: 'leatherBags' },
          { title: 'Vintage Leather Bags', value: 'vintageLeatherBags' },
          { title: 'Business Bags', value: 'businessBags' },
          { title: 'Travel Bags', value: 'travelBags' },
          { title: 'Leather Wallets', value: 'leatherWallets' },
          { title: 'Leather Gifts', value: 'leatherGifts' },
          { title: 'Leather Belts', value: 'leatherBelts' },
        ],
        
      },
      hidden: ({ parent }) => !parent?.category,
      validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required().min(1).max(50),
            },
            {
              name: 'colorValue',
              title: 'Color Value (Hex/RGB)',
              type: 'string',
              validation: (Rule) =>
                Rule.required()
                  .regex(/^#[0-9A-Fa-f]{6}$/, 'Hex color required')
                  .error('Invalid color format. Use Hex (e.g., #FFFFFF)'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
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
              validation: (Rule) => Rule.required().min(1).max(50),
            },
            {
              name: 'sizeValue',
              title: 'Size Value',
              type: 'string',
              validation: (Rule) =>
                Rule.required()
                  .regex(/^[A-Za-z0-9]+$/, 'Alphanumeric required')
                  .error('Invalid size format'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
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
      hidden: ({ parent }) => parent?.stock !== 'limited',
      validation: (Rule) => Rule.positive().min(0),
    }),

    // New popular field
    defineField({
      name: 'popular',
      title: 'Is Popular?',
      type: 'boolean',
      description: 'Mark if this product is popular',
      initialValue: false,
    }),
  ],
});
