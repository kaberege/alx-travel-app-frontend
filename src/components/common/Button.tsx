import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Button: React.FC<ComponentProps<"button">> = ({
  type = "button",
  className,
  children,
  ...props
}) => {
  return (
    <button type={type} className={cn("transition-all", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
