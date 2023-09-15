import React, { useState } from "react";
import Button from "../Common/Button";
import { Close } from "@styled-icons/remix-line";

interface PopupProps {
  title?: string;
  description?: string;
  onClose: () => void;
  handleClaim?: () => void;
}

const Popup: React.FC<PopupProps> = ({
  title,
  description,
  onClose,
  handleClaim,
}) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black-100 opacity-50 z-[998]"
        onClick={onClose}
      ></div>
      <div className="border border-gray-400 rounded-3xl w-[374px] px-[42px] fixed z-[999] bg-white-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute right-5 top-6 cursor-pointer"
          onClick={onClose}
        >
          <Close className="text-blue-100 w-8 h-8 hover:text-blue-300" />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2 className="text-blue-100 text-2xl font-bold mt-7">
            {title || "Title"}
          </h2>
          <p className="text-gray-100 font-normal text-center text-base mb-4">
            {description ||
              " Your one-stop guide to all things crypto. Whether you're a rookie trying to understand mining or a veteran looking to develop a trading strategy, we've got you covered."}
          </p>
          <div className="flex gap-6 mb-8">
            <Button outlined size="small" onClick={onClose}>
              Later
            </Button>
            <Button size="small" type="button" onClick={handleClaim}>
              Claim
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
