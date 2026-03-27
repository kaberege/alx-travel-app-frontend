import Link from "next/link";
import { Input, Label } from "@/components/common/Form";

export default function ForgotPasswordPage() {
  return (
    <div className="animate-content-in">
      <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        Enter the email address associated with your account and we&apos;ll send
        you a link to reset your password.
      </p>
      <form className="mt-10 space-y-8">
        <div className="border-b-2 border-gray-100 py-2 transition-all focus-within:border-teal-600">
          <label className="text-[10px] font-black text-teal-600 uppercase">
            Your Email
          </label>
          <input
            type="email"
            required
            className="w-full bg-transparent text-lg font-medium outline-none"
          />
        </div>
        <button className="w-full rounded-2xl bg-gray-900 py-4 font-bold text-white transition-all hover:bg-black">
          Send recovery email
        </button>
      </form>
      <Link
        href="/login"
        className="mt-10 block text-center text-sm font-bold text-gray-400 transition-colors hover:text-teal-600"
      >
        ← Back to Login
      </Link>
    </div>
  );
}
