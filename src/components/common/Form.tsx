import React, { forwardRef, ComponentPropsWithoutRef, FormEvent } from "react";
import { cn } from "@/lib/utils";

const Form = forwardRef<HTMLFormElement, ComponentPropsWithoutRef<"form">>(
  ({ className, onSubmit, children, ...props }, ref) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (onSubmit) {
        onSubmit(e);
      }
    };

    return (
      <form ref={ref} onSubmit={handleSubmit} {...props} className={className}>
        {children}
      </form>
    );
  },
);

Form.displayName = "Form";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn("w-full bg-transparent outline-none", className)}
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
        className={cn("text-[10px] font-black", className)}
      >
        {children}
      </label>
    );
  },
);

Label.displayName = "Label";

export { Form, Input, Label };
