import Image from "next/image";
import React from "react";
import mailbox from "@/public/icons/mailbox.svg";
import Button from "../Common/Button";

const NoSignal = () => {
  return (
    <section className="bg-[#F5F5F5] py-[88px] mt-[60px]">
      <div className="container grid grid-cols-1 lg:grid-cols-3 items-center gap-[80px]">
        <Image
          alt="mailbox"
          src={mailbox}
          width={200}
          className="max-auto lg:ml-auto"
        ></Image>
        <div className="lg:col-start-2 lg:col-end-4">
          <p className="font-bold text-[56px] leading-[64px] text-black-400">
            No noise. Just signal.
          </p>
          <p className="text-[24px] leading-[32px] text-[#616161] font-normal mt-[14px]">
            Stay Updated with the Latest Courses, Article Updates, and More
          </p>
          <div className="mt-[24px] flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full outline-none border-none px-[15px] rounded-lg py-[14px]"
              />
            </div>

            <Button className="w-full md:w-[184px]">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoSignal;
