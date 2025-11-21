import React from "react";
import type { LabelProps, InputProps } from "@/interfaces";

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  style,
  placeholder,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      className={style}
      placeholder={placeholder}
    />
  );
};

const Label: React.FC<LabelProps> = ({ htmlFor, title, style }) => {
  return (
    <label htmlFor={htmlFor} className={style}>
      {title}
    </label>
  );
};

export { Input, Label };
