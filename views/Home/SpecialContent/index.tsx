import React from "react";
import icon from "@/public/icons/specialcontent.svg";
import Image from "next/image";

const SpecialContent = () => {
  return (
    <section className="md:mt-[74px] mt-[40px]">
      <div className="w-full lg:h-[621px] h-auto bg-black-200 md:rounded-2xl">
        <h2 className="text-blue-400 md:text-[38px] text-[30px] font-bold leading-[40px] text-center pt-[48px] pb-[55px]">
          Special value from Blockademy
        </h2>
        <div className="mx-[20px] md:mx-[40px] flex lg:flex-row flex-col gap-8">
          <div className="flex flex-col md:gap-[49px] gap-[20px]">
            <div className="space-y-[6px]">
              <h3 className="text-white-100 text-[22px] font-bold leading-[45px]">
                Intensive Real-Life Training Program
              </h3>
              <p className="text-gray-400 text-base font-normal text__spacing">
                At Blockademy, our experienced and dedicated instructors deliver
                a focused and practical learning experience, with a
                straight-to-the-point curriculum that closely reflects
                real-world requirements.
              </p>
            </div>
            <div className="space-y-[6px]">
              <h3 className="text-white-100 text-[22px] font-bold leading-[45px]">
                Reliable Companion and Support
              </h3>
              <p className="text-gray-400 text-base font-normal text__spacing">
                At our institution, instructors, mentors, and students operate
                as a united team, proactively supporting, connecting, and
                empowering one another throughout the entire learning and career
                development journey.
              </p>
            </div>
            <div className="space-y-[6px]">
              <h3 className="text-white-100 text-[22px] font-bold leading-[45px]">
                Put the word &quot;Mind&quot; in everything
              </h3>
              <p className="text-gray-400 text-base font-normal text__spacing">
                The trainer&apos;s expertise, combined with the learners&apos;
                passion and drive, culminates in a triumphal career path for
                each individual.
              </p>
            </div>
          </div>

          <Image
            alt="logo-special"
            src={icon}
            className="lg:w-full w-[200px] md:w-[300px] mx-auto"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default SpecialContent;
