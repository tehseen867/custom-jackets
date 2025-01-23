"use client";
import { useState } from "react";

// Country codes list with phone number validation patterns
const countryCodes = [
  { name: "USA", code: "+1", pattern: /^[0-9]{10}$/ }, // USA: 10 digits
  { name: "Canada", code: "+1", pattern: /^[0-9]{10}$/ }, // Canada: 10 digits
  { name: "India", code: "+91", pattern: /^[0-9]{10}$/ }, // India: 10 digits
  { name: "UK", code: "+44", pattern: /^[0-9]{10}$/ }, // UK: 10 digits
  { name: "Australia", code: "+61", pattern: /^[0-9]{9}$/ }, // Australia: 9 digits
];

interface GetingProps {
  name?: string; // Optional prop
}

interface FormData {
  name: string;
  email: string;
  phone: string; // Full phone number including country code
  country: string;
  jacketCategory: string;
  quantity: string;
  gender: string;
  description: string;
  design: File | null;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  jacketCategory?: string;
  quality?: string;
  gender?: string;
}

const DynamicCustomPage: React.FC<GetingProps> = ({ name }) => {
  // State for the form data
  const [fileName, setFileName] = useState<string>("");
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    jacketCategory: "",
    quantity: "",
    gender: "",
    description: "",
    design: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const countries = ["USA", "Canada", "India", "UK", "Australia"];
  const jacketCategories = ["Leather", "Denim", "Windbreaker", "Bomber", "Blazer"];
  const qualities = ["1", "2", "3", "4", "5+", "10+", "50+", "100+"];
  const genders = ["Male", "Female"];

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle phone number with country code
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: e.target.value,
    }));
  };

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const selectedCountryCode = countryCodes.find(
      (country) => country.name === formData.country
    );

    // Name validation
    if (!formData.name) newErrors.name = "Name is required";

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (selectedCountryCode && !selectedCountryCode.pattern.test(formData.phone)) {
      newErrors.phone = `Phone number is invalid for ${selectedCountryCode.name}`;
    }

    // Country validation
    if (!formData.country) newErrors.country = "Country is required";

    // Other field validations
    if (!formData.jacketCategory) newErrors.jacketCategory = "Jacket category is required";
    if (!formData.quantity) newErrors.quality = "Quality is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    // Simulate form submission logic (e.g., sending data to a server)
    setTimeout(() => {
      console.log(formData);
      alert("Custom Jacket order submitted!");
      setLoading(false);
    }, 2000);
  };

  // Get phone number input field style based on validation
  const getPhoneInputStyle = (): string => {
    const selectedCountryCode = countryCodes.find(
      (country) => country.name === formData.country
    );

    if (selectedCountryCode && formData.phone && !selectedCountryCode.pattern.test(formData.phone)) {
      return "border-red-500";
    }
    return "border-gray-300";
  };

  return (
    <div className="w-auto gap-x-6 mx-auto p-10 mt-10 mb-1 bg-gray-100">
      <h3 className="text-5xl leading-tight font-bold text-gray-600 w-full my-10 text-center">Create Your {name}</h3>
      <div className="flex gap-x-20 justify-center">
        <div className="w-96 flex flex-col gap-y-2">
          <div>
            <p className="font-bold text-gray-800 font-sans">Helpful Details</p>
            <p className="font-sans text-[16px] text-gray-600">We can start your consultation with as little detail as you have. However, if you have any of the following things in mind already, they&apos;re helpful for us to know as we create your design.</p>
          </div>

          <div>
            <p className="font-bold text-gray-800 font-sans">Design</p>
            <p className="font-sans text-[16px] text-gray-600">Have a unique design of your own, or know the tastes of the person you&apos;re designing for? Let us know.</p>
          </div>

          <div>
            <p className="font-bold text-gray-800 font-sans">Leather/Fabrics</p>
            <p className="font-sans text-[16px] text-gray-600">Already know the types of Leather or fabrics you&apos;d like to use in your design? That can help us provide a quote more quickly.</p>
          </div>

          <div>
            <p className="font-bold text-gray-800 font-sans">Budget</p>
            <p className="font-sans text-[16px] text-gray-600">If you have a budget in mind, we can help you weigh different options and their costs.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-500 font-sans ">
          <div className="flex gap-x-5">
            {/* Name Input */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                className={`w-[300px] p-3 mt-1 text-sm border focus:outline-none shadow-sm  focus:border-blue-300 focus:shadow-blue-200 bg-gray-100  ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`focus:shadow-blue-200 bg-gray-100 w-[300px] p-3 mt-1 text-sm border focus:outline-none shadow-sm  focus:border-blue-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                required
                placeholder="Email*"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
          <div className="flex gap-x-5">
            {/* Country Dropdown */}
            <div>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`focus:shadow-blue-200 bg-gray-100 w-[300px] p-[13px] mt-1 text-sm border focus:outline-none shadow-sm  focus:border-blue-300 ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>

            {/* Jacket Category Dropdown */}
            <div>
              <select
                id="jacketCategory"
                name="jacketCategory"
                value={formData.jacketCategory}
                onChange={handleChange}
                className={` focus:shadow-blue-200 bg-gray-100 w-[300px] p-[13px] mt-1 text-sm border focus:outline-none shadow-sm  focus:border-blue-300 ${errors.jacketCategory ? 'border-red-500' : 'border-gray-300'}`}
                required
              >
                <option value="">What do you want to make?</option>
                {jacketCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              {errors.jacketCategory && <p className="text-red-500 text-sm">{errors.jacketCategory}</p>}
            </div>
          </div>

          <div className="flex gap-x-5">
            {/* Phone Number Input with Country Code */}
            <div>
              <div className="flex items-center">
                {/* Country Code Display */}
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    name="countryCode"
                    value={countryCodes.find((country) => country.name === formData.country)?.code || '+00'}
                    className="  bg-gray-100 w-[50px] p-3 mt-1 text-sm border  focus:outline-none shadow-sm  "
                    readOnly
                  />
                </div>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`focus:shadow-blue-200 bg-gray-100 w-[250px] p-3 mt-1 text-sm border focus:outline-none shadow-sm  focus:border-blue-300 ${getPhoneInputStyle()}`}
                  placeholder="Enter phone number"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            {/* Quality Dropdown */}
            <div>
              <select
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className={`focus:shadow-blue-200 bg-gray-100 w-[300px] p-[13px] mt-1 text-sm border focus:outline-none shadow-sm  focus:border-blue-300 ${errors.quality ? 'border-red-500' : 'border-gray-300'}`}
                required
              >
                <option value="">Select Quantity</option>
                {qualities.map((quality, index) => (
                  <option key={index} value={quality}>{quality}</option>
                ))}
              </select>
              {errors.quality && <p className="text-red-500 text-sm">{errors.quality}</p>}
            </div>
          </div>
          <div className="flex gap-x-5">
            {/* Gender Dropdown */}
            <div>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`focus:shadow-blue-200 bg-gray-100 w-[300px] p-[13px] mt-1 text-sm border focus:outline-none shadow-sm  focus:border-blue-300 ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                required
              >
                <option value="">Select Gender</option>
                {genders.map((gender, index) => (
                  <option key={index} value={gender}>{gender}</option>
                ))}
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>

            {/* Design Upload */}
            <div className="relative">
              {/* Hidden file input */}
              <input
                type="file"
                id="file-upload"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={handleFileUpload}
              />
              {/* Custom button */}
              <button
                type="button"
                className="focus:shadow-blue-200 bg-gray-100 w-[300px] mt-[5px] p-[10px]  text-gray-500 border border-black"
              >
                {fileName ? "design uploaded" : "Upload:Artwork/design/logo"}
              </button>
            </div>
          </div>
          {/* Description */}
          <div>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="focus:shadow-blue-200 bg-gray-100 w-full p-3 mt-1 border border-gray-300 text-sm focus:outline-none shadow-sm  focus:border-blue-300"
              rows={4}
              placeholder="Description:please write description for your custom order"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-[200px] py-3 bg-gray-950 text-white hover:bg-gray-100 hover:text-black active:bg-white border border-black"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicCustomPage;