import Image from "next/image";
import React from "react";
import mailbox from "@/public/icons/mailbox.svg";
import Button from "../Common/Button";

const NoSignal = () => {
  return (
    <div className="w-full relative mt-[60px] md:mt-[98px] bg-gray-200 full-bleed__footer">
      <div className="flex md:flex-row flex-col items-center gap-[40px] md:gap-[150px] py-5 md:py-[66px] max-w-[1152px] mx-auto ">
        <Image alt="mailbox" src={mailbox} width={200}></Image>
        <div className="md:mr-[155px] mx-2 md:mx-0">
          <h2 className="md:text-[60px] text-[40px] md:text-left text-center font-bold leading-[72px] w-full md:w-[70%] mb-[10px]">
            No noise. Just signal.
          </h2>
          <p className="font-normal text-[20px] text-gray-100 mb-[33px]">
            Get the latest in crypto dropped to your email, every week.
          </p>
          <div className="flex gap-2 mb-[22px]">
            <input
              type="text"
              placeholder="Enter your email address"
              className="flex-1 outline-none border-none px-[19px] rounded-lg"
            />
            <Button className="bg-white-100 !text-black-100 hover:!text-white-100 h-[48px]">
              Subscribe
            </Button>
          </div>
          <div className="flex gap-[11px]">
            <input type="checkbox" id="checkbox" />
            <p>
              I have read and agree to Binance&lsquo;s{" "}
              <span className="text-blue-100 cursor-pointer">
                Terms of Service
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSignal;
