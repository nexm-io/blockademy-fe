import React from "react";

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
      className={`outline-none border-none rounded placeholder-[#9E9E9E] p-2 text-black w-full ${className}`}
      spellCheck={false}
    />
  );
};

export default Input;
