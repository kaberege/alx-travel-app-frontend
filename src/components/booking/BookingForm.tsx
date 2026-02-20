"use client";

import axios from "axios";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import Image from "next/image";
import CancellationPolicy from "./CancellationPolicy";
import { Label, Input } from "../common/Form";

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
  method: string;
  street: string;
  apt: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  [key: string]: string;
}

interface ContactProps {
  id: string;
  type: "number" | "text" | "search" | "email" | "date";
  name: string;
  title: string;
}

const contactDetails: ContactProps[] = [
  {
    id: "first-name-booking",
    type: "text",
    name: "firstName",
    title: "First Name",
  },
  {
    id: "last-name-booking",
    type: "text",
    name: "lastName",
    title: "Last Name",
  },
  { id: "email-booking", type: "email", name: "email", title: "Email" },
  {
    id: "phone-booking",
    type: "text",
    name: "phoneNumber",
    title: "Phone Number",
  },
];

const BookingForm = () => {
  const [formData, setFormData] = useState<FormProps>({
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
        formData,
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
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-3 shadow-md sm:grow sm:p-6 lg:pt-8"
    >
      {/* Contact Information */}
      <section className="border-b border-b-zinc-300 pb-6">
        <h2 className="text-base font-semibold text-zinc-950 lg:text-xl">
          Contact Detail
        </h2>
        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contactDetails.map((item: ContactProps, index: number) => (
            <div key={index}>
              <Label
                htmlFor={item.id}
                style={"text-xs font-medium text-zinc-950 lg:text-sm"}
                title={item.title}
              />
              <Input
                id={item.id}
                type={item.type}
                name={item.name}
                value={formData[item.name]}
                onChange={handleChange}
                required={true}
                style="mt-1 w-full rounded-md border border-zinc-300 px-2 py-1 focus:outline-1 focus:outline-teal-600"
              />
            </div>
          ))}
        </div>
        {/* Accept Information */}
        <div className="mt-4">
          <label
            htmlFor="checkbox"
            className="group flex cursor-pointer items-center"
          >
            <Input
              id="checkbox"
              type="checkbox"
              name="checkbox"
              style="peer hidden"
              required={true}
            />
            <div className="flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded border-2 border-teal-600 transition-colors duration-200 peer-checked:border-teal-600/0 peer-checked:bg-teal-600 peer-checked:hover:bg-teal-700">
              <BiCheck className="hidden shrink-0 font-bold text-white group-has-[:checked]:block" />
            </div>
            <span className="ml-2 text-[11px]">
              Receive text message update about your booking. Messages rates may
              apply.
            </span>
          </label>
        </div>
      </section>
      <section>
        {/* Payment Information */}
        <h2 className="mt-6 text-base font-semibold text-zinc-950 lg:text-xl">
          Pay with
        </h2>
        <div className="mt-2 flex items-center rounded-md border border-zinc-300 px-2">
          <Image
            src="/assets/icons/credit-card 1.png"
            width={500}
            height={500}
            alt="Payment method"
            className="mr-2 h-4 w-4"
          />
          <select
            name="method"
            id="pay-method"
            value={formData.method}
            onChange={handleChange}
            required
            className="w-full py-2 text-sm text-zinc-700 outline-none"
          >
            <option value="">Credit or debit card</option>
            <option value="credit">Credit card</option>
            <option value="debit">Debit card</option>
          </select>
        </div>
        <div className="flex flex-col">
          <div className="mt-2 flex items-center rounded-t-md border border-zinc-300 px-2">
            <label
              htmlFor="card-booking"
              className="flex shrink-0 items-center"
            >
              <span className="mr-1 text-[10px] text-zinc-500 sm:mr-3 sm:text-xs">
                Card number
              </span>
              <Image
                src="/assets/icons/Bold/Security/Lock.png"
                width={500}
                height={500}
                alt="Payment method"
                className="h-3 w-3"
              />
            </label>
            <input
              id="card-booking"
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full px-1 py-2 text-sm outline-none"
            />
          </div>
          <div className="grid grid-cols-2 rounded-b-md border-x border-b border-zinc-300 text-xs">
            <div className="border-r border-zinc-300">
              <input
                id="expiration-booking"
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
                placeholder="Expiration Date"
                className="mt-1 w-full px-2 py-1.5 outline-none"
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
                className="mt-1 w-full px-2 py-1.5 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="mt-4 mb-1 text-xs font-semibold text-zinc-950">
          Billing Address
        </h2>
        <div className="rounded-md border border-zinc-300 text-xs">
          <div className="border-b border-zinc-300">
            <input
              id="street-booking"
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
              placeholder="Street Address"
              className="mt-1 w-full px-2 py-1.5 outline-none"
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
              className="mt-1 w-full px-2 py-1.5 outline-none"
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
              className="mt-1 w-full px-2 py-1.5 outline-none"
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
                className="mt-1 w-full px-2 py-1.5 outline-none"
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
                className="mt-1 w-full px-2 py-1.5 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col rounded-md border border-zinc-300 px-2">
          <h3 className="pl-1 text-[10px] font-medium text-zinc-500">
            Country
          </h3>
          <select
            name="country"
            id="country-booking"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full py-0.5 text-[11px] outline-none"
          >
            <option value="Ghana">Ghana</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Uganada">Uganada</option>
          </select>
        </div>
      </section>
      <CancellationPolicy />
      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="mx-auto mt-6 w-full cursor-pointer rounded-md bg-teal-600 px-4 py-2 text-sm text-white shadow-md shadow-teal-900 transition-colors duration-300 hover:bg-teal-700 focus:ring-2 focus:ring-teal-800 sm:max-w-40 lg:max-w-60"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </form>
  );
};

export default BookingForm;
