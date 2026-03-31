"use client";

import { useState } from "react";
import Link from "next/link";
import { Form, Input, Label } from "@/components/common/Form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@/components/common/Button";

export default function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className="animate-content-in">
      <h1 className="text-3xl font-bold text-gray-900">Join the family</h1>
      <Form className="mt-8 space-y-1">
        <div className="grid grid-cols-2 gap-1">
          <div className="rounded-tl-2xl border-r border-b border-gray-100 bg-gray-50 p-4">
            <Label htmlFor="first-name" className="text-gray-400 uppercase">
              First Name
            </Label>
            <Input
              id="first-name"
              type="text"
              className="font-bold text-gray-900"
              required
            />
          </div>
          <div className="rounded-tr-2xl border-b border-gray-100 bg-gray-50 p-4">
            <Label htmlFor="last-name" className="text-gray-400 uppercase">
              Last Name
            </Label>
            <Input
              id="last-name"
              type="text"
              className="font-bold text-gray-900"
              required
            />
          </div>
        </div>
        <div className="border-b border-gray-100 bg-gray-50 p-4">
          <Label htmlFor="email-address" className="text-gray-400 uppercase">
            Email Address
          </Label>
          <Input
            id="email-address"
            type="email"
            className="font-bold text-gray-900"
            required
          />
        </div>
        <div className="rounded-b-2xl bg-gray-50 p-4">
          <Label htmlFor="password" className="text-gray-400 uppercase">
            Password
          </Label>
          <div className="relative flex items-center">
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="••••••••"
              className="pr-10 font-bold text-gray-900"
              required
            />
            <Button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 cursor-pointer text-gray-400 transition-colors hover:text-teal-600 focus:outline-none"
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
              {isPasswordVisible ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </Button>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-8 w-full rounded-2xl bg-teal-600 py-4 font-bold text-white shadow-xl shadow-teal-600/20 transition-all hover:bg-teal-700"
        >
          Agree and continue
        </Button>
      </Form>
      <p className="mt-8 text-center text-sm font-medium text-gray-500">
        Already a member?{" "}
        <Link href="/login" className="font-bold text-teal-600">
          Log in
        </Link>
      </p>
    </div>
  );
}
