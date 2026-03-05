import Link from "next/link";
import { FaHome, FaSurprise } from "react-icons/fa";
import { RiAliensFill } from "react-icons/ri";

const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
      <div className="mb-4 flex items-center gap-4">
        <h1 className="text-6xl font-bold">Oops!</h1>
        <FaSurprise className="text-5xl" />
      </div>

      <p className="mb-8 text-center text-2xl">
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <div className="mb-8 flex max-w-md flex-col items-center text-center">
        <RiAliensFill className="mb-2 animate-bounce text-5xl" />
        <p className="text-lg">
          Maybe it was abducted by aliens, or it just took a wrong turn into the
          Internet wilderness! Either way, it&apos;s not here.
        </p>
      </div>
      <Link
        href="/"
        className="flex items-center space-x-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600"
      >
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
};

export default Custom404;
