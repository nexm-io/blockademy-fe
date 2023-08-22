import React from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  register: any;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, register }) => {
  return (
    <input
      type={type}
      id={id}
      {...register(id)}
      placeholder={placeholder}
      className="outline-none border-none bg-gray-100 py-4 pl-[20px] pr-3 w-full"
    />
  );
};

export default Input;
