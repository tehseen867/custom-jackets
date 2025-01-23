"use client";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ScrollingText = () => {
  const sentences = [
    '"Loved for its unbeatable comfort and durability."',
    '"Praised for its stylish designs and perfect fit."',
    '"Customers rave about the warmth and premium quality."',
    '"Renowned for its attention to detail and craftsmanship."',
    '"Highly rated for its luxurious feel and lasting performance."',
    '"Trusted for jackets that deliver style and substance."',
    '"Celebrated for blending fashion and functionality seamlessly."',
  ];

  const images = [
    "/gearmoose.png", // Image for the second sentence
    "/askmen.png", // Image for the first sentence
    "/mashable.png",
    "/buzzfeed.png", // Image for the fifth sentence
    "/Esquire.svg", // Image for the sixth sentence
    "/Mens-Health.png",
    "/coveteur.png",
  ];

  const [index, setIndex] = useState(0);

  // Function to handle swipe actions
  const handleSwipe = (dir: string) => {
    if (dir === "Left") {
      setIndex((prevIndex) => (prevIndex - 1 + sentences.length) % sentences.length); // Swipe left (previous item)
    } else if (dir === "Right") {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length); // Swipe right (next item)
    }
  };

  // Swipeable hook to detect swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("Left"),
    onSwipedRight: () => handleSwipe("Right"),
    trackMouse: true, // Optional: Allows mouse swipes for testing
  });

  // Auto-change the content every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [sentences.length]);

  // Determine the color of the dot based on the current index
  const getDotColor = (dotIndex: number) => {
    return index === dotIndex ? "text-gray-700" : "text-gray-400";
  };

  return (
    <div className="py-16">
      <div className="flex flex-col gap-y-16">
        {/* Featured In Section */}
        <div className="flex justify-center items-center ">
          <h3 className="uppercase text-2xl text-gray-500">As featured in</h3>
        </div>

        {/* Text */}
        <div className="text-center mb-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-sans text-[#32373d] cursor-default select-none"
            >
              {sentences[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Swipeable Images */}
        <div
          className="overflow-x-auto w-full flex justify-center h-24 overflow-hidden items-center"
          {...swipeHandlers} // Spread the swipe handlers to the container
        >
          <div className="flex items-center space-x-10 scroll-smooth">
            {/* Previous Logo (Blurred) */}
            <motion.div
              key={index - 1}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.5, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 relative opacity-50"
            >
              <Image
                src={images[(index - 1 + images.length) % images.length]} // Previous image
                alt="Previous"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Current Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-64 h-64 relative"
              >
                <Image
                  src={images[index % images.length]} // Current image
                  alt="Featured in"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Next Logo (Blurred) */}
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.5, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 relative opacity-50"
            >
              <Image
                src={images[(index + 1) % images.length]} // Next image
                alt="Next"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Dots for Navigation */}
        
      </div>
      <div className="flex items-center justify-center gap-x-6">
          {sentences.map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={`text-7xl cursor-pointer rounded-full font-sans ${getDotColor(dotIndex)} hover:text-gray-700`}
              onClick={() => setIndex(dotIndex)} // Allow direct navigation to item when clicked
            >
              .
            </span>
          ))}
        </div>
    </div>
  );
};

export default ScrollingText;