"use client";

import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import OrderSummary from "./OrderSummary";
import { useSearchParams } from "next/navigation";
import { PropertyProps, BookingDataProps } from "@/interfaces";
import { propertListingSample } from "@/constants";

/**
 * Validates if a string is a proper ISO date (YYYY-MM-DD).
 * Returns the valid string or a fallback date.
 */
const validateISODate = (dateStr: string | null, fallback: string): string => {
  if (!dateStr) return fallback;

  const date = new Date(dateStr);

  // Check if it's a "Valid Date" object
  // Check if the string matches the YYYY-MM-DD pattern (ISO)
  const isValid = !isNaN(date.getTime()) && /^\d{4}-\d{2}-\d{2}$/.test(dateStr);

  return isValid ? dateStr : fallback;
};

export default function BookingContent() {
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [bookingData, setBookingData] = useState<BookingDataProps>({
    propertyId: "",
    checkin: "",
    checkout: "",
    nights: 0,
    total: 0,
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    const propertyId: string | null = searchParams.get("propertyID");
    const checkin: string | null = searchParams.get("checkin");
    const checkout: string | null = searchParams.get("checkout");
    const nights: string | null = searchParams.get("nights");
    const total: string | null = searchParams.get("total");
    const bookingData = {
      propertyId: propertyId ? propertyId : "",
      checkin: validateISODate(checkin, today),
      checkout: validateISODate(checkout, today),
      nights: isNaN(Number(nights)) ? 0 : Number(nights),
      total: isNaN(Number(total)) ? 0 : Number(total),
    };

    setBookingData(bookingData);
  }, [searchParams]);

  useEffect(() => {
    const bookedProperty: PropertyProps | undefined = propertListingSample.find(
      (item) => item.name === bookingData.propertyId,
    );

    if (bookedProperty) {
      setProperty(bookedProperty);
    } else {
      setProperty(null);
    }
  }, [bookingData]);

  if (!bookingData.propertyId || !property) {
    return (
      <p className="mt-4 text-center text-sm font-semibold text-red-500">
        Property not found
      </p>
    );
  }

  return (
    <div className="mt-4 flex flex-col-reverse gap-6 sm:flex-row">
      <BookingForm bookingData={bookingData} />
      <OrderSummary property={property} bookingData={bookingData} />
    </div>
  );
}
