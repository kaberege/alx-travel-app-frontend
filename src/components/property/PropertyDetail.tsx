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
    "border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 focus:ring-2 focus:ring-teal-800";
  const styleGridBtn: string =
    "absolute right-3 bottom-4 font-semibold text-white hover:tracking-wider border-[1px] border-white hover:border-neutral-50 rounded-full px-2 py-1 bg-neutral-400 hover:bg-teal-600 transition-all durarion-300 focus:ring-2 focus:ring-neutral-300";

  return (
    <div className="container mx-auto p-6">
      <section className="flex items-center justify-between">
        <div className="flex sm:hidden items-center justify-center gap-2">
          <Button
            icon="/assets/icons/Linear/Arrows/Arrow Left.png"
            alt="return"
          />
          <span className="text-xs font-medium text-zinc-900">Return</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900">
            {property.name}
          </h1>
          <div className="flex items-center space-x-2 mt-2 text-xs font-medium text-neutral-500">
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Star 2.png"
                width={500}
                height={500}
                alt="star"
                className="w-[15px] h-[15px]"
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
                className="w-[15px] h-[15px]"
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
                className="w-[15px] h-[15px]"
              />
              <span className="">Mainstream</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center gap-2">
          <Button
            label="Save"
            icon="/assets/icons/Fav.png"
            alt="Save"
            styles={style}
          />
          <Button
            label="Share"
            icon="/assets/icons/Share.png"
            alt="Share"
            styles={style}
          />
        </div>
        <div className="flex sm:hidden items-center justify-center gap-2">
          <Button icon="/assets/icons/Fav.png" alt="Save" />
          <Button icon="/assets/icons/Share.png" alt="Share" />
        </div>
      </section>

      {/* Image Grid */}
      <section className="flex flex-col sm:flex-row gap-3 my-4 rounded-lg overflow-hidden h-96 max-sm:relative">
        <div className="w-full h-full">
          <Image
            src={property.image}
            width={500}
            height={500}
            alt={property.name}
            title={property.name}
            className="w-full h-full object-cover cursor-pointer hover:brightness-75 transition-all"
          />
        </div>
        <div className="hidden sm:grid grid-rows-2 gap-3 relative w-full">
          <div className="w-full h-full">
            <Image
              src="/assets/detail-images/image 21.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="w-full h-full object-cover cursor-pointer hover:brightness-75 transition-all"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/detail-images/image 22.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="w-full h-full object-cover cursor-pointer hover:brightness-75 transition-all"
            />
            <Image
              src="/assets/detail-images/image 24.png"
              width={500}
              height={500}
              alt={property.name}
              title={property.name}
              className="w-full h-full object-cover cursor-pointer hover:brightness-75 transition-all"
            />
          </div>
          <Button
            label="Show all photo"
            alt="Show all photo"
            styles={styleGridBtn}
          />
        </div>
        <button
          className="sm:hidden absolute right-3 bottom-4 text-white bg-zinc-950 px-2 py-0.5 rounded-full cursor-pointer
        text-xs font-semibold hover:bg-zinc-800 transition-colors"
        >
          1/12
        </button>
      </section>
      <section>
        <div className="sm:hidden mb-4">
          <h1 className="text-xl font-bold text-zinc-900">{property.name}</h1>
          <div className="flex items-center space-x-2 flex-wrap mt-2 text-[11px] font-medium text-neutral-500 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/assets/icons/Star 2.png"
                width={500}
                height={500}
                alt="star"
                className="w-[15px] h-[15px]"
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
                className="w-[15px] h-[15px]"
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
                className="w-[15px] h-[15px]"
              />
              <span className="">Mainstream</span>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-1 text-zinc-800 text-[11px] sm:text-xs whitespace-nowrap">
          <div
            className="flex items-center justify-center gap-1 border-[1px] border-neutral-400 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer
                   hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600"
          >
            <Image
              src="/assets/icons/bed 1.png"
              width={500}
              height={500}
              alt="Bed"
              className="w-[12px] h-[12px]"
            />
            <div className="flex items-center gap-0.5">
              <span>{property.offers.bed}</span>
              <span>Bedrooms</span>
            </div>
          </div>
          <div
            className="flex items-center justify-center gap-1 border-[1px] border-neutral-400 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer
                   hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600"
          >
            <Image
              src="/assets/icons/bathtub 1.png"
              width={500}
              height={500}
              alt="Shower"
              className="w-[12px] h-[12px]"
            />
            <div className="flex items-center gap-0.5">
              <span>{property.offers.shower}</span>
              <span>Bathroom</span>
            </div>
          </div>
          <div
            className="flex items-center justify-center gap-1 border-[1px] border-neutral-400 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer
                   hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600"
          >
            <Image
              src="/assets/icons/people 1.png"
              width={500}
              height={500}
              alt="Occupants"
              className="w-[12px] h-[12px]"
            />
            <div className="flex items-center gap-0.5">
              <span>{property.offers.occupants}</span>
              <span>Guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <div className="flex sm:space-x-9 sm:justify-between mt-6">
        <div className="pt-5 border-t-[1px] border-neutral-300">
          <section className="pb-4 sm:pb-11 lg:pb-7 border-b-[1px] border-neutral-300">
            <div
              className="flex items-center justify-between text-xs font-semibold text-zinc-600 
              border-b-[1px] border-neutral-300 whitespace-nowrap overflow-x-hidden"
            >
              <div className="flex gap-2 sm:gap-3">
                <h2 className="text-teal-600 border-b-2 border-teal-600 hover:border-teal-600 cursor-pointer pb-1 transition-colors">
                  Description
                </h2>
                <h2 className="hover:text-teal-600 border-b-2 border-teal-600/0 hover:border-teal-600 cursor-pointer pb-1 transition-colors">
                  What we offer
                </h2>
                <h2 className="hover:text-teal-600 border-b-2 border-teal-600/0 hover:border-teal-600 cursor-pointer pb-1 transition-colors">
                  Reviews
                </h2>
                <h2 className="hover:text-teal-600 border-b-2 border-teal-600/0 hover:border-teal-600 cursor-pointer pb-1 transition-colors">
                  About host
                </h2>
              </div>
              <h2 className="hidden lg:block hover:text-teal-600 border-b-2 border-teal-600/0 hover:border-teal-600 cursor-pointer pb-1 transition-colors">
                Published <span>July 01, 2024</span>
              </h2>
            </div>
            <p className="text-zinc-800 text-xs sm:text-sm mt-6 mb-4 sm:pr-12">
              {property.description.title}
            </p>
            <div className="sm:pr-12">
              <div className="mb-3 hidden lg:block">
                <h3 className=" text-sm font-semibold text-zinc-800">
                  The space
                </h3>
                <h4 className="text-sm font-medium text-zinc-800">
                  BEDROOM & BATHROOM
                </h4>
                <p className="text-zinc-800 text-xs">
                  <li className="">{property.description.space}</li>
                </p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm w-full max-w-24 whitespace-nowrap text-teal-600 hover:tracking-wider transition-all duration-300"
              >
                Read More <BiSolidRightArrowAlt size={18} />
              </a>
            </div>
          </section>

          {/* Amenities */}
          <section className="mt-4 pb-7 border-b-[1px] border-neutral-300">
            <h2 className="text-sm sm:text-base font-semibold">
              What this place offers
            </h2>
            <p className="text-zinc-800 text-xs mt-1">
              Each home is fully equipped to meet your needs, with ample space
              and privacy.
            </p>
            <ul className="flex flex-wrap space-x-4 gap-y-4 text-sm text-zinc-800 mt-4 ">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">
                  {amenity}
                </li>
              ))}
            </ul>
          </section>

          {/* Review Section*/}
          <section className="pb-7 border-b-[1px] border-neutral-300 pt-11 mb-9 w-full max-w-xl">
            <h3 className="flex items-center gap-1">
              <Image
                src="/assets/icons/Star 2.png"
                width={500}
                height={500}
                alt="star"
                className="w-[19px] h-[19px]"
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
