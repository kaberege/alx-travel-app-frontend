"use client";

import { propertListingSample } from "@/constants/index";
import { useParams } from "next/navigation";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id as string);

  const property = propertListingSample.find((item) => item.name === id);

  if (!property)
    return (
      <p className="mt-4 text-center text-sm font-semibold text-red-500">
        Property not found
      </p>
    );

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
