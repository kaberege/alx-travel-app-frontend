import React, { ComponentProps, FormEvent } from "react";
import { cn } from "@/lib/utils";

const Form: React.FC<ComponentProps<"form">> = ({
  className,
  onSubmit,
  children,
  ...props
}) => {
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

const Input: React.FC<ComponentProps<"input">> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={cn("w-full bg-transparent outline-none", className)}
    />
  );
};

const Label: React.FC<ComponentProps<"label">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <label {...props} className={cn("text-[10px] font-black", className)}>
      {children}
    </label>
  );
};

export { Form, Input, Label };
