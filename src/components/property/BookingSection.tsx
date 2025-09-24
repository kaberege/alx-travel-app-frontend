const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="hidden sm:block bg-white p-6 shadow-md shadow-zinc-700 rounded-lg w-[250px] lg:w-80 h-[410px] md:h-[430px] shrink-0">
      <h3 className="text-base md:text-xl font-semibold text-zinc-950 pb-1 border-b-[1px] border-neutral-300 mb-4">
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
          className="text-sm border p-1 md:p-2 w-full mt-1 text-zinc-600 rounded-md border-zinc-300 outline-teal-600"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="check-out-book" className="text-xs text-zinc-950">
          Check-out
        </label>
        <input
          id="check-out-book"
          type="date"
          className="text-sm border p-1 md:p-2 w-full mt-1 text-zinc-600 border-zinc-300 rounded-md outline-teal-600"
        />
      </div>
      <div className="mt-4 pb-4 border-b-[1px] border-neutral-300">
        <p className="flex items-center justify-between text-sm">
          <span className=" text-zinc-600">$50 x 7 nights</span>
          <span className="text-zinc-950 font-medium">
            <strong>$350</strong>
          </span>
        </p>
        <p className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">Weekly discounts</span>
          <span className=" text-zinc-950 font-medium">
            <strong>-$88</strong>
          </span>
        </p>
        <p className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">Service fee</span>
          <span className="text-zinc-950 font-medium">
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
      <button
        className="text-sm mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 
        transition-colors duration-300 cursor-pointer shadow-md shadow-teal-900 focus:ring-2 focus:ring-teal-800"
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
