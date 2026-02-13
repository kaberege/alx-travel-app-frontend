import { type PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Button from "../common/Button";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import Pill from "../common/Pill";
import { reviews, offerIcons, offerNames, propertyDetails } from "@/constants";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [detail, setDetail] = useState<string>("title");

  return (
    <div className="container mx-auto p-6">
      <section className="flex items-center justify-between">
        <Button
          title="Return"
          style="flex items-center gap-2 cursor-pointer text-xs font-medium text-zinc-950 hover:text-zinc-700 transition-colors sm:hidden"
        >
          <Image
            src="/assets/icons/Linear/Arrows/Arrow_Left.png"
            width={500}
            height={500}
            alt="return"
            className="h-3 w-3"
          />
        </Button>
        <div className="hidden sm:block">
          <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl lg:text-4xl">
            {property.name}
          </h1>
          <div className="mt-2 flex items-center space-x-2 text-xs font-medium text-neutral-500">
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Star_2.png"
                width={500}
                height={500}
                alt="star"
                className="h-[15px] w-[15px]"
              />
              <div className="flex items-center justify-center gap-1">
                <data value={property.rating} className="text-zinc-900">
                  {property.rating}
                </data>
                <data value={345}>(345 reviews)</data>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Bold/maplocation/map-location-point.png"
                width={500}
                height={500}
                alt="Map Location"
                className="h-[15px] w-[15px]"
              />
              <span>
                {property.address.state}, {property.address.city},{" "}
                {property.address.country}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/profile1.png"
                width={500}
                height={500}
                alt="Profile"
                className="h-[15px] w-[15px]"
              />
              <span>Mainstream</span>
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-center gap-2 sm:flex">
          <Button
            title="Save"
            style="flex items-center text-xs space-x-1 cursor-pointer text-zinc-900 border border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 focus:ring-2 focus:ring-teal-800"
          >
            <Image
              src="/assets/icons/Fav.png"
              width={500}
              height={500}
              alt="Save"
              className="h-3 w-3"
            />
          </Button>
          <Button
            title="Share"
            style="flex items-center text-xs space-x-1 cursor-pointer text-zinc-900 border border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 focus:ring-2 focus:ring-teal-800"
          >
            <Image
              src="/assets/icons/Share.png"
              width={500}
              height={500}
              alt="Share"
              className="h-3 w-3"
            />
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 sm:hidden">
          <Button>
            <Image
              src="/assets/icons/Fav.png"
              width={500}
              height={500}
              alt="Save"
              className="h-3 w-3"
            />
          </Button>
          <Button>
            <Image
              src="/assets/icons/Share.png"
              width={500}
              height={500}
              alt="Share"
              className="h-3 w-3"
            />
          </Button>
        </div>
      </section>
      <section className="my-4 flex h-96 flex-col gap-3 overflow-hidden rounded-lg max-sm:relative sm:flex-row">
        <div className="h-full w-full">
          <Image
            src={property.image}
            width={500}
            height={500}
            alt={property.name}
            title={property.name}
            className="h-full w-full cursor-pointer object-cover transition-all hover:brightness-75"
          />
        </div>
        <div className="relative hidden w-full grid-rows-2 gap-3 sm:grid">
          <div className="h-full w-full">
            <Image
              src="/assets/detail-images/image_21.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="h-full w-full cursor-pointer object-cover transition-all hover:brightness-75"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/detail-images/image_22.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="h-full w-full cursor-pointer object-cover transition-all hover:brightness-75"
            />
            <Image
              src="/assets/detail-images/image_24.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="h-full w-full cursor-pointer object-cover transition-all hover:brightness-75"
            />
          </div>
          <Button
            title="Show all photo"
            style="absolute right-3 bottom-4 font-semibold text-white hover:tracking-wider border border-white hover:border-neutral-50 rounded-full px-2 py-1 bg-neutral-400 hover:bg-teal-600 transition-all durarion-300 focus:ring-2 focus:ring-neutral-300"
          />
        </div>
        <Button
          title="1/12"
          style="absolute right-3 bottom-4 cursor-pointer rounded-full bg-zinc-950 px-2 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 sm:hidden"
        ></Button>
      </section>
      <section>
        <div className="mb-4 sm:hidden">
          <h1 className="text-xl font-bold text-zinc-900">{property.name}</h1>
          <div className="mt-2 flex flex-wrap items-center space-x-2 text-[11px] font-medium whitespace-nowrap text-neutral-500">
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Star_2.png"
                width={500}
                height={500}
                alt="star"
                className="h-[15px] w-[15px]"
              />
              <div className="flex items-center justify-center gap-1">
                <data value={property.rating} className="text-zinc-900">
                  {property.rating}
                </data>
                <data value={345}>(345 reviews)</data>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Bold/maplocation/map-location-point.png"
                width={500}
                height={500}
                alt="Map Location"
                className="h-[15px] w-[15px]"
              />
              <span>
                {property.address.state}, {property.address.city},{" "}
                {property.address.country}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/profile1.png"
                width={500}
                height={500}
                alt="Profile"
                className="h-[15px] w-[15px]"
              />
              <span className="">Mainstream</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {Object.entries(property.offers).map((offer, index) => (
            <Pill
              key={index}
              style="gap-1 border-neutral-400 text-[11px] whitespace-nowrap text-zinc-800 sm:text-xs"
            >
              <Image
                src={offerIcons[offer[0]]}
                width={500}
                height={500}
                alt={offer[0]}
                className="h-3 w-3"
              />
              <data value={offer[1]}>
                {offer[1]} {offerNames[offer[0]]}
              </data>
            </Pill>
          ))}
        </div>
      </section>
      <div className="mt-6 flex sm:justify-between sm:space-x-9">
        <div className="grow border-t border-neutral-300 pt-5">
          <section className="border-b border-neutral-300 pb-4 sm:pb-11 lg:pb-7">
            <div className="flex items-center justify-between overflow-x-hidden border-b border-neutral-300 text-xs font-semibold whitespace-nowrap text-zinc-600">
              <div className="flex gap-2 sm:gap-3">
                {Object.entries(propertyDetails).map((item, index) => (
                  <h2
                    key={index}
                    onClick={() => setDetail(item[0])}
                    className={` ${detail === item[0] ? "border-teal-600 text-teal-600" : "border-teal-600/0"} cursor-pointer border-b-2 pb-1 transition-colors hover:border-teal-600 hover:text-teal-600`}
                  >
                    {item[1]}
                  </h2>
                ))}
              </div>
              <h2 className="hidden cursor-pointer border-b-2 border-teal-600/0 pb-1 transition-colors hover:border-teal-600 hover:text-teal-600 lg:block">
                Published <time dateTime="2024-07-01">July 01, 2024</time>
              </h2>
            </div>
            {property.description[detail] ? (
              <p className="mt-6 mb-4 text-xs text-zinc-800 sm:pr-12 sm:text-sm">
                {property.description[detail]}
              </p>
            ) : (
              <p className="mt-6 mb-4 text-xs text-zinc-600 sm:pr-12 sm:text-sm">
                No detail found
              </p>
            )}
            <div className="sm:pr-12">
              <div className="mb-3 hidden lg:block">
                <h3 className="text-sm font-semibold text-zinc-800">
                  The space
                </h3>
                <h4 className="my-0.5 text-sm font-medium text-zinc-800">
                  BEDROOM & BATHROOM
                </h4>
                <ul className="text-xs text-zinc-800">
                  <li className="ml-4 list-disc">
                    {property.description.space}
                  </li>
                </ul>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-24 items-center text-sm whitespace-nowrap text-teal-600 transition-all duration-300 hover:tracking-wider"
              >
                Read More <BiSolidRightArrowAlt size={18} />
              </a>
            </div>
          </section>
          <section className="mt-4 border-b border-neutral-300 pb-7">
            <h2 className="text-sm font-semibold text-black sm:text-base">
              What this place offers
            </h2>
            <p className="mt-1 text-xs text-zinc-800">
              Each home is fully equipped to meet your needs, with ample space
              and privacy.
            </p>
            <ul className="mt-4 flex flex-wrap space-x-4 gap-y-4 text-sm text-zinc-800">
              {property.category.map((amenity, index) => (
                <li key={index} className="rounded-md bg-gray-200 p-2">
                  {amenity}
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-9 w-full max-w-xl border-b border-neutral-300 pt-11 pb-7">
            <h3 className="flex items-center gap-1">
              <Image
                src="/assets/icons/Star_2.png"
                width={500}
                height={500}
                alt="star"
                className="h-[19px] w-[19px]"
              />
              <div className="flex items-center justify-center gap-1 text-base font-semibold">
                <data value={property.rating} className="text-zinc-900">
                  {property.rating}
                </data>
                <data value={345} className="text-zinc-500">
                  ( 345 reviews )
                </data>
              </div>
            </h3>
            <ReviewSection reviews={reviews} />
          </section>
        </div>
        <BookingSection property={property} />
      </div>
    </div>
  );
};

export default PropertyDetail;
