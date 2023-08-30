import cn from "@/services/cn";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular";
import { TiDelete } from "react-icons/ti";
import React from "react";

interface ChipProps {
  label: string;
  variant?: "outlined" | "filled";
  onClick?: () => void;
  avatar?: React.ReactElement;
  deleteIcon?: boolean;
  disabled?: boolean;
  icon?: React.ReactElement;
  onDelete?: React.EventHandler<any>;
  size?: "small" | "normal";
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  rounded?: boolean;
}

const Chip: React.FC<ChipProps> = ({
  label,
  variant = "filled",
  avatar,
  className,
  deleteIcon = false,
  disabled = false,
  fullWidth,
  icon,
  loading = false,
  onClick,
  onDelete,
  rounded = false,
  size = "normal",
  type = "button",
}) => {
  const handleDelete = (event: React.MouseEvent) => {
    if (onDelete) {
      onDelete(event);
    }
  };

  return (
    <div className="prose">
      <button
        type={type}
        className={cn(
          {
            "btn__contain-shadow": !disabled && variant === "filled",
            "btn__outline-shadow !border-blue-100 !text-blue-100 hover:!text-white-100 bg-transparent":
              !disabled && variant === "outlined",
            "opacity-70 !cursor-not-allowed": disabled,
            "px-[18px] py-[5px] text-[14px] leading-[20px] font-normal":
              size === "small",
            "rounded-[30px]": rounded,
            "w-full": fullWidth,
          },
          className,
          "relative inline-flex items-center justify-center outline-none px-10 py-3 border border-transparent text-white-100 font-medium rounded bg-blue-100 transition-all duration-350 ease-in"
        )}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {avatar && <span className="mr-2">{avatar}</span>}
        {icon && <span className="mr-2">{icon}</span>}
        {loading ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SpinnerIos
              className={cn(`animate-spin`, {
                "!text-white": variant === "outlined",
              })}
              size={20}
            />
          </div>
        ) : null}{" "}
        <span
          className={cn(
            {
              invisible: loading,
            },

            `${deleteIcon && "flex items-center justify-center"}`
          )}
        >
          {label}{" "}
          {deleteIcon && (
            <span className="ml-2" onClick={handleDelete}>
              <TiDelete className="w-5 h-5" />
            </span>
          )}
        </span>
      </button>
    </div>
  );
};

export default Chip;
