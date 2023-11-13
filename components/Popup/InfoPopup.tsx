import { Close } from "@styled-icons/remix-line";
import React from "react";
import Button from "../Common/Button";

const InfoPopup = ({
  title,
  desc,
  onClose,
}: {
  title: string;
  desc: string;
  onClose: () => void;
}) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black-100 opacity-50 z-[998]"
        onClick={onClose}
      ></div>
      <div
        className={`border border-gray-400 md:rounded-3xl rounded-lg px-[42px] fixed z-[999] bg-white-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div
          className="absolute md:right-5 md:top-6 right-3 top-2 cursor-pointer"
          onClick={onClose}
        >
          <Close className="text-blue-100 w-8 h-8 hover:text-blue-300" />
        </div>
        <div className="flex flex-col md:gap-5 gap-2 items-center justify-center">
          <h2 className="text-blue-100 text-2xl font-bold md:mt-7 mt-4">
            {title}
          </h2>
            <p className="text-gray-100 font-normal text-center md:text-base text-sm mb-4 max-w-[350px]">
            {desc}
          </p>
          <div className="flex gap-6 mb-8">
            <Button size="small" type="button" onClick={onClose}>
              Yap, sure
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPopup;
