import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Button = ({
  type = "button",
  className,
  children,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button type={type} className={cn("transition-all", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
