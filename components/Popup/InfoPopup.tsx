import { Close } from "@styled-icons/remix-line";
import React, { ReactElement } from "react";
import Button from "../Common/Button";
import cn from "@/services/cn";

const InfoPopup = ({
  title,
  desc,
  onClose,
  children,
  className = "",
}: {
  title: string;
  desc: string;
  onClose: () => void;
  children: ReactElement;
  className?: string;
}) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black-100 opacity-50 z-[998]"
        onClick={onClose}
      ></div>
      <div
        className={`border border-gray-400 md:rounded-3xl rounded-lg px-[42px] fixed z-[999] bg-white-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10`}
      >
        <div
          className="absolute right-5 top-10 cursor-pointer"
          onClick={onClose}
        >
          <Close className="text-blue-100 w-6 h-6 hover:text-blue-300" />
        </div>
        <div
          className={cn(
            `flex flex-col gap-4 items-center justify-center`,
            className
          )}
        >
          <h2 className="text-blue-100 text-xl">{title}</h2>
          <p className="text-gr7y-700 text-center mb-4">{desc}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default InfoPopup;
