import React, { forwardRef, ComponentPropsWithoutRef } from "react";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`w-full bg-transparent outline-none ${className}`}
      />
    );
  },
);

Input.displayName = "Input";

const Label = forwardRef<HTMLLabelElement, ComponentPropsWithoutRef<"label">>(
  ({ children, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        {...props}
        className={`text-[10px] font-black ${className}`}
      >
        {children}
      </label>
    );
  },
);

Label.displayName = "Label";

export { Input, Label };
