import { Close } from "@styled-icons/remix-line";
import React from "react";
import Button from "../Common/Button";
import Image from "next/image";

const CertPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black-100 opacity-50 z-[998]"
        onClick={onClose}
      ></div>
      <div
        className={`border border-gray-400 md:rounded-3xl rounded-lg px-3 md:px-[42px] fixed z-[999] bg-white-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div
          className="absolute md:right-5 md:top-6 right-3 top-2 cursor-pointer"
          onClick={onClose}
        >
          <Close className="text-blue-100 w-8 h-8 hover:text-blue-300" />
        </div>
        <div className="flex flex-col md:gap-5 gap-2 items-center justify-center">
          <h2 className="text-blue-100 text-2xl font-bold md:mt-7 mt-4">
            Certificate
          </h2>
          <div>
            <Image
              src="/images/cert-example.jpg"
              alt="cert"
              width={1440}
              height={946}
              className="max-w-[250px] md:max-w-full w-[250px] md:w-auto"
            />
          </div>
          <div className="flex justify-center flex-col md:flex-row mb-6 gap-2">
            <Button className="!py-2 !px-5 w-[200px]" kind="secondary" onClick={() => {}}>
              Export PDF
            </Button>
            <Button className="!py-2 !bg-[#E6C6FF] hover:opacity-75 w-[200px]">
              <span className="text-[#7C0BA4] font-bold">Issue NFT</span>
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default CertPopup;
