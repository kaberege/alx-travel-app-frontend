import Image from "next/image";

interface BookingDetailsProps {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetailsProps }> = ({
  bookingDetails,
}) => (
  <section className="w-full shrink-0 rounded-lg bg-white p-3 shadow-md shadow-zinc-700 sm:h-[420px] sm:w-60 sm:p-6 md:w-72 lg:w-90">
    <h2 className="text-sm font-semibold text-zinc-950 lg:text-base">
      Review Order Details
    </h2>
    <div className="mt-4 flex flex-col gap-2">
      <Image
        src="/assets/listing-images/List 1.png"
        width={500}
        height={500}
        alt="Property"
        className="h-40 w-full cursor-pointer rounded-md object-cover transition-all hover:brightness-75"
      />
      <div className="">
        <h3 className="text-sm font-semibold text-zinc-950 lg:text-base">
          {bookingDetails.propertyName}
        </h3>
        <div className="mt-2">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/icons/Star 2.png"
              width={500}
              height={500}
              alt="star"
              className="h-[15px] w-[15px]"
            />
            <p className="text-xs text-gray-500">
              <span className="text-gray-950">4.76</span> (345 reviews)
            </p>
          </div>
          <p className="mt-2 flex gap-1.5 text-[11px] text-gray-700">
            <span className="rounded-sm bg-gray-200 p-0.5">
              {bookingDetails.startDate}
            </span>
            <span className="rounded-sm bg-gray-200 p-0.5">1PM</span>
            <span className="rounded-sm bg-gray-200 p-0.5">
              {bookingDetails.totalNights} Nights
            </span>
          </p>
        </div>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p className="text-sm text-gray-600">Booking fee</p>
        <p className="text-xs text-gray-900">${bookingDetails.bookingFee}.00</p>
      </div>
      <div className="mt-0.5 flex justify-between">
        <p className="text-sm text-gray-600">Subtotal</p>
        <p className="text-xs text-gray-900">${bookingDetails.price}.00</p>
      </div>
      <div className="mt-2 flex justify-between font-semibold">
        <p className="text-sm text-gray-700">Grand Total</p>
        <p className="text-sm text-gray-950">
          ${bookingDetails.bookingFee + bookingDetails.price}.00
        </p>
      </div>
    </div>
  </section>
);

export default OrderSummary;
