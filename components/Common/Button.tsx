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
      className={`text-center relative outline-0 border-0 cursor-pointer select-none transition-all rounded-[4px] text-base font-normal flex items-center justify-center min-h-[28px] ${className}`}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
