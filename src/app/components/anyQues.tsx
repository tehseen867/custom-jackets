import Link from 'next/link'
import React from 'react'

function AnyQues() {
  return (
    <div className='bg-gray-100 py-10'>
        <div className="max-w-7xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Have any questions?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
        We&apos;re here to help! Whether you need answers to common questions or want to reach out to us directly, we&apos;ve got you covered.
        </p>
        <Link
          href={"/contactUs"} // Replace with your shop link
          className="inline-block bg-gray-900 text-white px-8 py-3  text-lg font-semibold hover:bg-gray-700 transition-colors"
        >
          Contact us
        </Link>
      </div>
   
    </div>
  )
}

export default AnyQues