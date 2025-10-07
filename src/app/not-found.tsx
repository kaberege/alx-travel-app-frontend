import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      {/* Main Heading */}
      <h1 className="mb-4 text-6xl font-bold">Oops! 😱</h1>
      <p className="mb-8 text-2xl">
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>

      {/* Funny Message */}
      <p className="mb-8 max-w-md text-center text-lg">
        Maybe it was abducted by aliens 👽, or it just took a wrong turn into
        the Internet wilderness! Either way, it&apos;s not here.
      </p>

      {/* Button to navigate back */}
      <Link
        href="/"
        className="flex items-center space-x-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
      >
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
};

export default Custom404;
