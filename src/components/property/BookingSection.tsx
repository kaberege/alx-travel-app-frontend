"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Label } from "../common/Form";

interface CheckingProps {
  checkin: string;
  checkout: string;
}

interface BookingDatesProps {
  title: string;
  id: keyof CheckingProps;
  type: string;
}

interface BookingChargesProps {
  title: string;
  value: string;
}

const bookingDates: BookingDatesProps[] = [
  { title: "Check-in", id: "checkin", type: "date" },
  { title: " Check-out", id: "checkout", type: "date" },
];

const bookingCharges: BookingChargesProps[] = [
  { title: "$50 x 7 nights", value: "$350" },
  { title: "Weekly discounts", value: "-$88" },
  { title: "Service fee", value: "$33" },
];

const BookingSection: React.FC<{ price: number; id: string }> = ({
  price,
  id,
}) => {
  const router = useRouter();

  const [checking, setChecking] = useState<CheckingProps>({
    checkin: "",
    checkout: "",
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChecking((prev) => ({ ...prev, [name as keyof CheckingProps]: value }));
  };

  const goToBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checking.checkin === "" || checking.checkout === "") {
      setError("Dates can not be empty!");
      return;
    }

    const startDate = new Date(checking.checkin).getTime();
    const endDate = new Date(checking.checkout).getTime();

    if (startDate > endDate) {
      setError("Start date can not be greater than end date!");
      return;
    }

    // Create a query string
    const query = new URLSearchParams({ propertyID: id }).toString();
    // Navigate to the booking route with the query string appended
    router.push(`/booking?${query}`);
  };

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => goToBooking(e)}
      className="hidden max-h-[414px] w-[250px] shrink-0 rounded-lg bg-white p-6 shadow-md shadow-zinc-700 sm:block md:max-h-[434px] lg:w-80"
    >
      <h3 className="mb-4 border-b border-neutral-300 pb-1 text-base font-semibold text-zinc-950 md:text-xl">
        <data value={price}>
          <strong>${price}</strong>
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
            onChange={(e) => handleInputChange(e)}
            style="mt-1 w-full rounded-md border border-zinc-300 p-1 text-sm text-zinc-600 outline-teal-600 md:p-2"
          />
        </div>
      ))}
      <div className="mt-4 border-b border-neutral-300 pb-4">
        {bookingCharges.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-zinc-600">{item.title}</span>
            <data value={item.value} className="text-zinc-950">
              <strong> {item.value}</strong>
            </data>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-zinc-900">Total payment:</span>
        <data value={price * 7} className="text-teal-600">
          <strong>${price * 7}</strong>
        </data>
      </div>
      <button className="mt-4 w-full cursor-pointer rounded-md bg-teal-600 px-4 py-2 text-sm text-white shadow-md shadow-teal-900 transition-colors duration-300 hover:bg-teal-700 focus:ring-2 focus:ring-teal-800">
        Reserve now
      </button>
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </form>
  );
};

export default BookingSection;
