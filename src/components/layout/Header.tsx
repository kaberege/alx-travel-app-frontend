"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypesOfAcommodation } from "@/constants";
import { usePathname } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <section className="bg-teal-600 px-2 pb-1 pt-5 sm:pt-1">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/assets/icons/Linear/School/case-minimalistic.png"
            width={500}
            height={500}
            alt="Email box"
            title="Email box"
            className="cursor-pointer w-4 h-4"
          />
          <p className="text-white text-[11px] sm:text-xs font-semibold">
            Overseas trip? Get the latest information on travel guides
          </p>
          <button
            className="text-white hover:text-amber-50 text-[11px] text-center cursor-pointer font-semibold bg-black rounded-full 
          px-1.5 py-0.5 hover:bg-slate-700 focus:ring-2 focus:ring-slate-950 transition-all whitespace-nowrap"
          >
            More Info
          </button>
        </div>
      </section>
      <section className="bg-white py-3 border-b-[1px] border-b-neutral-300 overflow-hidden">
        <div className="w-full max-w-7xl bg-white flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4  xl:px-1 mx-auto">
          <div className="w-full flex items-center justify-between sm:hidden pb-4">
            <Image
              src="/kgn_logo.jpg"
              width={500}
              height={500}
              alt="kgn logo"
              title="kgn logo"
              className="cursor-pointer w-7 h-7 md:w-10 md:h-10"
            />
            <button className="flex items-center justify-center rounded-full w-[30px] h-[30px] bg-teal-600">
              <Image
                src="/assets/icons/profile2.png"
                width={500}
                height={500}
                alt="profile"
                className="cursor-pointer w-7 h-7"
              />
            </button>
          </div>
          <Image
            src="/kgn_logo.jpg"
            width={500}
            height={500}
            alt="kgn logo"
            title="kgn logo"
            className="cursor-pointer hidden sm:block w-7 h-7 md:w-10 md:h-10"
          />
          <div className="rounded-full border border-neutral-300 py-1 pl-4 pr-1">
            <form className="flex items-center">
              <div className="sm:hidden">
                <p className="text-[11px] font-semibold">Where to</p>
                <div className="flex items-center gap-1">
                  <input
                    type="search"
                    name="location"
                    id="locations"
                    className="text-neutral-500 text-[10px] outline-none w-3/5"
                    placeholder="Location"
                  />
                  <span className="w-1 h-1 rounded-full bg-neutral-500 shrink-0"></span>
                  <input
                    type="date"
                    name="check-out"
                    id="check-outs"
                    className="text-neutral-500 text-[10px] outline-none w-1/5"
                    placeholder="Date"
                  />
                  <span className="w-1 h-1 rounded-full bg-neutral-500 shrink-0"></span>
                  <input
                    type="search"
                    name="people"
                    id="person"
                    className="text-neutral-500 text-[10px] outline-none w-1/5 mr-1"
                    placeholder="Add guest"
                  />
                </div>
              </div>
              <div className="hidden sm:grid grid-cols-5 w-full sm:max-w-md lg:max-w-2xl">
                <div className="col-span-2 sm:flex flex-col pr-2 border-r border-neutral-300">
                  <label
                    htmlFor="location"
                    className="text-zinc-900 font-medium text-xs"
                  >
                    Location
                  </label>
                  <input
                    type="search"
                    name="location"
                    id="location"
                    className="text-neutral-500 text-[10px] outline-none"
                    placeholder="Search for destination"
                  />
                </div>
                <div className="flex flex-col px-2 border-r border-neutral-300">
                  <label
                    htmlFor="check-in"
                    className="text-zinc-900 font-medium text-xs"
                  >
                    Check in
                  </label>
                  <input
                    type="date"
                    name="check-in"
                    id="check-in"
                    className="text-neutral-500 text-[10px] outline-none"
                    placeholder="Add date"
                  />
                </div>
                <div className="flex flex-col px-2 border-r border-neutral-300">
                  <label
                    htmlFor="check-out"
                    className="text-zinc-900 font-medium text-xs"
                  >
                    Check out
                  </label>
                  <input
                    type="date"
                    name="check-out"
                    id="check-out"
                    className="text-neutral-500 text-[10px] outline-none"
                    placeholder="Add date"
                  />
                </div>
                <div className="flex flex-col pl-2">
                  <label
                    htmlFor="people"
                    className="text-zinc-900 font-medium text-xs"
                  >
                    People
                  </label>
                  <input
                    type="search"
                    name="people"
                    id="people"
                    className="text-neutral-500 text-[10px] outline-none"
                    placeholder="Add guest"
                  />
                </div>
              </div>
              <button className="flex items-center justify-center shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors cursor-pointer">
                <Image
                  src="/assets/icons/Linear/Search/magnifers.png"
                  width={500}
                  height={500}
                  alt="Search"
                  className="w-4.5 h-4.5 sm:w-[19px] sm:h-[19px] shrink-0"
                />
              </button>
            </form>
          </div>
          <button className="hidden sm:flex lg:hidden items-center justify-center rounded-full w-[30px] h-[30px] bg-teal-600">
            <Image
              src="/assets/icons/profile2.png"
              width={500}
              height={500}
              alt="profile"
              className="cursor-pointer w-7 h-7"
            />
          </button>
          <div className="lg:flex gap-2 hidden">
            <button
              className="flex items-center justify-center text-white text-sm bg-teal-600 rounded-full focus:ring-2 focus:ring-teal-800
            py-1 px-3 hover:bg-teal-700 transition-colors cursor-pointer shadow-sm shadow-teal-900"
            >
              Sign in
            </button>
            <button
              className="flex items-center justify-center text-zinc-900 text-sm rounded-full shadow-sm shadow-zinc-500 focus:ring-2 focus:ring-zinc-700
            border-1 border-neutral-200  hover:bg-neutral-300 transition-colors cursor-pointer py-1 px-3"
            >
              Sign up
            </button>
          </div>
        </div>
      </section>
      {["/"].includes(pathname) && (
        <section className="flex items-center justify-between gap-5 px-3 xl:px-1 w-full max-w-7xl mx-auto py-5 overflow-x-hidden">
          {TypesOfAcommodation.map((type, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 items-center justify-center pb-2 border-b-2 border-b-neutral-600/0 hover:border-b-neutral-600
            cursor-pointer transition-colors duration-200 text-neutral-500 hover:text-neutral-800"
            >
              <Image
                src={type.image}
                width={500}
                height={500}
                alt={type.name}
                className="w-[34px] h-[34px]"
              />
              <span className="text-xs font-medium whitespace-nowrap">
                {type.name}
              </span>
            </div>
          ))}
        </section>
      )}
      {["/booking"].includes(pathname) && (
        <section className="bg-slate-50 border-y border-y-neutral-200">
          <div className="container mx-auto flex items-center gap-2 px-4 lg:px-6">
            <Link
              href="#"
              className="flex items-center space-x-1 text-teal-600 font-bold cursor-pointer hover:tracking-wide
              hover:text-teal-700 py-3 border-b-2 border-b-teal-600  hover:border-b-teal-700 transition-all "
            >
              <BsArrowLeft size={16} />
              <span className="text-sm">Booking</span>
            </Link>
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
