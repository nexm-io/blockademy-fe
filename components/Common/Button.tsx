import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  type: "button" | "submit" | "reset";
  className?: string;
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  className,
  children,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={` text-center relative outline-none border-none cursor-pointer select-none min-w-[64px] transition-all py-3 px-6 rounded-3xl text-base text-white  font-normal w-[160px] flex items-center justify-center min-h-[48px] mx-auto  ${className}`}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
