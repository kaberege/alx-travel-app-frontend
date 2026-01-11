import { useRouter } from "next/navigation";
import { Input, Label } from "../common/Form";
import Button from "../common/Button";

interface BookingDatesProps {
  title: string;
  id: string;
  type: string;
}

interface BookingChargesProps {
  title: string;
  value: string;
}

const bookingDates: BookingDatesProps[] = [
  { title: "Check-in", id: "check-in-book", type: "date" },
  { title: " Check-out", id: "check-out-book", type: "date" },
];

const bookingCharges: BookingChargesProps[] = [
  { title: "$50 x 7 nights", value: "$350" },
  { title: "Weekly discounts", value: "-$88" },
  { title: "Service fee", value: "$33" },
];

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const router = useRouter();
  return (
    <div className="hidden h-[410px] w-[250px] shrink-0 rounded-lg bg-white p-6 shadow-md shadow-zinc-700 sm:block md:h-[430px] lg:w-80">
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
      <Button
        onClick={() => router.push("/booking")}
        title="Reserve now"
        style="mt-4 w-full cursor-pointer rounded-md bg-teal-600 px-4 py-2 text-sm text-white shadow-md shadow-teal-900 transition-colors duration-300 hover:bg-teal-700 focus:ring-2 focus:ring-teal-800"
      />
    </div>
  );
};

export default BookingSection;
