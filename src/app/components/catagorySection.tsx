import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CatagorySection = () => {
  return (
    <div>
      {/* ======================== CATAGORY SECTION ============================== */}
        <div>
           <div  className='grid grid-cols-2 gap-x-2 py-2'>
           <Link href={'/men'}><div className='relative w-full h-full cursor-pointer '><Image src={"/men-shop.jpg"} width={700} height={400} alt="man wearing jacket"/>
            <div className="absolute inset-0 flex w-40 items-center text-white text-5xl tracking-wide leading-tight
            pl-4 font-extrabold">
      Shop Men&apos;s Collection
    </div>
            </div></Link>
            

            <Link href={"/women"}> <div className='relative w-full h-full cursor-pointer '><Image src={"/woman-shop-3.jpg"} width={700} height={400} alt="woman wearing jacket"/>
            <div className="absolute inset-0 flex items-center bg-black bg-opacity-25 text-white text-5xl tracking-wide leading-tight
            pl-4 font-extrabold">
             <div className='w-40'>
      Shop Women&apos;s Collection
      </div>
    </div></div></Link>
          
           </div>

           <div className='grid grid-cols-5 gap-x-2  '>
           <Link href={"/category/mancoats"}><div className='relative w-full h-full cursor-pointer '><Image src={"/man-jacket-1.jpg"} width={250} height={150} alt="man wearing jacket" className='w-full h-full object-fill'/>

           <div className="absolute inset-0 flex text-center items-end bg-black bg-opacity-15 text-white text-3xl tracking-wide
            justify-center font-extrabold pb-2">
      Men&apos;s Coats
    </div>
           </div></Link>

           <Link href={"/subcategory/manbags/leatherbags"}> <div className='relative w-full h-full cursor-pointer '><Image src={"/bag-2.jpg"} width={330} height={200} alt="bag" className='w-full h-full object-fill'/>
           <div className="absolute inset-0 flex text-center items-end bg-black bg-opacity-10 text-white text-3xl tracking-wide
            justify-center font-extrabold pb-2">
      Leather Bags
    </div></div></Link>

           <Link href={"/subcategory/manwindbreaker&puffers/pufferjackets"}><div className='relative w-full h-full cursor-pointer '><Image src={"/puffer-jacket-1.jpg"} width={250} height={150} alt="man wearing jacket" className='w-full h-full object-fill'/>
           <div className="absolute inset-0 flex text-center items-end  text-white text-[29px] tracking-wide
            justify-center font-extrabold pb-[4px]">
      Puffer Jackets
    </div></div></Link>

    <Link href={"/category/manshoes"}><div className=' relative w-full h-full cursor-pointer '><Image src={"/shoes-1.jpg"} width={250} height={150} alt="man wearing jacket" className='w-full h-full object-fill'/>
           <div className="absolute inset-0 flex text-center items-end bg-black bg-opacity-20 text-white text-[29px] tracking-wide
            justify-center font-extrabold pb-[4px]">
     Men&apos;s Shoes
    </div></div> </Link>

    <Link href={"/category/womancoats"}><div className='relative w-full h-full cursor-pointer '><Image src={"/women-jacket-1.jpg"} width={250} height={150} alt="man wearing jacket" className='w-full h-full object-fill'/>
           <div className="absolute inset-0 flex text-center items-end bg-black bg-opacity-20 text-white text-[28px] tracking-wide
            justify-center font-extrabold pb-[4px]">
     Women&apos;s Coats
    </div></div></Link>

           </div>
        </div>

    </div>
  )
}

export default CatagorySection