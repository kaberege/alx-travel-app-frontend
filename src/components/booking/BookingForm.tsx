"use client";

import axios from "axios";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import Image from "next/image";
import CancellationPolicy from "./CancellationPolicy";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    method: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/bookings`,
        formData
      );
      console.log(response);
      alert("Booking confirmed!");
    } catch (error) {
      console.error(error);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="sm:grow bg-white p-3 sm:p-6 lg:pt-8 shadow-md rounded-lg">
      <h2 className="text-zinc-950 text-base lg:text-xl font-semibold">
        Contact Detail
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div>
            <label
              htmlFor="first-name-booking"
              className="text-zinc-950 text-xs lg:text-sm font-medium"
            >
              First Name
            </label>
            <input
              id="first-name-booking"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-zinc-300 rounded-md focus:outline-1 focus:outline-teal-600 px-2 py-1 w-full mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="last-name-booking"
              className="text-zinc-950 text-xs lg:text-sm font-medium"
            >
              Last Name
            </label>
            <input
              id="last-name-booking"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-zinc-300 rounded-md focus:outline-1 focus:outline-teal-600 px-2 py-1 w-full mt-1"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div>
            <label
              htmlFor="email-booking"
              className="text-zinc-950 text-xs lg:text-sm font-medium"
            >
              Email
            </label>
            <input
              id="email-booking"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-zinc-300 rounded-md focus:outline-1 focus:outline-teal-600 px-2 py-1 w-full mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="phone-booking"
              className="text-zinc-950 text-xs lg:text-sm font-medium"
            >
              Phone Number
            </label>
            <input
              id="phone-booking"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border border-zinc-300 rounded-md focus:outline-1 focus:outline-teal-600 px-2 py-1 w-full mt-1"
            />
          </div>
        </div>

        {/* Accept Information */}
        <div className="mt-4 pb-6 border-b border-b-zinc-300">
          <label className="group flex items-center cursor-pointer">
            <input type="checkbox" className="peer hidden" />
            <div
              className="flex items-center justify-center w-4 h-4 rounded border-2 border-teal-600 
          peer-checked:bg-teal-600 peer-checked:border-teal-600/0 peer-checked:hover:bg-teal-700 
          cursor-pointer transition-colors duration-200 shrink-0"
            >
              <BiCheck className="hidden group-has-[:checked]:block text-white font-bold shrink-0" />
            </div>
            <span className="ml-2 text-[11px]">
              Receive text message update about your booking. Messages rates may
              apply.
            </span>
          </label>
        </div>

        {/* Payment Information */}
        <h2 className="text-zinc-950 text-base lg:text-xl font-semibold mt-6">
          Pay with
        </h2>
        <div className="flex items-center border border-zinc-300 rounded-md px-2 mt-2">
          <Image
            src="/assets/icons/credit-card 1.png"
            width={500}
            height={500}
            alt="Payment method"
            className="w-4 h-4 mr-2"
          />
          <select
            name="method"
            id="pay-method"
            value={formData.method}
            onChange={handleChange}
            required
            className="w-full outline-none text-zinc-700 text-sm py-2"
          >
            <option value="">Credit or debit card</option>
            <option value="credit">Credit card</option>
            <option value="debit">Debit card</option>
          </select>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center border border-zinc-300 rounded-t-md px-2 mt-2">
            <label
              htmlFor="card-booking"
              className="flex items-center shrink-0"
            >
              <span className="text-[10px] sm:text-xs text-zinc-500 mr-1 sm:mr-3">
                Card number
              </span>
              <Image
                src="/assets/icons/Bold/Security/Lock.png"
                width={500}
                height={500}
                alt="Payment method"
                className="w-3 h-3"
              />
            </label>
            <input
              id="card-booking"
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full outline-none text-sm py-2 px-1"
            />
          </div>
          <div className="grid grid-cols-2 border-x border-b border-zinc-300 rounded-b-md text-xs">
            <div className="border-r border-zinc-300 ">
              <input
                id="expiration-booking"
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
                placeholder="Expiration Date"
                className="outline-none px-2 py-1.5 w-full mt-1"
              />
            </div>
            <div>
              <input
                id="CVV-booking"
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                placeholder="CVV"
                className="outline-none px-2 py-1.5 w-full mt-1"
              />
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-zinc-950 text-xs font-semibold mt-4 mb-1">
          Billing Address
        </h2>
        <div className="border border-zinc-300 rounded-md text-xs">
          <div className="border-b border-zinc-300">
            <input
              id="street-booking"
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
              placeholder="Street Address"
              className="outline-none px-2 py-1.5 w-full mt-1"
            />
          </div>
          <div className="border-b border-zinc-300">
            <input
              id="Apt-suite"
              type="text"
              name="apt"
              value={formData.apt}
              onChange={handleChange}
              required
              placeholder="Apt or suite number"
              className="outline-none px-2  py-1.5 w-full mt-1"
            />
          </div>
          <div className="border-b border-zinc-300">
            <input
              id="city-booking"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="City"
              className="outline-none px-2  py-1.5 w-full mt-1"
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="border-r border-zinc-300">
              <input
                id="state-booking"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder=" State"
                className="outline-none px-2  py-1.5 w-full mt-1"
              />
            </div>
            <div className="">
              <input
                id="zip-code-booking"
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                placeholder="Zip Code"
                className="outline-none px-2 py-1.5 w-full mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-zinc-300 rounded-md mt-4 px-2">
          <h3 className="text-zinc-500 text-[10px] font-medium pl-1">
            Country
          </h3>
          <select
            name="country"
            id="country-booking"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full text-[11px] outline-none py-0.5"
          >
            <option value="Ghana">Ghana</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Uganada">Uganada</option>
          </select>
        </div>
        <CancellationPolicy />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="text-sm mt-6 w-full sm:max-w-40 lg:max-w-60 mx-auto bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 
        transition-colors duration-300 cursor-pointer shadow-md shadow-teal-900 focus:ring-2 focus:ring-teal-800"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}
      </form>
    </section>
  );
};

export default BookingForm;
