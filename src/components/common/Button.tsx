import React, { forwardRef, ComponentPropsWithoutRef } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>(({ type = "button", className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={`transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
