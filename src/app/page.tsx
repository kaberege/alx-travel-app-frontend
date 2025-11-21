import React from "react";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Link from "next/link";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div className="px-2 sm:px-3 lg:px-4">
      <section className='mx-auto flex h-[296px] w-full max-w-7xl items-center justify-center rounded-3xl bg-[url("/assets/hero-section-image/Image_mobile.png")] bg-cover bg-center bg-no-repeat sm:h-[421px] sm:bg-[url("/assets/hero-section-image/Image_desktop.png")] lg:h-[481px]'>
        <div className="text-center text-white">
          <h1 className="text-2xl font-semibold sm:text-6xl lg:text-7xl">
            Find your favorite
            <br />
            place here!
          </h1>
          <h2 className="mt-2 text-xs font-medium sm:text-lg lg:text-2xl">
            The best prices for over 2 million properties worldwide.
          </h2>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 py-5 whitespace-nowrap max-sm:overflow-x-hidden">
        <div className="flex items-center gap-3 text-xs font-semibold text-zinc-900 sm:text-sm">
          <Button style="flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-neutral-300 p-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:shadow-sm hover:shadow-teal-600 sm:hidden">
            <Image
              src="/assets/icons/Linear/Essentional, UI/Filter.png"
              width={500}
              height={500}
              alt="Filter"
              className="h-4 w-4"
            />
          </Button>
          <Button
            title="All"
            style="cursor-pointer rounded-full border-[1px] border-teal-600 bg-teal-50 px-3 py-1 text-teal-600 shadow-sm shadow-teal-600 transition-colors"
          />
          <Button
            title="Top Villa"
            style="cursor-pointer rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600"
          />
          <Button
            title="Free Reschedule"
            style="cursor-pointer rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600"
          />
          <Button
            title="Book Now, Pay later"
            style="cursor-pointer rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 sm:hidden lg:block"
          />
          <Button
            title="Self CheckIn"
            style="cursor-pointer rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 sm:hidden lg:block"
          />
          <Button
            title="Instant Book"
            style="cursor-pointer rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 sm:hidden lg:block"
          />
          <Button style="hidden cursor-pointer items-center justify-center rounded-full border-[1px] border-neutral-400 p-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:shadow-sm hover:shadow-teal-600 sm:flex lg:hidden">
            <Image
              src="/assets/icons/Linear/Arrows/Alt Arrow Down.png"
              width={500}
              height={500}
              alt="Filter"
              className="h-[19px] w-[19px]"
            />
          </Button>
        </div>
        <div className="flex items-center gap-3 text-[13.78px] font-semibold sm:text-sm">
          <Button style="hidden cursor-pointer items-center justify-center gap-1 rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 sm:flex">
            <span className="hidden lg:block">Filter</span>
            <Image
              src="/assets/icons/Linear/Essentional, UI/Filter.png"
              width={500}
              height={500}
              alt="Filter"
              className="h-[18px] w-[18px]"
            />
          </Button>
          <Button style="cursor-pointer rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600">
            <span className="opacity-50">Sort by: </span>
            <span>Highest Price</span>
          </Button>
        </div>
      </section>
      <section className="relative container mx-auto grid grid-cols-1 gap-x-3 gap-y-8 max-sm:max-w-[390px] sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute top-2 -left-1 z-50 flex cursor-pointer items-center gap-1 rounded-tl-full rounded-r-full bg-teal-600 px-2 py-1 shadow-xl shadow-teal-800 transition-colors hover:bg-teal-500">
          <Image
            src="/assets/icons/discount-item.png"
            width={500}
            height={500}
            alt="Discount"
            className="h-3.5 w-3.5"
          />
          <span className="text-sm font-medium text-white">60% Off</span>
        </div>
        {PROPERTYLISTINGSAMPLE?.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="h-[200px]">
              <Link href={`property/${item.name}`}>
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.name}
                  title={item.name}
                  className="h-full w-full cursor-pointer rounded-2xl object-cover transition-all hover:brightness-50"
                />
              </Link>
            </div>
            <div className="flex items-center gap-1 overflow-x-hidden text-[11px] font-medium whitespace-nowrap text-zinc-900">
              <button
                type="button"
                className="cursor-pointer rounded-full bg-zinc-200 px-2 py-1 transition-colors hover:bg-teal-100 hover:text-teal-600"
              >
                Top Villa
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-full bg-zinc-200 px-2 py-1 transition-colors hover:bg-teal-100 hover:text-teal-600"
              >
                Self CheckIn
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-full bg-zinc-200 px-2 py-1 transition-colors hover:bg-teal-100 hover:text-teal-600"
              >
                Free Reschedule
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-zinc-900">
                    {item.name}
                  </h2>
                  <div className="flex items-center justify-center gap-1">
                    <Image
                      src="/assets/icons/Star 2.png"
                      width={500}
                      height={500}
                      alt="star"
                      className="h-[15px] w-[15px]"
                    />
                    <span className="text-sm font-medium text-zinc-900">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-zinc-600">
                  {item.address.state} {item.address.city}{" "}
                  {item.address.country}
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex cursor-pointer items-center gap-1 rounded-full border-[1px] border-neutral-400 px-2 py-1 text-[11px] transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 sm:ml-1">
                  <div className="flex items-center justify-center gap-0.5">
                    <Image
                      src="/assets/icons/bed 1.png"
                      width={500}
                      height={500}
                      alt="Bed"
                      className="h-[13px] w-[13px]"
                    />
                    <span>{item.offers.bed}</span>
                  </div>
                  <div className="flex items-center justify-center gap-0.5">
                    <Image
                      src="/assets/icons/bathtub 1.png"
                      width={500}
                      height={500}
                      alt="Shower"
                      className="h-[13px] w-[13px]"
                    />
                    <span>{item.offers.shower}</span>
                  </div>
                  <div className="flex items-center justify-center gap-0.5">
                    <Image
                      src="/assets/icons/people 1.png"
                      width={500}
                      height={500}
                      alt="Occupants"
                      className="h-[13px] w-[13px]"
                    />
                    <span>{item.offers.occupants}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-zinc-900">
                  ${item.discount ? item.discount : 0}
                  <sub>/n</sub>
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="container mx-auto mt-25 mb-9 flex flex-col items-center justify-center gap-3 sm:mt-30 sm:mb-13 lg:mt-20 lg:mb-8">
        <button className="cursor-pointer rounded-full bg-black px-3 py-1 text-center text-xs font-medium text-white transition-colors hover:bg-slate-700 hover:text-amber-50 focus:ring-2 focus:ring-slate-950 sm:text-sm">
          Show more
        </button>
        <p className="text-center text-sm font-medium text-black">
          Click to see more listings
        </p>
      </section>
    </div>
  );
}
