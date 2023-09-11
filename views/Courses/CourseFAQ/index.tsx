import Image from "next/image";
import React from "react";
import icon from "@/public/icons/addfaq.svg";

const CourseFAQ = () => {
  return (
    <section className="md:mt-[114px] mt-20">
      <div className="px-4">
        <h2 className="font-bold text-[25px] text-black-100 uppercase mb-[36px]">
          faq
        </h2>
        <div className="flex md:gap-10 gap-6 justify-between md:flex-row flex-col">
          {/* FAQ Left */}
          <div className="flex flex-col md:gap-[64px] gap-6 basis-1/2">
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Blockademy educational courses?
              </p>
            </div>
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Blockademy educational courses?
              </p>
            </div>
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Blockademy educational courses?
              </p>
            </div>
          </div>
          {/* FAQ Right */}
          <div className="flex flex-col md:gap-[64px] gap-6 basis-1/2">
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Blockademy educational courses?
              </p>
            </div>
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Blockademy educational courses?
              </p>
            </div>
            <div className="flex gap-[14px]">
              <Image alt="add-icon" src={icon}></Image>
              <p className="font-normal text-base text-black-100">
                What are the Blockademy educational courses?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;
