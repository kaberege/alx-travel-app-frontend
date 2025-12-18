import { type PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Button from "../common/Button";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import BookingSection from "./BookingSection";
import { reviews } from "@/constants";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const style: string =
    "border border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 focus:ring-2 focus:ring-teal-800";
  const styleGridBtn: string =
    "absolute right-3 bottom-4 font-semibold text-white hover:tracking-wider border border-white hover:border-neutral-50 rounded-full px-2 py-1 bg-neutral-400 hover:bg-teal-600 transition-all durarion-300 focus:ring-2 focus:ring-neutral-300";

  return (
    <div className="container mx-auto p-6">
      <section className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2 sm:hidden">
          <Button>
            <Image
              src="/assets/icons/Linear/Arrows/Arrow Left.png"
              width={500}
              height={500}
              alt="return"
            />
          </Button>
          <span className="text-xs font-medium text-zinc-900">Return</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl lg:text-4xl">
            {property.name}
          </h1>
          <div className="mt-2 flex items-center space-x-2 text-xs font-medium text-neutral-500">
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Star 2.png"
                width={500}
                height={500}
                alt="star"
                className="h-[15px] w-[15px]"
              />
              <div className="flex items-center justify-center gap-1">
                <span className="text-zinc-900">{property.rating}</span>
                <span>( 345 reviews )</span>
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
        <div className="hidden items-center justify-center gap-2 sm:flex">
          <Button title="Save" style={style}>
            <Image
              src="/assets/icons/Fav.png"
              width={500}
              height={500}
              alt="Save"
            />
          </Button>
          <Button title="Share" style={style}>
            <Image
              src="/assets/icons/Share.png"
              width={500}
              height={500}
              alt="Share"
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
            />
          </Button>
          <Button>
            <Image
              src="/assets/icons/Share.png"
              width={500}
              height={500}
              alt="Share"
            />
          </Button>
        </div>
      </section>

      {/* Image Grid */}
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
              src="/assets/detail-images/image 21.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="h-full w-full cursor-pointer object-cover transition-all hover:brightness-75"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/detail-images/image 22.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="h-full w-full cursor-pointer object-cover transition-all hover:brightness-75"
            />
            <Image
              src="/assets/detail-images/image 24.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="h-full w-full cursor-pointer object-cover transition-all hover:brightness-75"
            />
          </div>
          <Button title="Show all photo" style={styleGridBtn} />
        </div>
        <button className="absolute right-3 bottom-4 cursor-pointer rounded-full bg-zinc-950 px-2 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 sm:hidden">
          1/12
        </button>
      </section>
      <section>
        <div className="mb-4 sm:hidden">
          <h1 className="text-xl font-bold text-zinc-900">{property.name}</h1>
          <div className="mt-2 flex flex-wrap items-center space-x-2 text-[11px] font-medium whitespace-nowrap text-neutral-500">
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Star 2.png"
                width={500}
                height={500}
                alt="star"
                className="h-[15px] w-[15px]"
              />
              <div className="flex items-center justify-center gap-1">
                <span className="text-zinc-900">{property.rating}</span>
                <span>( 345 reviews )</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Bold/Map & Location/Map Point.png"
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
        <div className="flex flex-wrap items-center gap-1 text-[11px] whitespace-nowrap text-zinc-800 sm:text-xs">
          <div className="flex cursor-pointer items-center justify-center gap-1 rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600">
            <Image
              src="/assets/icons/bed 1.png"
              width={500}
              height={500}
              alt="Bed"
              className="h-[12px] w-[12px]"
            />
            <div className="flex items-center gap-0.5">
              <span>{property.offers.bed}</span>
              <span>Bedrooms</span>
            </div>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1 rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600">
            <Image
              src="/assets/icons/bathtub 1.png"
              width={500}
              height={500}
              alt="Shower"
              className="h-[12px] w-[12px]"
            />
            <div className="flex items-center gap-0.5">
              <span>{property.offers.shower}</span>
              <span>Bathroom</span>
            </div>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1 rounded-full border-[1px] border-neutral-400 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600">
            <Image
              src="/assets/icons/people 1.png"
              width={500}
              height={500}
              alt="Occupants"
              className="h-[12px] w-[12px]"
            />
            <div className="flex items-center gap-0.5">
              <span>{property.offers.occupants}</span>
              <span>Guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <div className="mt-6 flex sm:justify-between sm:space-x-9">
        <div className="border-t-[1px] border-neutral-300 pt-5">
          <section className="border-b-[1px] border-neutral-300 pb-4 sm:pb-11 lg:pb-7">
            <div className="flex items-center justify-between overflow-x-hidden border-b-[1px] border-neutral-300 text-xs font-semibold whitespace-nowrap text-zinc-600">
              <div className="flex gap-2 sm:gap-3">
                <h2 className="cursor-pointer border-b-2 border-teal-600 pb-1 text-teal-600 transition-colors hover:border-teal-600">
                  Description
                </h2>
                <h2 className="cursor-pointer border-b-2 border-teal-600/0 pb-1 transition-colors hover:border-teal-600 hover:text-teal-600">
                  What we offer
                </h2>
                <h2 className="cursor-pointer border-b-2 border-teal-600/0 pb-1 transition-colors hover:border-teal-600 hover:text-teal-600">
                  Reviews
                </h2>
                <h2 className="cursor-pointer border-b-2 border-teal-600/0 pb-1 transition-colors hover:border-teal-600 hover:text-teal-600">
                  About host
                </h2>
              </div>
              <h2 className="hidden cursor-pointer border-b-2 border-teal-600/0 pb-1 transition-colors hover:border-teal-600 hover:text-teal-600 lg:block">
                Published <span>July 01, 2024</span>
              </h2>
            </div>
            <p className="mt-6 mb-4 text-xs text-zinc-800 sm:pr-12 sm:text-sm">
              {property.description.title}
            </p>
            <div className="sm:pr-12">
              <div className="mb-3 hidden lg:block">
                <h3 className="text-sm font-semibold text-zinc-800">
                  The space
                </h3>
                <h4 className="text-sm font-medium text-zinc-800">
                  BEDROOM & BATHROOM
                </h4>
                <p className="text-xs text-zinc-800">
                  <li className="">{property.description.space}</li>
                </p>
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

          {/* Amenities */}
          <section className="mt-4 border-b-[1px] border-neutral-300 pb-7">
            <h2 className="text-sm font-semibold sm:text-base">
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

          {/* Review Section*/}
          <section className="mb-9 w-full max-w-xl border-b-[1px] border-neutral-300 pt-11 pb-7">
            <h3 className="flex items-center gap-1">
              <Image
                src="/assets/icons/Star 2.png"
                width={500}
                height={500}
                alt="star"
                className="h-[19px] w-[19px]"
              />
              <div className="flex items-center justify-center gap-1 text-base font-semibold">
                <span className="text-zinc-900">{property.rating}</span>
                <span className="text-zinc-500">( 345 reviews )</span>
              </div>
            </h3>
            <ReviewSection reviews={reviews} />
          </section>
        </div>

        {/*Booking Section */}
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
