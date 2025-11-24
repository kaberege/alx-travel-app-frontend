"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { typesOfAcommodation } from "@/constants";
import { usePathname } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../common/Button";
import { Input, Label } from "../common/Form";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <section className="bg-teal-600 px-2 pt-5 pb-1 sm:pt-1">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/assets/icons/Linear/School/case-minimalistic.png"
            width={500}
            height={500}
            alt="Email box"
            title="Email box"
            className="h-4 w-4 cursor-pointer"
          />
          <p className="text-[11px] font-semibold text-white sm:text-xs">
            Overseas trip? Get the latest information on travel guides
          </p>
          <Button
            title="More Info"
            style="cursor-pointer rounded-full bg-black px-1.5 py-0.5 text-center text-[11px] font-semibold whitespace-nowrap text-white transition-all hover:bg-slate-700 hover:text-amber-50 focus:ring-2 focus:ring-slate-950"
          />
        </div>
      </section>
      <section className="overflow-hidden border-b border-b-neutral-300 bg-white py-3">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between bg-white px-2 sm:flex-row sm:px-4 xl:px-1">
          <div className="flex w-full items-center justify-between pb-4 sm:hidden">
            <Image
              src="/kgn_logo.jpg"
              width={500}
              height={500}
              alt="kgn logo"
              title="kgn logo"
              className="h-7 w-7 cursor-pointer md:h-10 md:w-10"
            />
            <Button style="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600">
              <Image
                src="/assets/icons/profile2.png"
                width={500}
                height={500}
                alt="profile"
                className="h-6 w-6 cursor-pointer"
              />
            </Button>
          </div>
          <Image
            src="/kgn_logo.jpg"
            width={500}
            height={500}
            alt="kgn logo"
            title="kgn logo"
            className="hidden h-7 w-7 cursor-pointer sm:block md:h-10 md:w-10"
          />
          <div className="rounded-full border border-neutral-300 py-1 pr-1 pl-4">
            <form className="flex items-center">
              <div className="sm:hidden">
                <p className="text-[11px] font-semibold">Where to</p>
                <div className="flex items-center gap-1">
                  <Input
                    type="search"
                    name="location"
                    id="locations"
                    style="w-3/5 text-[10px] text-neutral-500 outline-none"
                    placeholder="Location"
                  />
                  <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-500"></span>
                  <Input
                    type="date"
                    name="check-out"
                    id="check-outs"
                    style="w-1/5 text-[10px] text-neutral-500 outline-none"
                    placeholder="Date"
                  />
                  <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-500"></span>
                  <Input
                    type="search"
                    name="people"
                    id="person"
                    style="mr-1 w-1/5 text-[10px] text-neutral-500 outline-none"
                    placeholder="Add guest"
                  />
                </div>
              </div>
              <div className="hidden w-full grid-cols-5 sm:grid sm:max-w-md lg:max-w-2xl">
                <div className="col-span-2 flex-col border-r border-neutral-300 pr-2 sm:flex">
                  <Label
                    htmlFor="location"
                    title="Location"
                    style="text-xs font-medium text-zinc-900"
                  />
                  <Input
                    type="search"
                    name="location"
                    id="location"
                    style="text-[10px] text-neutral-500 outline-none"
                    placeholder="Search for destination"
                  />
                </div>
                <div className="flex flex-col border-r border-neutral-300 px-2">
                  <Label
                    htmlFor="check-in"
                    title="Check in"
                    style="text-xs font-medium text-zinc-900"
                  />

                  <Input
                    type="date"
                    name="check-in"
                    id="check-in"
                    style="text-[10px] text-neutral-500 outline-none"
                    placeholder="Add date"
                  />
                </div>
                <div className="flex flex-col border-r border-neutral-300 px-2">
                  <Label
                    htmlFor="check-out"
                    title=" Check out"
                    style="text-xs font-medium text-zinc-900"
                  />
                  <Input
                    type="date"
                    name="check-out"
                    id="check-out"
                    style="text-[10px] text-neutral-500 outline-none"
                    placeholder="Add date"
                  />
                </div>
                <div className="flex flex-col pl-2">
                  <Label
                    htmlFor="people"
                    title=" People"
                    style="text-xs font-medium text-zinc-900"
                  />
                  <Input
                    type="search"
                    name="people"
                    id="people"
                    style="text-[10px] text-neutral-500 outline-none"
                    placeholder="Add guest"
                  />
                </div>
              </div>
              <Button style="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-amber-500 transition-colors hover:bg-amber-400 sm:h-8 sm:w-8">
                <Image
                  src="/assets/icons/Linear/Search/magnifers.png"
                  width={500}
                  height={500}
                  alt="Search"
                  className="h-4.5 w-4.5 shrink-0 sm:h-5 sm:w-5"
                />
              </Button>
            </form>
          </div>
          <Button style="hidden h-7 w-7 items-center justify-center rounded-full bg-teal-600 sm:flex lg:hidden">
            <Image
              src="/assets/icons/profile2.png"
              width={500}
              height={500}
              alt="profile"
              className="h-6 w-6 cursor-pointer"
            />
          </Button>
          <div className="hidden gap-2 lg:flex">
            <Button
              title="Sign in"
              style="flex cursor-pointer items-center justify-center rounded-full bg-teal-600 px-3 py-1 text-sm text-white shadow-sm shadow-teal-900 transition-colors hover:bg-teal-700 focus:ring-2 focus:ring-teal-800"
            />
            <Button
              title="Sign up"
              style="flex cursor-pointer items-center justify-center rounded-full border-1 border-neutral-200 px-3 py-1 text-sm text-zinc-900 shadow-sm shadow-zinc-500 transition-colors hover:bg-neutral-300 focus:ring-2 focus:ring-zinc-700"
            />
          </div>
        </div>
      </section>
      {["/"].includes(pathname) && (
        <section className="mx-auto my-5 flex w-full max-w-7xl items-center justify-between gap-5 overflow-x-auto px-3 xl:px-1">
          {typesOfAcommodation.map((type, index) => (
            <Button
              key={index}
              style="flex cursor-pointer flex-col items-center justify-center gap-1 border-b-2 border-b-neutral-600/0 pb-2 text-[11px] font-medium whitespace-nowrap text-neutral-500 transition-colors duration-200 hover:border-b-neutral-600 hover:text-neutral-800 sm:text-xs"
              title={type.name}
            >
              <Image
                src={type.image}
                width={500}
                height={500}
                alt={type.name}
                className="h-6 w-6 sm:h-7 sm:w-7"
              />
            </Button>
          ))}
        </section>
      )}
      {["/booking"].includes(pathname) && (
        <section className="border-y border-y-neutral-200 bg-slate-50">
          <div className="container mx-auto flex items-center gap-2 px-4 lg:px-6">
            <Link
              href="#"
              className="flex cursor-pointer items-center space-x-1 border-b-2 border-b-teal-600 py-3 font-bold text-teal-600 transition-all hover:border-b-teal-700 hover:tracking-wide hover:text-teal-700"
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
