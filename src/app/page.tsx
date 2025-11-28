"use client";

import React, { useState } from "react";
import Image from "next/image";
import { propertListingSample, offerIcons } from "@/constants";
import Link from "next/link";
import Button from "@/components/common/Button";
import Pill from "@/components/common/Pill";

export default function Home() {
  const [filter, setFilter] = useState<string>("all");
  return (
    <div className="bg-white px-2 sm:px-3 lg:px-4">
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
          <Button
            onClick={() => setFilter("filter")}
            style={`flex shrink-0 items-center justify-center cursor-pointer rounded-full border ${filter === "filter" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} p-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors sm:hidden`}
          >
            <Image
              src="/assets/icons/Linear/Essentional_UI/Filter.png"
              width={500}
              height={500}
              alt="Filter"
              className="h-4 w-4"
            />
          </Button>
          <Button
            onClick={() => setFilter("all")}
            title="All"
            style={`cursor-pointer rounded-full border ${filter === "all" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} px-2 py-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors`}
          />
          <Button
            onClick={() => setFilter("top-villa")}
            title="Top Villa"
            style={`cursor-pointer rounded-full border ${filter === "top-villa" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} px-2 py-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors`}
          />
          <Button
            onClick={() => setFilter("free-reschedule")}
            title="Free Reschedule"
            style={`cursor-pointer rounded-full border ${filter === "free-reschedule" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} px-2 py-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors`}
          />
          <Button
            onClick={() => setFilter("book-now")}
            title="Book Now, Pay later"
            style={`cursor-pointer rounded-full border ${filter === "book-now" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} px-2 py-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors sm:hidden lg:block`}
          />
          <Button
            onClick={() => setFilter("self-checkin")}
            title="Self Checkin"
            style={`cursor-pointer rounded-full border ${filter === "self-checkin" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} px-2 py-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors sm:hidden lg:block`}
          />
          <Button
            onClick={() => setFilter("instant-book")}
            title="Instant Book"
            style={`cursor-pointer rounded-full border ${filter === "instant-book" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} px-2 py-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors sm:hidden lg:block`}
          />
          <Button
            onClick={() => setFilter("expand")}
            style={`hidden cursor-pointer items-center justify-center rounded-full border ${filter === "expand" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} p-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors sm:flex lg:hidden`}
          >
            <Image
              src="/assets/icons/Linear/Arrows/Alt_Arrow_Down.png"
              width={500}
              height={500}
              alt="Filter"
              className="h-[19px] w-[19px]"
            />
          </Button>
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold text-zinc-900 sm:text-sm">
          <Button
            onClick={() => setFilter("filter")}
            style={`hidden cursor-pointer items-center justify-center gap-1 rounded-full border ${filter === "filter" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} px-2 py-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors sm:flex`}
          >
            <span className="hidden lg:block">Filter</span>
            <Image
              src="/assets/icons/Linear/Essentional_UI/Filter.png"
              width={500}
              height={500}
              alt="Filter"
              className="h-[18px] w-[18px]"
            />
          </Button>
          <Button
            onClick={() => setFilter("sort-by")}
            style={`cursor-pointer rounded-full border ${filter === "sort-by" ? "bg-teal-50 text-teal-600 border-teal-600 shadow-sm shadow-teal-600" : "bg-white border-neutral-400"} px-2 py-1 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 transition-colors`}
          >
            <span className="opacity-50">Sort by: </span>
            <span>Highest Price</span>
          </Button>
        </div>
      </section>
      <section className="relative container mx-auto grid w-full grid-cols-1 gap-x-3 gap-y-8 max-sm:max-w-[390px] sm:grid-cols-2 lg:grid-cols-4">
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
        {propertListingSample?.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <Link className="h-[200px]" href={`property/${item.name}`}>
              <Image
                src={item.image}
                width={500}
                height={500}
                alt={item.name}
                title={item.name}
                className="h-full w-full cursor-pointer rounded-2xl object-cover transition-all hover:brightness-50"
              />
            </Link>
            <div className="flex items-center gap-1 overflow-x-hidden text-[11px] font-medium whitespace-nowrap text-zinc-900">
              {item.category &&
                item.category.map((category, idx) => (
                  <Pill
                    key={idx}
                    title={category}
                    style="bg-zinc-200 hover:bg-teal-100"
                  />
                ))}
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
                <Pill style="gap-1 border-neutral-400 text-[11px] sm:ml-1">
                  {item.offers &&
                    Object.entries(item.offers).map((offer, odex) => (
                      <div
                        key={odex}
                        className="flex items-center justify-center gap-0.5"
                      >
                        <Image
                          src={offerIcons[offer[0]]}
                          width={500}
                          height={500}
                          alt="Bed"
                          className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                        />
                        <span>{offer[1]}</span>
                      </div>
                    ))}
                </Pill>
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
        <Button
          title="Show more"
          style="cursor-pointer rounded-full bg-black px-3 py-1 text-center text-xs font-medium text-white transition-colors hover:bg-slate-700 hover:text-amber-50 focus:ring-2 focus:ring-slate-950 sm:text-sm"
        />
        <p className="text-center text-sm font-medium text-black">
          Click to see more listings
        </p>
      </section>
    </div>
  );
}
