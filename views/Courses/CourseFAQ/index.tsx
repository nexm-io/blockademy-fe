import Image from "next/image";
import React from "react";
import icon from "@/public/icons/addfaq.svg";

const CourseFAQ = () => {
  return (
    <section className="mt-[114px]">
      <div>
        <h2 className="font-bold text-[25px] text-black-100 uppercase mb-[36px]">
          faq
        </h2>
        <div className="flex gap-[40px] justify-between">
          {/* FAQ Left */}
          <div className="flex flex-col gap-[64px] basis-1/2">
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Binance Academy educational courses?
              </p>
            </div>
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Binance Academy educational courses?
              </p>
            </div>
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Binance Academy educational courses?
              </p>
            </div>
          </div>
          {/* FAQ Right */}
          <div className="flex flex-col gap-[64px] basis-1/2">
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Binance Academy educational courses?
              </p>
            </div>
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Binance Academy educational courses?
              </p>
            </div>
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Binance Academy educational courses?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;
