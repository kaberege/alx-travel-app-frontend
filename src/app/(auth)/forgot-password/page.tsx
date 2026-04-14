"use client";

import Link from "next/link";
import { Form, Input, Label } from "@/components/common/Form";
import Button from "@/components/common/Button";
import { FaArrowLeft } from "react-icons/fa6";

export default function ForgotPasswordPage() {
  return (
    <div className="animate-content-in">
      <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        Enter the email address associated with your account and we&apos;ll send
        you a link to reset your password.
      </p>
      <Form className="mt-10 space-y-8">
        <div className="focus-within:border-brand border-b-2 border-gray-100 py-2 transition-all">
          <Label htmlFor="forgot-password" className="text-brand uppercase">
            Your Email
          </Label>
          <Input
            id="forgot-password"
            type="email"
            required
            className="text-lg font-medium"
          />
        </div>
        <Button
          type="submit"
          className="text-background w-full cursor-pointer rounded-2xl bg-gray-900 py-4 font-bold transition-all hover:bg-black"
        >
          Send recovery email
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
