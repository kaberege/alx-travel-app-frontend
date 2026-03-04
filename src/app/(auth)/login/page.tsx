import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
      <form className="mt-8 space-y-6">
        <div className="border-b-2 border-gray-100 py-2 transition-colors focus-within:border-teal-600">
          <label className="text-[10px] font-black text-teal-600 uppercase">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full bg-transparent text-lg font-medium outline-none"
          />
        </div>
        <div className="border-b-2 border-gray-100 py-2 transition-colors focus-within:border-teal-600">
          <div className="flex justify-between">
            <label className="text-[10px] font-black text-teal-600 uppercase">
              Password
            </label>
            <Link
              href="/forgot-password"
              title="reset"
              className="text-[10px] font-bold text-gray-400"
            >
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            required
            className="w-full bg-transparent text-lg font-medium outline-none"
          />
        </div>
        <button className="w-full rounded-2xl bg-teal-600 py-4 font-bold text-white shadow-lg shadow-teal-100 transition-all hover:bg-teal-700">
          Continue
        </button>
      </form>
      <p className="mt-8 text-center text-sm font-medium text-gray-500">
        New here?{" "}
        <Link href="/register" className="font-bold text-teal-600">
          Create account
        </Link>
      </p>
    </div>
  );
}
