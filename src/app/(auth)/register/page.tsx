"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";
import Link from "next/link";
import { Form, Input, Label } from "@/components/common/Form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@/components/common/Button";
import axios from "axios";
import { api } from "@/lib/axios";

interface FormDataProps {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}

interface PayloadProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(): boolean {
    const localErrors: Record<string, string> = {};

    if (formData.firstName.trim().length < 2) {
      localErrors.firstName = "First name must be at least 2 characters.";
    }

    if (formData.lastName.trim().length < 2) {
      localErrors.lastName = "Last name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      localErrors.emailAddress = "Please enter a valid email address.";
    }

    // Rules: Min 8 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special char
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      localErrors.password =
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  }

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    const payload: PayloadProps = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.emailAddress,
      password: formData.password,
    };

    try {
      await api.post("auth/register/", payload);
      window.location.href = "/login?registered=true";
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          setErrors({ detail: err.response.data });
        } else {
          setErrors({ detail: "Something went wrong. Please try again." });
        }
      } else {
        setErrors({ detail: "An unexpected error occurred." });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-content-in">
      <h1 className="text-3xl font-bold text-gray-900">Join the family</h1>
      {errors.detail && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600">
          {errors.detail}
        </p>
      )}
      <Form onSubmit={handleSubmit} className="mt-8 space-y-1">
        <div className="grid-rows grid gap-1 sm:grid-cols-2">
          <div
            className={`rounded-tl-2xl border-b p-4 transition-colors max-sm:rounded-tr-2xl ${errors.firstName ? "border-red-500 bg-red-50/30" : "focus-within:border-brand border-gray-100 bg-gray-50 focus-within:bg-white"}`}
          >
            <Label htmlFor="firstName" className="text-gray-400 uppercase">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              required
              disabled={isLoading}
              onChange={handleChange}
              className="font-bold text-gray-900"
            />
            {errors.firstName && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.firstName}
              </p>
            )}
          </div>
          <div
            className={`border-b p-4 transition-colors sm:rounded-tr-2xl ${errors.lastName ? "border-red-500 bg-red-50/30" : "focus-within:border-brand border-gray-100 bg-gray-50 focus-within:bg-white"}`}
          >
            <Label htmlFor="lastName" className="text-gray-400 uppercase">
              Last Name
            </Label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              required
              disabled={isLoading}
              onChange={handleChange}
              className="font-bold text-gray-900"
            />
            {errors.lastName && (
              <p className="mt-1 text-[10px] text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div
          className={`border-b p-4 transition-colors ${errors.emailAddress ? "border-red-500 bg-red-50/30" : "focus-within:border-brand border-gray-100 bg-gray-50 focus-within:bg-white"}`}
        >
          <Label htmlFor="emailAddress" className="text-gray-400 uppercase">
            Email Address
          </Label>
          <Input
            id="emailAddress"
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            required
            disabled={isLoading}
            onChange={handleChange}
            className="font-bold text-gray-900"
          />
          {errors.emailAddress && (
            <p className="mt-1 text-[10px] text-red-500">
              {errors.emailAddress}
            </p>
          )}
        </div>
        <div
          className={`rounded-b-2xl border-b p-4 transition-colors ${errors.password ? "border-red-500 bg-red-50/30" : "focus-within:border-brand border-gray-100 bg-gray-50 focus-within:bg-white"}`}
        >
          <Label htmlFor="password" className="text-gray-400 uppercase">
            Password
          </Label>
          <div className="relative flex items-center">
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="••••••••"
              required
              disabled={isLoading}
              onChange={handleChange}
              className="pr-10 font-bold text-gray-900"
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
          {errors.password && (
            <p className="mt-1 text-[10px] text-red-500">{errors.password}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-brand text-background shadow-brand/20 mt-8 w-full cursor-pointer rounded-2xl py-4 font-bold shadow-xl transition-all hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Creating Account..." : "Agree and continue"}
        </Button>
      </Form>
      <p className="mt-8 text-center text-sm font-medium text-gray-500">
        Already a member?{" "}
        <Link
          href="/login"
          className="text-brand font-bold transition-colors hover:brightness-90"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
