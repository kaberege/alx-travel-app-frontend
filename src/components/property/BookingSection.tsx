const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="hidden h-[410px] w-[250px] shrink-0 rounded-lg bg-white p-6 shadow-md shadow-zinc-700 sm:block md:h-[430px] lg:w-80">
      <h3 className="mb-4 border-b-[1px] border-neutral-300 pb-1 text-base font-semibold text-zinc-950 md:text-xl">
        <strong>${price}</strong>
        <span className="text-sm text-zinc-600">/night</span>
      </h3>
      <div className="mt-4">
        <label htmlFor="check-in-book" className="text-xs text-zinc-950">
          Check-in
        </label>
        <input
          id="check-in-book"
          type="date"
          className="mt-1 w-full rounded-md border border-zinc-300 p-1 text-sm text-zinc-600 outline-teal-600 md:p-2"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="check-out-book" className="text-xs text-zinc-950">
          Check-out
        </label>
        <input
          id="check-out-book"
          type="date"
          className="mt-1 w-full rounded-md border border-zinc-300 p-1 text-sm text-zinc-600 outline-teal-600 md:p-2"
        />
      </div>
      <div className="mt-4 border-b-[1px] border-neutral-300 pb-4">
        <p className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">$50 x 7 nights</span>
          <span className="font-medium text-zinc-950">
            <strong>$350</strong>
          </span>
        </p>
        <p className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">Weekly discounts</span>
          <span className="font-medium text-zinc-950">
            <strong>-$88</strong>
          </span>
        </p>
        <p className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">Service fee</span>
          <span className="font-medium text-zinc-950">
            <strong>$33</strong>
          </span>
        </p>
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p className="flex items-center justify-between text-sm">
          Total payment:
          <strong className="text-teal-600">${price * 7}</strong>
        </p>
      </div>

      {/* Reserve button */}
      <button className="mt-4 w-full cursor-pointer rounded-md bg-teal-600 px-4 py-2 text-sm text-white shadow-md shadow-teal-900 transition-colors duration-300 hover:bg-teal-700 focus:ring-2 focus:ring-teal-800">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
