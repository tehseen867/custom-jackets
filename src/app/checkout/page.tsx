'use client';

import { useCart } from '@/app/components/cartContext'; // Access the global Cart context
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const CheckoutPage = () => {
  const { cart, totalPrice, totalItems } = useCart();
  const router = useRouter();

  // Use effect to handle redirection after the component renders
  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart'); // Redirect to cart if the cart is empty
    }
  }, [cart.length, router]);

  // If no items in the cart, return null temporarily to prevent rendering
  if (cart.length === 0) {
    return null;
  }

  const handleConfirmOrder = () => {
    alert('Order Confirmed! Thank you for your purchase.');
    // Logic for actual order submission can go here (e.g., sending data to the backend)
    router.push('/'); // Redirect to home page after confirming the order
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Checkout Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center bg-white p-4 shadow rounded-lg">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                Size: <span className="font-medium">{item.size}</span> | Color:{" "}
                <span className="font-medium">{item.color}</span>
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-lg">Quantity: {item.quantity}</span>
              </div>
            </div>
            <div className="ml-4 text-right">
              <p className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Order Summary</h2>
        <div className="flex justify-between mb-1">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Total Price:</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>

        {/* User Information Form */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700">Shipping Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your shipping address"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </form>
        </div>

        <button
          className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
          onClick={handleConfirmOrder}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
