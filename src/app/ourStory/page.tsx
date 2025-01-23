// app/brand-story/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaHands, FaRuler, FaHeart } from "react-icons/fa";

export default function BrandStory() {
  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Our Brand Story
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Crafting Timeless Leather Goods with Passion and Precision
        </p>
      </div>

      {/* Brand Story Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/cutting-leather.jpg" // Replace with your image path
            alt="Leather Crafting"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Journey Begins
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our brand was born out of a deep love for craftsmanship and a desire
            to create leather goods that stand the test of time. Every piece we
            create tells a story of dedication, tradition, and innovation. From
            the finest leather hides to the meticulous hand-stitching, we pour
            our heart and soul into every detail.
          </p>
        </div>
      </div>

      {/* Making Process Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          The Making Process
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Discover the artistry behind our leather goods. Each step in our
          process is carefully designed to ensure the highest quality and
          durability.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Material Selection */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaLeaf className="text-4xl text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Material Selection
            </h3>
            <p className="text-gray-600">
              We source only the finest, ethically produced leather hides,
              ensuring durability and a luxurious feel.
            </p>
          </div>

          {/* Step 2: Handcrafting */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaHands className="text-4xl text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Handcrafting
            </h3>
            <p className="text-gray-600">
              Skilled artisans meticulously cut, stitch, and assemble each piece
              by hand, ensuring precision and attention to detail.
            </p>
          </div>

          {/* Step 3: Quality Control */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaRuler className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quality Control
            </h3>
            <p className="text-gray-600">
              Every product undergoes rigorous quality checks to ensure it meets
              our high standards of craftsmanship.
            </p>
          </div>

          {/* Step 4: Packaging */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaHeart className="text-4xl text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Packaging</h3>
            <p className="text-gray-600">
              Each item is carefully packaged with eco-friendly materials,
              ready to be delivered to your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Join Our Journey
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Explore our collection of leather jackets, shoes, bags, belts, and
          accessories. Experience the perfect blend of tradition and modernity.
        </p>
        <Link
          href="/" // Replace with your shop link
          className="inline-block bg-gray-900 text-white px-8 py-3  text-lg font-semibold hover:bg-gray-700 transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}