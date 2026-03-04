"use client";

import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Logic to determine content based on the current URL
  const getContent = () => {
    if (pathname.includes("register")) {
      return {
        bg: "/assets/auth/register-image.jpg",
        title: "Find your sanctuary.",
        desc: "Join 2M+ travelers finding unique spaces globally.",
      };
    }
    if (pathname.includes("forgot-password")) {
      return {
        bg: "/assets/auth/reset-password-image.jpg",
        title: "Don't stress.",
        desc: "We'll help you get back into your account safely.",
      };
    }
    // Default for Login
    return {
      bg: "/assets/auth/login-image.jpg",
      title: "Welcome back home.",
      desc: "Log in to manage your bookings and explore new stays.",
    };
  };

  const { bg, title, desc } = getContent();

  return (
    <div className="flex min-h-screen bg-white font-sans">
      <section className="relative hidden w-1/2 flex-col overflow-hidden p-16 text-white lg:flex">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-teal-900/10 to-teal-900/80" />

        <div className="relative z-20 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-teal-600 shadow-xl shadow-black/20">
            <span className="text-xl font-black italic">K</span>
          </div>
          <span className="text-xs font-black tracking-[0.4em] uppercase">
            KGN
          </span>
        </div>

        <div className="animate-in fade-in slide-in-from-left-8 relative z-20 mt-auto duration-700">
          <h2 className="text-6xl leading-none font-bold tracking-tighter">
            {title}
          </h2>
          <p className="mt-6 max-w-sm text-lg font-medium text-white/80">
            {desc}
          </p>
        </div>
      </section>
      <main className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-[420px]">{children}</div>
      </main>
    </div>
  );
}
