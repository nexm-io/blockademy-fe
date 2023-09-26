import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  register?: any;
  className?: string;
  name: string;
  defaultValue?: string;
  value?: string | number;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  register,
  className,
  name,
  defaultValue,
  value
}) => {
  return (
    <input
      type={type || "text"}
      id={id}
      name={name}
      defaultValue={defaultValue}
      value={value}
      {...register(name)}
      placeholder={placeholder}
      className={`outline-none border-none rounded-md bg-white-100 min-h-[48px] text-black pl-[10px] pr-3 w-full ${className}`}
    />
  );
};

export default Input;
