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
  <section className="shrink-0 bg-white p-3 sm:p-6 shadow-md shadow-zinc-700 rounded-lg w-full sm:w-60 md:w-72 lg:w-90 sm:h-[420px]">
    <h2 className="text-zinc-950 text-sm lg:text-base font-semibold">
      Review Order Details
    </h2>
    <div className="flex flex-col gap-2 mt-4">
      <Image
        src="/assets/listing-images/List 1.png"
        width={500}
        height={500}
        alt="Property"
        className="w-full h-40 object-cover rounded-md cursor-pointer hover:brightness-75 transition-all"
      />
      <div className="">
        <h3 className="text-zinc-950 text-sm lg:text-base font-semibold">
          {bookingDetails.propertyName}
        </h3>
        <div className="mt-2">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/icons/Star 2.png"
              width={500}
              height={500}
              alt="star"
              className="w-[15px] h-[15px]"
            />
            <p className="text-xs text-gray-500">
              <span className="text-gray-950">4.76</span> (345 reviews)
            </p>
          </div>
          <p className="flex gap-1.5 text-[11px] text-gray-700 mt-2">
            <span className="bg-gray-200 rounded-sm p-0.5">
              {bookingDetails.startDate}
            </span>
            <span className="bg-gray-200 rounded-sm p-0.5">1PM</span>
            <span className="bg-gray-200 rounded-sm p-0.5">
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
        <p className="text-gray-900 text-xs">${bookingDetails.bookingFee}.00</p>
      </div>
      <div className="flex justify-between mt-0.5">
        <p className="text-sm text-gray-600">Subtotal</p>
        <p className="text-gray-900 text-xs">${bookingDetails.price}.00</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p className="text-sm text-gray-700">Grand Total</p>
        <p className="text-gray-950 text-sm">
          ${bookingDetails.bookingFee + bookingDetails.price}.00
        </p>
      </div>
    </div>
  </section>
);

export default OrderSummary;
