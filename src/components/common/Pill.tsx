import React, { ComponentPropsWithoutRef } from "react";

const Pill: React.FC<ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`flex cursor-pointer items-center justify-center gap-0.5 rounded-full border border-neutral-300 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Pill;
