"use client";

import { useEffect, useState } from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { useSearchParams } from "next/navigation";
import { PropertyProps } from "@/interfaces";
import { propertListingSample } from "@/constants";

export default function BookingPage() {
  const [itemID, setItemID] = useState<string | null>(null);
  const [property, setProperty] = useState<PropertyProps | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const propertyID: string | null = searchParams.get("propertyID");
    setItemID(propertyID);
  }, []);

  useEffect(() => {
    const bookedProperty: PropertyProps | undefined = propertListingSample.find(
      (item) => item.name === itemID,
    );

    if (bookedProperty) {
      setProperty(bookedProperty);
    } else {
      setProperty(null);
    }
  }, [itemID]);

  if (!itemID || !property) {
    return (
      <p className="mt-4 text-center text-sm font-semibold text-red-500">
        Property not found
      </p>
    );
  }

  return (
    <div className="container mx-auto px-2 pb-10 sm:px-6 sm:pb-14">
      <div className="mt-4 flex flex-col-reverse gap-6 sm:flex-row">
        <BookingForm />
        <OrderSummary property={property} />
      </div>
    </div>
  );
}
