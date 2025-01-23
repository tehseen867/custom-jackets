// app/contact-us/page.tsx
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          We&apos;re here to help! Reach out to us for any questions or concerns.
        </p>
      </div>

      {/* Contact Form and Details Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="Enter First Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Enter Last Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select Subject</option>
                <option value="order">Order Inquiry</option>
                <option value="returns">Returns & Refunds</option>
                <option value="shipping">Shipping & Delivery</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Order ID */}
            <div className="mt-6">
              <label
                htmlFor="order-id"
                className="block text-sm font-medium text-gray-700"
              >
                Order ID (if applicable)
              </label>
              <input
                type="text"
                id="order-id"
                name="order-id"
                placeholder="Enter Order ID"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Comments */}
            <div className="mt-6">
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700"
              >
                Comments *
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                placeholder="Enter your message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Details
          </h2>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start">
              <FaEnvelope className="text-2xl text-gray-700 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">contact@thejacketmaker.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-2xl text-gray-700 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                  Iconic Fashion
                  <br />
                  Evolution Fashion FZC
                  <br />
                  24048 Hesperian Blvd, Hayward, CA 94545, United States of
                  America
                  <br />
                  Office #606, Business Park, P.O. Box 37277, Ras Al Khaimah,
                  United Arab Emirates
                </p>
              </div>
            </div>

            {/* Payment Account */}
            <div className="flex items-start">
              <FaEnvelope className="text-2xl text-gray-700 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Payment Account
                </h3>
                <p className="text-gray-600">
                  Associated with Payoneer account: anwerbrothers@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}