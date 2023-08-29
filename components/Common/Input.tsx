import React from "react";

interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  register?: any;
  className?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  register,
  className,
  name,
}) => {
  return (
    <input
      type={type || "text"}
      id={id}
      name={name}
      {...register(name)}
      placeholder={placeholder}
      className={`outline-none border-none rounded-md bg-white-100 min-h-[48px] text-black pl-[10px] pr-3 w-full ${className}`}
    />
  );
};

export default Input;
