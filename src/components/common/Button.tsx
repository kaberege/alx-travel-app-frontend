import React from "react";
import Image from "next/image";
import { type ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  styles,
  icon,
  alt,
  label,
  onClick,
  type = "button",
  imageStyles = "w-[15px] h-[15px]",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center gap-1 text-xs cursor-pointer ${styles}`}
    >
      {icon && alt && (
        <Image
          src={icon}
          width={500}
          height={500}
          alt={alt}
          className={imageStyles}
        />
      )}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
