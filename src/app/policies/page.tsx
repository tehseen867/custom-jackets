import Link from "next/link";

// app/policies/page.tsx
export default function Policies() {
    return (
      <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Policies & Terms
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Learn more about our Privacy Policy, Delivery Policy, and Terms &
            Conditions.
          </p>
        </div>
  
        {/* Policies and Terms Sections */}
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Privacy Policy Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At The Jacket Maker, we are committed to protecting your privacy.
                This Privacy Policy outlines how we collect, use, and safeguard
                your personal information when you visit our website or make a
                purchase.
              </p>
              <p>
                We collect information such as your name, email address, shipping
                address, and payment details to process your orders and provide
                you with the best possible service. Your data is securely stored
                and never shared with third parties without your consent.
              </p>
              <p>
                For more details, please read our full{" "}
                <Link
                  href="/"
                  className="text-indigo-600 hover:text-indigo-500 underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
  
          {/* Delivery Policy Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Delivery Policy
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We strive to deliver your orders as quickly as possible. Our
                standard delivery time is 7-10 business days, depending on your
                location. Expedited shipping options are also available at
                checkout.
              </p>
              <p>
                Once your order is shipped, you will receive a tracking number to
                monitor its progress. If you experience any delays or issues with
                your delivery, please contact our customer support team.
              </p>
              <p>
                For more details, please read our full{" "}
                <Link
                  href="/"
                  className="text-indigo-600 hover:text-indigo-500 underline"
                >
                  Delivery Policy
                </Link>
                .
              </p>
            </div>
          </div>
  
          {/* Terms & Conditions Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                By using our website and services, you agree to comply with our
                Terms & Conditions. These terms govern your access to and use of
                our website, including purchases, returns, and refunds.
              </p>
              <p>
                We reserve the right to modify these terms at any time. It is your
                responsibility to review them periodically. Continued use of our
                website constitutes acceptance of any changes.
              </p>
              <p>
                For more details, please read our full{" "}
                <Link
                  href="/terms-and-conditions"
                  className="text-indigo-600 hover:text-indigo-500 underline"
                >
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }