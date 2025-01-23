import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ReviewSection = () => {
  return (
    <div className='py-20 flex justify-center items-center'>
        <div className='flex flex-col gap-y-10'>
           
                <div className='flex flex-col items-center justify-center'>
                    <Image src={"/5-Star-Rating.png"} alt="five star" height={200} width={150}/>
                  <span className=' tracking-wider text-gray-700 font-sans uppercase'>3400+ reviews & 4.9 rating</span>
              
            </div>

            <div className='flex justify-center items-center'>
                <Link href={"/ourStory"}><h3 className='text-[30px] text-[#48505a] hover:text-black text-center w-[500px]'>
                Top-quality leather jackets and goods, made from the best materials at affordable prices.</h3></Link>
            </div>
            <div className='flex justify-center items-center'>
                <Link href={"/ourStory"}><button className='bg-gray-900 hover:bg-black text-white px-6 py-3 uppercase text-[14px] font-bold'>how we did it?</button></Link>
            </div>
        </div>

    </div>
  )
}

export default ReviewSection