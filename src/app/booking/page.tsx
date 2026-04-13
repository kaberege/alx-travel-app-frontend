import { Suspense } from "react";
import BookingContent from "@/components/booking/BookingContent";

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="animate-pulse text-gray-500">
            Loading booking details...
          </p>
        </div>
      }
    >
      <div className="container mx-auto px-2 pb-10 sm:px-6 sm:pb-14">
        <BookingContent />
      </div>
    </Suspense>
  );
}
