import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="bg-cover bg-center w-full h-[900px] relative"
        style={{ backgroundImage: "url('/heroImage.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-35" />

        {/* Content */}
        <div className="flex h-[700px] items-end pt-8 justify-start pl-10 relative z-10">
          <div className="grid grid-cols-1 gap-y-10">
            <h3 className="text-[5.5rem] leading-none text-white">
              Premium <br /> Quality <br /> Affordable  Pricing
            </h3>
            <div className="flex gap-x-4">
              <Link href={"/men"}><button className="uppercase text-xl px-6 py-2 bg-transparent border border-white hover:bg-white hover:text-black transition duration-300 text-white">
                Men
              </button></Link>
              <Link href={"/women"}><button className="uppercase text-xl px-6 py-2 bg-transparent border border-white hover:bg-white hover:text-black transition duration-300 text-white">
                Women
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
