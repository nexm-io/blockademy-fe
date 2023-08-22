import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  className?: string;
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type, className }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={` text-center relative outline-none border-none cursor-pointer select-none min-w-[64px] transition-all py-3 px-6 rounded-3xl text-base text-white bg-[#0D0F35] font-normal w-[160px] flex items-center justify-center my-4 mx-auto hover:bg-[#1F37B3] ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
