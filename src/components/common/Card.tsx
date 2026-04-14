import React, { ComponentProps } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// The Container
const Card: React.FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

// The Image
const CardImage: React.FC<
  ComponentProps<"div"> & { src: string; alt: string }
> = ({ src, alt, className, ...props }) => (
  <div className={cn("relative h-48 w-full", className)} {...props}>
    <Image src={src} alt={alt} fill className="object-cover" />
  </div>
);

// The Body/Content
const CardContent: React.FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div className={cn("p-5", className)} {...props} />;

// Header/Footer
const CardTitle: React.FC<ComponentProps<"h3">> = ({ className, ...props }) => (
  <h3 className={cn("text-lg font-bold text-gray-900", className)} {...props} />
);

export { Card, CardImage, CardContent, CardTitle };
