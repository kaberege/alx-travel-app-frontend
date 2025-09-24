import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <section className="bg-teal-600 p-3"></section>
      <section className="flex flex-col gap-4 bg-zinc-900 p-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full sm:w-[90%] lg:w-full lg:max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <Image
              src="/assets/hero-section-image/alx-white.png"
              width={500}
              height={500}
              alt="alx logo"
              title="alx logo"
              className="w-[58.73px] h-[30.6px]"
            />
            <p className="text-[11px] sm:text-base text-neutral-300 font-medium">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          <div className="flex justify-between gap-4 flex-wrap w-[90%] sm:w-full mx-auto">
            <div>
              <h2 className="text-base sm:text-[25px] text-neutral-300 font-semibold">
                Explore
              </h2>
              <ul className="flex flex-col gap-1 text-[11px] sm:text-base text-neutral-300 font-medium mt-2">
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Apartments in Dubai
                  </a>
                </li>
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Hotels in New York
                  </a>
                </li>
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Villa in Spain
                  </a>
                </li>
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Mansion in Indonesia
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-base sm:text-[25px] text-neutral-300 font-semibold">
                Abour Us
              </h2>
              <ul className="flex flex-col gap-1 text-[11px] sm:text-base text-neutral-300 font-medium mt-2">
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Blog
                  </a>
                </li>
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Career
                  </a>
                </li>
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Customers
                  </a>
                </li>
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Brand
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-base sm:text-[25px] text-neutral-300 font-semibold">
                Help
              </h2>
              <ul className="flex flex-col gap-1 text-[11px] sm:text-base text-neutral-300 font-medium mt-2">
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Support
                  </a>
                </li>
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Cancel booking
                  </a>
                </li>
                <li className="hover:text-neutral-500 transition-colors">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Refunds Process
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="bg-neutral-200 p-[0.5px] mt-16 w-full max-w-7xl mx-auto" />
        <div className="flex flex-col gap-5 mt-2 w-full max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-[11px] sm:text-base text-neutral-300 font-medium">
              Some hotel requires you to cancel more than 24 hours before
              check-in. Details{" "}
              <span className="text-teal-600 hover:text-teal-400 transition-colors">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  here
                </a>
              </span>
            </p>
          </div>
          <ul className="flex gap-2 sm:gap-3 justify-center text-[11px] sm:text-base text-neutral-300 font-medium mb-10">
            <li className="hover:text-neutral-500 transition-colors">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </li>
            <li className="hover:text-neutral-500 transition-colors">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Policy service
              </a>
            </li>
            <li className="hover:text-neutral-500 transition-colors">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Partners
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
