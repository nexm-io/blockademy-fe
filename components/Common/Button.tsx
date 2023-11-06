"use client";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular";
import React from "react";

import cn from "@/services/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  outlined?: boolean;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "normal";
  type?: "button" | "submit" | "reset";
  kind?: "primary" | "secondary";
  rounded?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  type = "button",
  size = "normal",
  kind = "primary",
  loading,
  onClick,
  outlined,
  fullWidth,
  rounded,
}) => {
  return (
    <button
      type={type}
      className={cn(
        {
          "!border-blue-100 !text-blue-100 hover:!text-white-100 bg-transparent":
            outlined,
          "hover:bg-blue-100 hover:text-white-100": !disabled && outlined && kind === "primary",
          "hover:bg-blue-300": !disabled && kind === "primary",
          "bg-blue-100 text-white-100": kind === "primary",
          "opacity-70 !cursor-not-allowed": disabled,
          "px-[18px] py-[5px] text-[14px] leading-[20px] font-normal":
            size === "small",
          "rounded-[30px]": rounded,
          "w-full": fullWidth,
          "bg-gray-200 text-[#424242]": kind === "secondary" && !outlined,
          "hover:bg-gray-300 hover:text-white-100": !disabled && kind === "secondary",
        },
        className,
        "relative inline-flex items-center justify-center outline-none px-10 py-3 border border-transparent font-medium rounded transition-all duration-350 ease-in"
      )}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <SpinnerIos
            className={cn(`animate-spin`, {
              "!text-white": outlined,
            })}
            size={20}
          />
        </div>
      ) : null}{" "}
      <div
        className={cn(
          {
            invisible: loading,
          },
          "w-max"
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
