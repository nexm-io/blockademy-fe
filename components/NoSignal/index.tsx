import Image from "next/image";
import React from "react";
import mailbox from "@/public/icons/mailbox.svg";
import Button from "../Common/Button";

const NoSignal = () => {
  return (
    <div className="w-full relative mt-[60px] md:mt-[98px] bg-gray-200 full-bleed__footer">
      <div className="flex md:flex-row flex-col items-center gap-[40px] md:gap-[150px] py-5 md:py-[66px]">
        <Image alt="mailbox" src={mailbox} width={200}></Image>
        <div className="md:mr-[155px] mx-2 md:mx-0">
          <p className="font-normal text-[20px] text-gray-100 mb-[33px] mx-6 md:mx-0">
            Stay Updated with the Latest Courses, Article Updates, and More
          </p>
          <div className="flex gap-2 mb-[22px] md:flex-row flex-col">
            <input
              type="text"
              placeholder="Enter your email address"
              className="flex-1 outline-none border-none px-[19px] rounded-lg py-5 md:py-0 mx-6 md:mx-0"
            />
            <Button className=" h-[48px] mx-6 md:mx-0">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSignal;
