import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <h1 className="text-3xl font-bold text-gray-900">Join the family</h1>
      <form className="mt-8 space-y-1">
        <div className="grid grid-cols-2 gap-1">
          <div className="rounded-tl-2xl border-r border-b border-gray-100 bg-gray-50 p-4">
            <label className="text-[10px] font-black text-gray-400 uppercase">
              First Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent font-bold text-gray-900 outline-none"
            />
          </div>
          <div className="rounded-tr-2xl border-b border-gray-100 bg-gray-50 p-4">
            <label className="text-[10px] font-black text-gray-400 uppercase">
              Last Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent font-bold text-gray-900 outline-none"
            />
          </div>
        </div>
        <div className="border-b border-gray-100 bg-gray-50 p-4">
          <label className="text-[10px] font-black text-gray-400 uppercase">
            Email Address
          </label>
          <input
            type="email"
            className="w-full bg-transparent font-bold text-gray-900 outline-none"
          />
        </div>
        <div className="rounded-b-2xl bg-gray-50 p-4">
          <label className="text-[10px] font-black text-gray-400 uppercase">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-transparent font-bold text-gray-900 outline-none"
          />
        </div>
        <button className="mt-8 w-full rounded-2xl bg-teal-600 py-4 font-bold text-white shadow-xl shadow-teal-600/20 transition-all hover:bg-teal-700">
          Agree and continue
        </button>
      </form>
      <p className="mt-8 text-center text-sm font-medium text-gray-500">
        Already a member?{" "}
        <Link href="/login" className="font-bold text-teal-600">
          Log in
        </Link>
      </p>
    </div>
  );
}
