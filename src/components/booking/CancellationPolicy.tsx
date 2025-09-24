const CancellationPolicy = () => (
  <section
    className="border-t border-t-zinc-300 border-b border-b-zinc-300 lg:border-b-0 lg:border-b-zinc-300/0
  mt-6 pt-5 lg:pt-10 pb-6 lg:pb-0"
  >
    <h2 className="block lg:hidden text-zinc-950 text-xs lg:text-sm font-semibold">
      Cancellation policy
    </h2>
    <p className="mt-2 text-xs text-gray-600 pb-4 border-b border-b-zinc-300">
      <strong>Free cancellation before Aug 23.</strong> Cancel before check-in
      on Aug 24 for a partial refund.
    </p>

    <h2 className="text-zinc-950 text-xs lg:text-sm font-semibold mt-4">
      Ground Rules
    </h2>
    <p className="mt-3 text-xs text-gray-600">
      We ask every guest to remember a few simple things about what makes a
      great guest.
    </p>
    <ul className="mt-2 ml-3 text-xs text-gray-600 list-disc list-inside">
      <li>Follow the house rules</li>
      <li>Treat your Host’s home like your own</li>
    </ul>
    <div className="hidden lg:flex lg:pt-4">
      <div className="w-full border-b border-b-zinc-300"></div>
      <h2 className="text-zinc-950 text-xs lg:text-sm font-semibold shrink-0">
        Cancellation policy
      </h2>
      <div className="w-3/5 border-b border-b-zinc-300"></div>
    </div>
  </section>
);

export default CancellationPolicy;
