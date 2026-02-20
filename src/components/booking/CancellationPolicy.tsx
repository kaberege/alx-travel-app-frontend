const CancellationPolicy = () => (
  <section className="mt-6 border-t border-b border-t-zinc-300 border-b-zinc-300 pt-5 pb-6 lg:border-b-0 lg:border-b-zinc-300/0 lg:pt-10 lg:pb-0">
    <h2 className="block text-xs font-semibold text-zinc-950 lg:hidden lg:text-sm">
      Cancellation policy
    </h2>
    <p className="mt-2 border-b border-b-zinc-300 pb-4 text-xs text-gray-600">
      <strong>Free cancellation before Aug 23.</strong> Cancel before check-in
      on Aug 24 for a partial refund.
    </p>

    <h2 className="mt-4 text-xs font-semibold text-zinc-950 lg:text-sm">
      Ground Rules
    </h2>
    <p className="mt-3 text-xs text-gray-600">
      We ask every guest to remember a few simple things about what makes a
      great guest.
    </p>
    <ul className="mt-2 ml-3 list-inside list-disc text-xs text-gray-600">
      <li>Follow the house rules</li>
      <li>Treat your Host&apos;s home like your own</li>
    </ul>
    <div className="hidden lg:flex lg:pt-4">
      <div className="w-full border-b border-b-zinc-300"></div>
      <h2 className="shrink-0 text-xs font-semibold text-zinc-950 lg:text-sm">
        Cancellation policy
      </h2>
      <div className="w-3/5 border-b border-b-zinc-300"></div>
    </div>
  </section>
);

export default CancellationPolicy;
