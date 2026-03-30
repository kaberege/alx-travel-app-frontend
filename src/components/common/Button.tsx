import React, { forwardRef, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>(({ type = "button", className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn("transition-all", className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
