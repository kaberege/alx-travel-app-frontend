"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";
import Link from "next/link";
import { Form, Input, Label } from "@/components/common/Form";
import Button from "@/components/common/Button";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { api } from "@/lib/axios";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (error) setError(null);
  }

  function validateForm(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      await api.post("auth/password-reset/", { email });
      setIsSuccess(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.data) {
          setError(
            err.response.data.email?.[0] ||
              err.response.data.detail ||
              "Request failed.",
          );
        } else {
          setError("Network error. Try again later.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="animate-content-in py-6 text-center">
        <FaCheckCircle className="text-brand mx-auto mb-4 text-5xl" />
        <h1 className="text-3xl font-bold text-gray-900">Check your email</h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          We have sent a link to recover your access variables to: <br />
          <span className="font-semibold text-gray-800">{email}</span>
        </p>
        <Link
          href="/login"
          className="text-brand mt-8 inline-flex items-center text-sm font-bold transition-all hover:underline"
        >
          <FaArrowLeft size={14} className="mr-2" /> Back to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-content-in">
      <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        Enter the email address associated with your account and we&apos;ll send
        you a link to reset your password.
      </p>
      <Form onSubmit={handleSubmit} className="mt-10 space-y-8">
        <div
          className={`border-b-2 py-2 transition-all ${error ? "border-red-500" : "focus-within:border-brand border-gray-100"}`}
        >
          <Label
            htmlFor="email"
            className="text-brand text-xs font-bold uppercase"
          >
            Your Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            disabled={isLoading}
            required
            onChange={handleChange}
            className="text-lg font-medium"
          />
          {error && (
            <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="text-background w-full cursor-pointer rounded-2xl bg-gray-900 py-4 font-bold transition-all hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Sending email..." : "Send recovery email"}
        </Button>
      </Form>
      <Link
        href="/login"
        className="hover:text-brand mt-10 flex items-center justify-center text-sm font-bold text-gray-400 transition-colors"
      >
        <FaArrowLeft size={16} className="mr-1" /> Back to Login
      </Link>
    </div>
  );
}
