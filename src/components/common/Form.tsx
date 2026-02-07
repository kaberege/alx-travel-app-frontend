import React from "react";
import type { LabelProps, InputProps } from "@/interfaces";

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  value,
  style,
  placeholder,
  onChange,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      className={style}
      placeholder={placeholder}
      onChange={onChange}
      required
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
