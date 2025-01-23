"use client";
import { Earth } from "lucide-react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { GiSewingMachine } from "react-icons/gi";

const Status = () => {
  const [customersServed, setCustomersServed] = useState(0);
  const [customerRequests, setCustomerRequests] = useState(0);
  const [countriesCovered, setCountriesCovered] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    const startCounting = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
      let count = 0;
      const increment = target / 200; // Increment per frame
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(count));
        }
      }, 20);
    };

    startCounting(4000, setCustomersServed);
    startCounting(5000, setCustomerRequests);
    startCounting(135, setCountriesCovered);
    startCounting(5850, setReviews);
  }, []);

  return (
    <div className=" p-6 bg-gray-100">
      <h1 className="text-2xl uppercase text-gray-500 my-8 text-center">Our Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Customer Served */}
        <div className=" flex flex-col justify-center items-center text-center">
        <FaUserTie className="h-20 w-20 mb-2 mt-4" />
          <h2 className="text-4xl  text-gray-900">{customersServed}+ </h2>
          <p className="text-xl text-gray-700">Customers Served</p>
        </div>
        {/* Customer Requests Received */}
        <div className=" flex flex-col justify-center items-center text-center">
        <GiSewingMachine  className="h-24 w-24 mb-2"  />
          <h2 className="text-4xl text-gray-900">{customerRequests}+ </h2>
          <p className="text-xl text-gray-700">Customer Requests Received</p>
        </div>
        {/* Countries Covered */}
        <div className=" flex flex-col justify-center items-center text-center">
        <Earth  className="h-24 w-24 mb-2"  />
          <h2 className="text-4xl  text-gray-900">{countriesCovered}+ </h2>
          <p className="text-xl text-gray-700">Countries Covered</p>
        </div>
        {/* Reviews */}
        <div className=" flex flex-col justify-center items-center text-center">
            <div className="flex flex-col my-2">
                <div className="flex">
        <FaStar className="size-10" />
        <FaStar className="size-10" />
        <FaStar className="size-10" />
        </div>
        <div className="flex justify-center items-center">
        <FaStar className="size-10" />
        <FaStar className="size-10" />
        </div>
        </div>
          <h2 className="text-4xl  text-gray-900">{reviews}+ </h2>
          <p className="text-xl text-gray-700">Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
