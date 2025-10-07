import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <section className="bg-teal-600 p-3"></section>
      <section className="flex flex-col gap-4 bg-zinc-900 p-3">
        <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:w-[90%] lg:w-full lg:max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Image
              src="/kgn_logo.jpg"
              width={500}
              height={500}
              alt="kgn logo"
              title="kgn logo"
              className="h-8 w-8 rounded-full"
            />
            <p className="text-[11px] font-medium text-neutral-300 sm:text-base">
              KGN is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, KGN connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          <div className="mx-auto flex w-[90%] flex-wrap justify-between gap-4 sm:w-full">
            <div>
              <h2 className="text-base font-semibold text-neutral-300 sm:text-[25px]">
                Explore
              </h2>
              <ul className="mt-2 flex flex-col gap-1 text-[11px] font-medium text-neutral-300 sm:text-base">
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Apartments in Dubai
                  </a>
                </li>
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Hotels in New York
                  </a>
                </li>
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Villa in Spain
                  </a>
                </li>
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Mansion in Indonesia
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-semibold text-neutral-300 sm:text-[25px]">
                Abour Us
              </h2>
              <ul className="mt-2 flex flex-col gap-1 text-[11px] font-medium text-neutral-300 sm:text-base">
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Blog
                  </a>
                </li>
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Career
                  </a>
                </li>
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Customers
                  </a>
                </li>
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Brand
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-semibold text-neutral-300 sm:text-[25px]">
                Help
              </h2>
              <ul className="mt-2 flex flex-col gap-1 text-[11px] font-medium text-neutral-300 sm:text-base">
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Support
                  </a>
                </li>
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Cancel booking
                  </a>
                </li>
                <li className="transition-colors hover:text-neutral-500">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Refunds Process
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mx-auto mt-16 w-full max-w-7xl bg-neutral-200 p-[0.5px]" />
        <div className="mx-auto mt-2 flex w-full max-w-7xl flex-col gap-5">
          <div className="text-center">
            <p className="text-[11px] font-medium text-neutral-300 sm:text-base">
              Some hotel requires you to cancel more than 24 hours before
              check-in. Details{" "}
              <span className="text-teal-600 transition-colors hover:text-teal-400">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  here
                </a>
              </span>
            </p>
          </div>
          <ul className="mb-10 flex justify-center gap-2 text-[11px] font-medium text-neutral-300 sm:gap-3 sm:text-base">
            <li className="transition-colors hover:text-neutral-500">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </li>
            <li className="transition-colors hover:text-neutral-500">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Policy service
              </a>
            </li>
            <li className="transition-colors hover:text-neutral-500">
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
