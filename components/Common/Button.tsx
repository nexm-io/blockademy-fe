import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
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
      className={` text-center relative outline-none border-none cursor-pointer select-none transition-all rounded-3xl text-base font-normal flex items-center justify-center min-h-[28px]  ${className}`}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
