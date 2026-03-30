import React, { forwardRef, ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// The Container
const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";

// The Image
const CardImage = ({
  src,
  alt,
  className,
  ...props
}: ComponentPropsWithoutRef<"div"> & { src: string; alt: string }) => (
  <div className={cn("relative h-48 w-full", className)} {...props}>
    <Image src={src} alt={alt} fill className="object-cover" />
  </div>
);

// The Body/Content
const CardContent = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => (
  <div className={cn("p-5", className)} {...props} />
);

// Header/Footer
const CardTitle = ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
  <h3 className={cn("text-lg font-bold text-gray-900", className)} {...props} />
);

export { Card, CardImage, CardContent, CardTitle };
