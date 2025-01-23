"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import Image from "next/image";

const transition = {
  type: "tween", // Tween is better suited for opacity animations
  duration: 0.5, // Set the duration for fade-in/out
  ease: "easeInOut", // Smooth easing
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setActive(item);
        setIsHovered(true); // Start hover effect
      }}
      className="relative flex"
    >
      <motion.p
        transition={{ duration: 0.9 }}
        className="cursor-pointer text-[14px] hover:underline underline-offset-1 text-black uppercase hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && isHovered && (
        <motion.div>
          {active === item && (
            <div className="fixed top-[11%] left-1/2 transform -translate-x-1/2 -translate-y z-50">
              <motion.div
                initial={{ opacity: 0 }} // Initially hidden
                animate={{ opacity: 1 }} // Fully visible
                exit={{ opacity: 0 }} // Hidden again when exiting
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white backdrop-blur-sm rounded-sm"
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-screen h-full shadow-2xl shadow-black"
                >
                  <div className="grid grid-cols-3 gap-6">{children}</div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent bg-white shadow-input flex justify-center items-center space-x-10 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
interface HoveredLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string; // Add className to the props
}

export const HoveredLink = ({ children, className, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      className={`text-neutral-500 text-sm dark:text-neutral-200 hover:text-black hover:underline underline-offset-1 ${className}`}
    >
      {children}
    </Link>
  );
};