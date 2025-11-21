import React from "react";
import { type ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  title,
  style,
  onClick,
  children,
}) => {
  return (
    <button onClick={onClick} type={type} className={style}>
      {children} {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
