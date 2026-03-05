"use client";

import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Logic to determine content based on the current URL
  const getContent = (): {
    bgClass: string;
    title: string;
    desc: string;
  } => {
    if (pathname.includes("register")) {
      return {
        bgClass: "bg-[url('/assets/auth/register-image.jpg')]",
        title: "Find your sanctuary.",
        desc: "Join 2M+ travelers finding unique spaces globally.",
      };
    }
    if (pathname.includes("forgot-password")) {
      return {
        bgClass: "bg-[url('/assets/auth/reset-password-image.jpg')]",
        title: "Don't stress.",
        desc: "We'll help you get back into your account safely.",
      };
    }
    // Default for Login
    return {
      bgClass: "bg-[url('/assets/auth/login-image.jpg')]",
      title: "Welcome back home.",
      desc: "Log in to manage your bookings and explore new stays.",
    };
  };

  const { bgClass, title, desc } = getContent();

  return (
    <div className="flex min-h-screen bg-white">
      <section className="relative hidden w-1/2 flex-col overflow-hidden p-16 text-white lg:flex">
        <div
          className={`absolute inset-0 z-0 ${bgClass} bg-cover bg-center transition-all duration-1000`}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-teal-900/10 to-teal-900/80" />
        <div className="z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white">
          <span className="text-center text-xs font-black tracking-[0.4em] text-teal-600 uppercase">
            KGN
          </span>
        </div>
        <div
          key={pathname}
          className="animate-content-in relative z-20 mt-auto"
        >
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
