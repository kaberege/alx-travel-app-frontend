"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/common/Button";
import { Form, Input, Label } from "@/components/common/Form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className="animate-content-in">
      <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
      <Form className="mt-8 space-y-6">
        <div className="focus-within:border-brand border-b-2 border-gray-100 py-2 transition-colors">
          <Label htmlFor="login-email" className="text-brand uppercase">
            Email
          </Label>
          <Input
            id="login-email"
            type="email"
            required
            className="text-lg font-medium"
          />
        </div>
        <div className="focus-within:border-brand border-b-2 border-gray-100 py-2 transition-colors">
          <div className="flex justify-between">
            <Label htmlFor="login-password" className="text-brand uppercase">
              Password
            </Label>
            <Link
              href="/forgot-password"
              title="reset"
              className="text-[10px] font-bold text-gray-400"
            >
              Forgot?
            </Link>
          </div>
          <div className="relative flex items-center">
            <Input
              id="login-password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder=""
              className="text-lg font-medium"
              required
            />
            <Button
              type="button"
              onClick={togglePasswordVisibility}
              className="hover:text-brand absolute right-3 cursor-pointer text-gray-400 transition-colors focus:outline-none"
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
        <Button className="bg-brand text-background w-full cursor-pointer rounded-2xl py-4 font-bold shadow-lg shadow-teal-100 transition-all hover:bg-teal-700">
          Continue
        </Button>
      </Form>
      <p className="mt-8 text-center text-sm font-medium text-gray-500">
        New here?{" "}
        <Link
          href="/register"
          className="text-brand font-bold transition-colors hover:text-teal-700"
        >
          Create account
        </Link>
      </p>
    </div>
  );
}
