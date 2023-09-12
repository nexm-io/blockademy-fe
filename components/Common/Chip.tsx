"use client";
import cn from "@/services/cn";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular";
import { TiDelete } from "react-icons/ti";
import React from "react";
import { ArticleIntoData } from "@/redux/features/articles/type";

interface ChipProps {
  label?: "beginner" | "intermediate" | "advanced";
  outline?: boolean;
  avatar?: React.ReactElement;
  deleteIcon?: boolean;
  newbie?: boolean;
  intermediate?: boolean;
  advanced?: boolean;
  disabled?: boolean;
  icon?: React.ReactElement;
  onDelete?: React.EventHandler<any>;
  size?: "small" | "normal";
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
  data?: ArticleIntoData;
  topic?: boolean;
}

const Chip: React.FC<ChipProps> = ({
  label,
  outline,
  avatar,
  className,
  deleteIcon = false,
  disabled = false,
  fullWidth,
  newbie,
  advanced,
  intermediate,
  icon,
  loading = false,
  onDelete,
  size = "normal",
  data,
  topic = false,
}) => {
  const handleDelete = (event: React.MouseEvent) => {
    if (onDelete) {
      onDelete(event);
    }
  };
  if (data) {
    let level: "beginner" | "intermediate" | "advanced" = "beginner";
    if (data.level === "intermediate") {
      level = "intermediate";
    } else if (data.level === "advanced") {
      level = "advanced";
    }
    const topicStyles = topic
      ? {}
      : {
          "!bg-[#02C0A9]/20 !border-[#02C0A9]/20": level === "beginner",
          "!bg-[#37B7FF]/20 !border-[#37B7FF]/20": level === "intermediate",
          "!bg-[#FF1D1D]/20 !border-[#FF1D1D]/20": level === "advanced",
        };
    return (
      <div className="prose">
        <span
          className={cn(
            {
              " !border !bg-transparent": !disabled && outline,
              "opacity-70 !cursor-not-allowed": disabled,
              "px-[18px] py-[5px] text-xs leading-[20px] font-normal":
                size === "small",
              "w-full": fullWidth,
              "text-white-100": topic,
              "text-gray-100": !topic,
              "!bg-[#02C0A9]/20 !border-[#02C0A9]/20": newbie,
              "!bg-[#37B7FF]/20 !border-[#37B7FF]/20": intermediate,
              "!bg-[#FF1D1D]/20 !border-[#FF1D1D]/20": advanced,
            },
            className,
            " relative inline-flex items-center justify-center outline-none px-10 py-3 border-0 border-transparent font-medium rounded-[30px]  transition-all duration-350 ease-in",
            topicStyles
          )}
        >
          <span
            className={cn(
              {
                "!text-[#02C0A9]": level === "beginner",
                "!text-[#37B7FF]": level === "intermediate",
                "!text-[#FF1D1D]": level === "advanced",
              },
              className,
              " absolute left-[7px] top-[4px] inline-flex items-center justify-center text-[20px] mr-2"
            )}
          >
            &#x2022;
          </span>
          {avatar && <span className="mr-2">{avatar}</span>}
          {icon && <span className="mr-2">{icon}</span>}
          {loading ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <SpinnerIos
                className={cn(`animate-spin`, {
                  "!text-white": outline,
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
              "ml-3",
              `${deleteIcon && "flex items-center justify-center"}`
            )}
          >
            <span className="capitalize">{data?.level || "Beginner"}</span>
            {deleteIcon && (
              <span className="ml-2" onClick={handleDelete}>
                <TiDelete className="w-5 h-5" />
              </span>
            )}
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="prose">
        <span
          className={cn(
            {
              " !border !bg-transparent": !disabled && outline,
              "opacity-70 !cursor-not-allowed": disabled,
              "px-[18px] py-[5px] text-xs leading-[20px] font-normal":
                size === "small",
              "w-full": fullWidth,
              "text-white-100": topic,
              "text-gray-100": !topic,
              "!bg-[#02C0A9]/20 !border-[#02C0A9]/20": newbie,
              "!bg-[#37B7FF]/20 !border-[#37B7FF]/20": intermediate,
              "!bg-[#FF1D1D]/20 !border-[#FF1D1D]/20": advanced,
            },
            className,
            " relative inline-flex items-center justify-center outline-none px-10 py-3 border-0 border-transparent font-medium rounded-[30px]  transition-all duration-350 ease-in"
          )}
        >
          <span
            className={cn(
              {
                "!text-[#02C0A9]": newbie,
                "!text-[#37B7FF]": intermediate,
                "!text-[#FF1D1D]": advanced,
              },
              className,
              " absolute left-[7px] top-[4px] inline-flex items-center justify-center text-[20px] mr-2"
            )}
          >
            &#x2022;
          </span>
          {avatar && <span className="mr-2">{avatar}</span>}
          {icon && <span className="mr-2">{icon}</span>}
          {loading ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <SpinnerIos
                className={cn(`animate-spin`, {
                  "!text-white": outline,
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
              "ml-3",
              `${deleteIcon && "flex items-center justify-center"}`
            )}
          >
            <span className="capitalize">{label}</span>
            {deleteIcon && (
              <span className="ml-2" onClick={handleDelete}>
                <TiDelete className="w-5 h-5" />
              </span>
            )}
          </span>
        </span>
      </div>
    );
  }
};

export default Chip;
