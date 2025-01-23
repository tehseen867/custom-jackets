"use client";
import { CircleUser, Search, ShoppingCart } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu, MenuItem, HoveredLink } from "@/app/ui-components/navbar-menu";
import Link from "next/link";
import { supabase } from '../../../supabaseClient';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js'; // Import User type
import { motion } from "framer-motion";
import { menuMen, menuWomen, menuCustomize } from "@/app/components/data/menu";
import { useCart } from "@/app/components/cartContext"; // Adjust the import path as needed

const Navbar = () => {
  const { cart, totalItems, totalPrice, removeItem } = useCart(); // Use cart context
  const transition = {
    type: "tween", // Tween is better suited for opacity animations
    duration: 0.5, // Set the duration for fade-in/out
    ease: "easeInOut", // Smooth easing
  };

  // ================= Checking if user is logged in or not =======================
  const [user, setUser] = useState<User | null>(null); // Define user state type
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart pop-up visibility
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); // State for user dropdown visibility
  const router = useRouter();
  // Click outside handler for cart pop-up and user dropdown
  const cartPopupRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartPopupRef.current && !cartPopupRef.current.contains(event.target as Node)) {
        setIsCartOpen(false); // Close the cart pop-up
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false); // Close the user dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession(); // Get the current session
      setUser(session?.user ?? null); // Set user if session exists
    };

    checkUserSession();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription?.unsubscribe(); // Clean up the subscription
    };
  }, []);

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      router.push('/'); // Redirect to home page after logout
    }
  };

  // ===================== NAVBAR =============================
  const [active, setActive] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //hadle search submission
    if (searchQuery.trim()) {
      // Redirect to the search results page with the query as a parameter
      router.push(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  // Toggle cart pop-up visibility
  const toggleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
    setIsUserDropdownOpen(false); // Close user dropdown when cart is opened
  };

  // Toggle user dropdown visibility or redirect to account page
  const toggleUserDropdown = () => {
    if (user) {
      setIsUserDropdownOpen(!isUserDropdownOpen);
      setIsCartOpen(false); // Close cart pop-up when user dropdown is opened
    } else {
      router.push('/account'); // Redirect to account page if user is not logged in
    }
  };

  return (
    <header className="fixed w-screen top-0 z-50 bg-white shadow-sm flex items-center justify-between gap-x-2 px-6 py-1">
 
      {/* =================== BRAND LOGO ============================== */}
      <div className="flex items-center">
        <Link href={"/"}>
          <Image src="/logo.avif" height={200} width={100} alt="logo" />
        </Link>
      </div>
      
      {/* ============================= NAVBAR ITEMS ======================== */}
      <Menu setActive={setActive}>
        {/* Menu Items */}
        <MenuItem setActive={setActive} active={active} item="Men">
          <div className="grid grid-cols-6 w-screen px-20 py-8">
            {menuMen.map((manItem, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <div>
                  <HoveredLink href={`/category/man${manItem.name.toLowerCase().replace(/\s+/g, "")}`}>
                    <strong className="text-black">{manItem.name}</strong>
                  </HoveredLink>
                </div>
                {manItem.categories.map((category, index) => (
                  <div key={index}>
                    <HoveredLink href={`/subcategory/man${manItem.name.toLowerCase().replace(/\s+/g, "")}/${category.toLowerCase().replace(/\s+/g, "")}`} className="text-sm">
                      {category}
                    </HoveredLink>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Women">
          <div className="grid grid-cols-5 w-screen px-20 py-8">
            {menuWomen.map((womanItem, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <div>
                  <HoveredLink href={`/category/woman${womanItem.name.toLowerCase().replace(/\s+/g, "")}`}>
                    <strong className="text-black">{womanItem.name}</strong>
                  </HoveredLink>
                </div>
                {womanItem.categories.map((category, index) => (
                  <div key={index}>
                    <HoveredLink href={`/subcategory/woman${womanItem.name.toLowerCase().replace(/\s+/g, "")}/${category.toLowerCase().replace(/\s+/g, "")}`} className="text-sm">
                      {category}
                    </HoveredLink>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Customize">
          <div className="grid grid-cols-5 w-screen px-20 py-8">
            {menuCustomize.map((customItem, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <div>
                  <HoveredLink href={`/customize/${customItem.name}`}>
                    <strong className="text-black">{customItem.name}</strong>
                  </HoveredLink>
                </div>
                {customItem.categories.map((category, index) => (
                  <div key={index}>
                    <HoveredLink href={`/customize/${category}`} className="text-sm">
                      {category}
                    </HoveredLink>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </MenuItem>

        <div>
          <Link href={"/everything"} className="cursor-pointer text-[14px] hover:underline underline-offset-1 text-black uppercase hover:opacity-[0.9]">
            Everything
          </Link>
        </div>
        <div>
          <Link href={"/ourStory"} className="cursor-pointer text-[14px] hover:underline underline-offset-1 text-black uppercase hover:opacity-[0.9]">
           Brand
          </Link>
        </div>

        <div>
          <Link href={"/sale"} className="cursor-pointer text-[14px] hover:bg-black hover:text-white text-black uppercase hover:opacity-[0.9] -m-2 p-4">
            Sale
          </Link>
        </div>
      </Menu>
    
      <div className="flex justify-center gap-x-8 items-center w-full">
        {/* =========================== SEARCH BAR ================================ */}
        <div className="relative w-full max-w-md">
        <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search..."
              className="w-full px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute inset-y-0 right-3 flex items-center text-neutral-500 hover:text-black dark:text-neutral-300"
            >
              <Search />
            </button>
          </form>
        </div>

        {/* ============================= CART ===================================== */}
        <div className="relative" ref={cartPopupRef}>
          <button onClick={toggleCartPopup} className="relative">
            <ShoppingCart className="size-7" />
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </div>
            )}
          </button>

          {/* Cart Pop-Up */}
          {isCartOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={transition}
              className="absolute top-10 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-50"
            >
              <h3 className="font-bold text-lg mb-4">Your Cart</h3>
              <div className="text-sm text-gray-600">
                {totalItems === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <div>
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between border-b py-2">
                        <div className="flex items-center">
                          <Image src={item.image} alt={item.name} width={100} height={100} className="w-10 h-10 object-cover mr-2" />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-xs text-gray-500">
                              {item.quantity} x ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <p className="mt-2 font-bold">Total: ${totalPrice.toFixed(2)}</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => router.push("/cart")}
                className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                View Cart
              </button>
            </motion.div>
          )}
        </div>

        {/* =============================== USER ================================== */}
        <div className="relative" ref={userDropdownRef}>
          <button onClick={toggleUserDropdown} className="relative">
            {user ? (
              <div className="flex justify-center items-center h-[36px] w-[36px] bg-red-800 rounded-full">
                <div className="text-xl cursor-pointer font-bold text-white uppercase">
                  {user.email?.charAt(0) || "U"}
                </div>
              </div>
            ) : (
              <CircleUser className="h-[36px] w-[36px]" />
            )}
          </button>

          {/* User Dropdown */}
          {isUserDropdownOpen && user && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={transition}
              className="absolute top-10 right-0 bg-white shadow-md rounded-sm py-6 px-4 z-50 w-64"
            >
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center h-40 w-40 bg-red-800 rounded-full">
                  <div className="text-8xl text-center font-bold text-white uppercase">
                    {user?.email?.charAt(0) || "U"}
                  </div>
                </div>
              </div>
              <p className="text-black text-lg mt-4 font-sans">{user?.email}</p>
              <div className="flex justify-center items-center">
                <button
                  onClick={logOut}
                  className="mt-8 border px-4 py-2 rounded-2xl hover:bg-gray-50 transition"
                >
                  Log Out
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;