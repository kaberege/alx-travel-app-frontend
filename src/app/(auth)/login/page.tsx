"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Button from "@/components/common/Button";
import { Form, Input, Label } from "@/components/common/Form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { api } from "@/lib/axios";

interface FormDataProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [formData, setFormData] = useState<FormDataProps>({
    email: "",
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
    const localErrors: Partial<Record<keyof FormDataProps, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      localErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      localErrors.password = "Password field cannot be empty.";
    }

    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const { data } = await api.post("auth/login/", formData);
      // Store token safely in secure cookie for middleware protection access
      Cookies.set("token", data.access, {
        expires: 7,
        secure: true,
        sameSite: "lax",
      });

      const params = new URLSearchParams(window.location.search);
      window.location.href = params.get("callbackUrl") || "/dashboard";
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400 || err.response?.status === 401) {
          const serverErrors = err.response.data;
          setErrors({
            email: serverErrors.email?.[0],
            password: serverErrors.password?.[0],
            detail:
              serverErrors.non_field_errors?.[0] ||
              serverErrors.detail ||
              "Invalid login credentials.",
          });
        } else {
          setErrors({ detail: "Server connection failed." });
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
      <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
      {errors.detail && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600">
          {errors.detail}
        </p>
      )}
      <Form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div
          className={`border-b-2 py-2 transition-colors ${errors.email ? "border-red-500" : "focus-within:border-brand border-gray-100"}`}
        >
          <Label
            htmlFor="email"
            className="text-brand text-xs font-bold uppercase"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            required
            disabled={isLoading}
            onChange={handleChange}
            className="text-lg font-medium"
          />
          {errors.email && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.email}
            </p>
          )}
        </div>
        <div
          className={`border-b-2 py-2 transition-colors ${errors.password ? "border-red-500" : "focus-within:border-brand border-gray-100"}`}
        >
          <div className="flex justify-between">
            <Label
              htmlFor="password"
              className="text-brand text-xs font-bold uppercase"
            >
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="hover:text-brand text-[10px] font-bold text-gray-400 transition-colors"
            >
              Forgot?
            </Link>
          </div>
          <div className="relative flex items-center">
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              required
              disabled={isLoading}
              onChange={handleChange}
              className="pr-10 text-lg font-medium"
            />
            <Button
              type="button"
              onClick={togglePasswordVisibility}
              className="hover:text-brand absolute right-3 cursor-pointer text-gray-400 transition-colors focus:outline-none"
            >
              {isPasswordVisible ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </Button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.password}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-brand text-background shadow-brand/20 w-full cursor-pointer rounded-2xl py-4 font-bold shadow-lg transition-all hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Signing in..." : "Continue"}
        </Button>
      </Form>
      <p className="mt-8 text-center text-sm font-medium text-gray-500">
        New here?{" "}
        <Link
          href="/register"
          className="text-brand font-bold transition-colors hover:brightness-90"
        >
          Create account
        </Link>
      </p>
    </div>
  );
}
