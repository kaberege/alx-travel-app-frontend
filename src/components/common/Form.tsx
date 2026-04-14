import React, { ComponentProps, FormEvent } from "react";
import { cn } from "@/lib/utils";

const Form = ({
  className,
  onSubmit,
  children,
  ...props
}: ComponentProps<"form">) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} {...props} className={className}>
      {children}
    </form>
  );
};

const Input = ({ className, ...props }: ComponentProps<"input">) => {
  return (
    <input
      {...props}
      className={cn("w-full bg-transparent outline-none", className)}
    />
  );
};

const Label = ({ children, className, ...props }: ComponentProps<"label">) => {
  return (
    <label {...props} className={cn("text-[10px] font-black", className)}>
      {children}
    </label>
  );
};

export { Form, Input, Label };
