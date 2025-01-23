'use client'; // Ensure it's a client-side component
import { useCart } from '@/app/components/cartContext'; // Access the global Cart context
import { useRouter } from 'next/navigation'; // For redirection to checkout page
import Image from 'next/image';

// Define the type for a cart item
type CartItem = {
  id: string; // Unique identifier for the item
  name: string; // Name of the item
  price: number; // Price of the item
  image: string; // URL of the item's image
  size: string; // Size of the item
  color: string; // Color of the item
  quantity: number; // Quantity of the item in the cart
};

const CartPage = () => {
  const { cart, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const router = useRouter();

  const handleProceedToCheckout = () => {
    router.push('/checkout'); // Redirect to checkout page
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item: CartItem) => (
          <div key={item.id} className="flex items-center bg-white p-4 shadow rounded-lg">
            <Image
              src={item.image}
              width={100}
              height={100}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                Size: <span className="font-medium">{item.size}</span> | Color:{" "}
                <span className="font-medium">{item.color}</span>
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="ml-4 text-right">
              <p className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="text-sm text-red-500 hover:underline"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
        <div className="flex justify-between mb-1">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Price:</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button
          className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          onClick={handleProceedToCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;