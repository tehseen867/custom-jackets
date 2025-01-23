import Link from "next/link";
import React from "react";
import Image from "next/image";

type ProductType = {
  image: string;
  id: string;
  name: string;
  price?: number|undefined;
  newPrice?: number;
  isSale?: boolean;
  popular?:boolean;
};

const Card: React.FC<ProductType> = ({ image, id, name, price, newPrice, isSale,popular }) => {
  return (
    <div className="w-[240px] mx-auto">
      <Link href={`/productDetails/${id}`} aria-label={`View details for ${name}`} className="group">
        <div className="relative">
          {/* Sale Tag */}
          {isSale && (
            <div className="absolute top-0 left-0 bg-red-500 text-white tracking-widest text-sm uppercase font-bold py-1 px-2">
              Sale
            </div>
          )}
          {popular && (
            <div className="absolute top-0 right-0 bg-black text-white tracking-widest text-sm uppercase font-bold py-1 px-2">
              hot
            </div>
          )}
          <Image
            width={1000}
            height={1000}
            src={image}
            alt={name}
            className="w-full h-[350px] object-cover"
          />
        </div>
        <div className="space-y-1 mt-2">
          <h2 className="text-[16px] tracking-wider overflow-hidden capitalize text-gray-500 group-hover:underline">
            {name}
          </h2>
          {isSale ? (
            <span className="text-xl font-bold text-gray-700 group-hover:underline flex justify-between">
              <del className="text-red-600">${price}</del>
              <p>${newPrice} USD</p>
            </span>
          ) : (
            <p className="text-xl font-bold text-gray-700 group-hover:underline">
              $ {newPrice} USD
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
