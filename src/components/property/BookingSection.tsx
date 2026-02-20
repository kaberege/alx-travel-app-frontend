"use client";

import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input, Label } from "../common/Form";
import { type PropertyProps } from "@/interfaces/index";

interface CheckingProps {
  checkin: string;
  checkout: string;
}

interface BookingDatesProps {
  title: string;
  id: keyof CheckingProps;
  type: string;
}

interface BookingServiceProps {
  totalBasePrice: number;
  discount: number;
  serviceFee: number;
  finalTotal: number;
}

const bookingDates: BookingDatesProps[] = [
  { title: "Check-in", id: "checkin", type: "date" },
  { title: " Check-out", id: "checkout", type: "date" },
];

const BookingSection: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const router = useRouter();

  const [checking, setChecking] = useState<CheckingProps>({
    checkin: "",
    checkout: "",
  });
  const [nights, setNights] = useState<number>(0);
  const [fees, setFees] = useState<BookingServiceProps>({
    totalBasePrice: 0,
    discount: 0,
    serviceFee: 0,
    finalTotal: 0,
  });
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const startDate = new Date(checking.checkin).getTime();
    const endDate = new Date(checking.checkout).getTime();

    // Valid if both dates exist & end date is the same or greater than the start date
    if (checking.checkin && checking.checkout && endDate >= startDate) {
      setIsValid(true);

      const diffInDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
      const totalBasePrice =
        endDate === startDate ? property.price : property.price * diffInDays;
      const discount =
        diffInDays > 7
          ? Math.round((totalBasePrice * property.discount) / 100)
          : 0; // 10% off for 7+ days
      const serviceFee = 33; // Charge service fee of $33
      const finalTotal = totalBasePrice - discount + serviceFee;

      setNights(diffInDays);
      setFees({
        totalBasePrice,
        discount,
        serviceFee,
        finalTotal,
      });
    } else {
      setIsValid(false);
      setNights(0);
      setFees({
        totalBasePrice: 0,
        discount: 0,
        serviceFee: 0,
        finalTotal: 0,
      });
    }
  }, [checking, property]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChecking((prev) => ({ ...prev, [name as keyof CheckingProps]: value }));
  };

  const goToBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a query string
    const query = new URLSearchParams({
      propertyID: property.name,
      checkin: checking.checkin,
      checkout: checking.checkout,
      nights: nights.toString(),
      total: fees.finalTotal.toString(),
    }).toString();
    // Navigate to the booking route with the query string appended
    router.push(`/booking?${query}`);
  };

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => goToBooking(e)}
      className="hidden max-h-[414px] w-[250px] shrink-0 rounded-lg bg-white p-6 shadow-md shadow-zinc-700 sm:block md:max-h-[434px] lg:w-80"
    >
      <h3 className="mb-4 border-b border-neutral-300 pb-1 text-base font-semibold text-zinc-950 md:text-xl">
        <data value={property.price}>
          <strong>${property.price}</strong>
          <span className="text-sm text-zinc-600">/night</span>
        </data>
      </h3>
      {bookingDates.map((item, index) => (
        <div key={index} className="mt-4">
          <Label
            htmlFor={item.id}
            title={item.title}
            style="text-xs text-zinc-950"
          />
          <Input
            type="date"
            id={item.id}
            name={item.id}
            value={checking[item.id]}
            min={
              item.id === "checkout"
                ? checking.checkin
                : new Date().toISOString().split("T")[0]
            }
            onChange={(e) => handleInputChange(e)}
            required={true}
            style="mt-1 w-full rounded-md border border-zinc-300 p-1 text-sm text-zinc-600 outline-teal-600 md:p-2"
          />
        </div>
      ))}
      <div className="mt-4 border-b border-neutral-300 pb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">
            ${property.price} x {nights} night{nights > 1 ? "s" : ""}
          </span>
          <data value={fees.totalBasePrice} className="text-zinc-950">
            <strong> {fees.totalBasePrice}</strong>
          </data>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">Weekly discounts (10%)</span>
          <data value={fees.discount} className="text-zinc-950">
            <strong>-${fees.discount}</strong>
          </data>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">Service fee</span>
          <data value={fees.serviceFee} className="text-zinc-950">
            <strong>${fees.serviceFee}</strong>
          </data>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-zinc-900">Total payment:</span>
        <data value={fees.finalTotal} className="text-teal-600">
          <strong>${fees.finalTotal}</strong>
        </data>
      </div>
      {checking.checkin && checking.checkout && !isValid && (
        <p className="mt-1 text-xs font-medium text-red-600">
          Check-out must be after check-in.
        </p>
      )}
      <button
        className={`mt-4 w-full rounded-md ${isValid ? "cursor-pointer bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-800" : "cursor-not-allowed bg-zinc-400 opacity-50"} px-4 py-2 text-sm text-white shadow-md shadow-teal-900 transition-colors duration-300`}
        disabled={!isValid}
      >
        Reserve now
      </button>
    </form>
  );
};

export default BookingSection;
