import Header from "./Header";
import Footer from "./Footer";
import { MyProps } from "@/interfaces";

const Layout: React.FC<MyProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
