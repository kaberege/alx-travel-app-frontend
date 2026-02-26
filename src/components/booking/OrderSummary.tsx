import Image from "next/image";
import { PropertyProps, BookingDataProps } from "@/interfaces";

const rawDateDisplay = (dateString: string) => {
  // Convert string to Date object
  // Adding 'T00:00:00' ensures the date doesn't shift due to timezone offsets
  const dateObj: Date = new Date(`${dateString}T00:00:00`);

  // Format using toLocaleDateString
  const formattedDate: string = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};

const OrderSummary: React.FC<{
  property: PropertyProps;
  bookingData: BookingDataProps;
}> = ({ property, bookingData }) => {
  return (
    <section className="w-full shrink-0 rounded-lg bg-white p-3 shadow-md shadow-zinc-700 sm:max-h-[420px] sm:w-60 sm:p-6 md:w-72 lg:w-90">
      <h2 className="text-sm font-semibold text-zinc-950 lg:text-base">
        Review Order Details
      </h2>
      <div className="mt-4 flex flex-col gap-2">
        <Image
          src={property.image}
          width={500}
          height={500}
          alt="Property"
          priority
          className="h-40 w-full cursor-pointer rounded-md object-cover transition-all hover:brightness-75"
        />
        <div>
          <h3 className="text-sm font-semibold text-zinc-950 lg:text-base">
            {property.name}
          </h3>
          <div className="mt-2">
            <div className="flex items-center gap-1">
              <Image
                src="/assets/icons/Star_2.png"
                width={500}
                height={500}
                alt="star"
                className="h-[15px] w-[15px]"
              />
              <data value={property.rating} className="text-xs text-gray-500">
                <span className="text-gray-950">{property.rating}</span>
                <span>(345 reviews)</span>
              </data>
            </div>
            <div className="mt-2 flex gap-1.5 text-[11px] text-gray-700">
              <time
                dateTime={rawDateDisplay(bookingData.checkout)}
                className="rounded-sm bg-gray-200 p-0.5"
              >
                {rawDateDisplay(bookingData.checkout)}
              </time>
              <time className="rounded-sm bg-gray-200 p-0.5">1PM</time>
              <data value={3} className="rounded-sm bg-gray-200 p-0.5">
                {bookingData.nights} Night{bookingData.nights > 1 ? "s" : ""}
              </data>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Booking fee</span>
          <data value={33} className="text-xs text-gray-900">
            ${33}.00
          </data>
        </div>
        <div className="mt-0.5 flex justify-between">
          <span className="text-sm text-gray-600">Subtotal</span>
          <data
            value={bookingData.total - 33}
            className="text-xs text-gray-900"
          >
            ${bookingData.total - 33}.00
          </data>
        </div>
        <div className="mt-2 flex justify-between font-semibold">
          <span className="text-sm text-gray-700">Grand Total</span>
          <data value={bookingData.total} className="text-sm text-gray-950">
            ${bookingData.total}.00
          </data>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
