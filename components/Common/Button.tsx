import React from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  className,
  disabled,
  children,
}) => {
  const classButton = twMerge(
    ` text-center relative outline-0 border-0 select-none transition-all rounded-3xl text-base font-normal flex items-center justify-center min-h-[28px] ${className}`
  );
  return (
    <button type={type || "button"} disabled={disabled} onClick={onClick} className={classButton}>
      {label}
      {children}
    </button>
  );
};

export default Button;
