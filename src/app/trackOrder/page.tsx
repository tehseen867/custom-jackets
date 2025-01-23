// app/track-order/page.tsx
import Link from "next/link";

export default function TrackOrder() {
  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Track Your Order
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Enter your order details to check the status of your order.
        </p>
      </div>

      {/* Order Tracking Form */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <form>
          {/* Order ID */}
          <div className="mb-6">
            <label
              htmlFor="order-id"
              className="block text-sm font-medium text-gray-700"
            >
              Order ID *
            </label>
            <input
              type="text"
              id="order-id"
              name="order-id"
              placeholder="Enter Order ID"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            {/* Back Button */}
            <Link
              href="/"
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-400 transition-colors"
            >
              Back
            </Link>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Help Section */}
      <div className="max-w-7xl mx-auto text-center mt-12">
        <p className="text-gray-600">
          Need help? Please {" "}
         
          <Link
            href="/contactUs"
            className="text-indigo-600 hover:text-indigo-500 underline"
          >
            contact us here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}