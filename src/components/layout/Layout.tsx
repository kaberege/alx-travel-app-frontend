"use client";

import Header from "./Header";
import Footer from "./Footer";
import { ReactNodeProps } from "@/interfaces";
import { usePathname } from "next/navigation";

const authRoutes: string[] = ["/login", "/register", "/forgot-password"];

const Layout: React.FC<Readonly<ReactNodeProps>> = ({ children }) => {
  const pathname: string = usePathname();
  return (
    <>
      {!authRoutes.includes(pathname) && <Header />}
      <main className="min-h-screen">{children}</main>
      {!authRoutes.includes(pathname) && <Footer />}
    </>
  );
};

export default Layout;
