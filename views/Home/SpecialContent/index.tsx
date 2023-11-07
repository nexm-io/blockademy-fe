import React from "react";
import SpecialImg from "@/public/images/home/special.png";
import Image from "next/image";

const SpecialContent = () => {
  return (
    <section className="md:mt-[74px] mt-[40px]">
      <div className="bg-black-200 md:rounded-2xl px-4 sm:px-10 pt-10">
        <h2 className="text-blue-400 text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px] mb-6 lg:mb-12">
          Special value from Blockademy
        </h2>
        <div className="flex lg:flex-row flex-col gap-14 ">
          <div className="flex flex-col md:gap-[49px] gap-[20px] pb-6">
            <div className="space-y-[6px]">
              <h3 className="text-white-100 text-[22px] font-bold sm:leading-[45px]">
                Intensive Real-Life Training Program
              </h3>
              <p className="text-gray-400 text-base font-normal">
                At Blockademy, our experienced and dedicated instructors deliver
                a focused and practical learning experience, with a
                straight-to-the-point curriculum that closely reflects
                real-world requirements.
              </p>
            </div>
            <div className="space-y-[6px]">
              <h3 className="text-white-100 text-[22px] font-bold sm:leading-[45px]">
                Reliable Companion and Support
              </h3>
              <p className="text-gray-400 text-base font-normal">
                At our institution, instructors, mentors, and students operate
                as a united team, proactively supporting, connecting, and
                empowering one another throughout the entire learning and career
                development journey.
              </p>
            </div>
            <div className="space-y-[6px]">
              <h3 className="text-white-100 text-[22px] font-bold sm:leading-[45px]">
                Put the word &quot;Mind&quot; in everything
              </h3>
              <p className="text-gray-400 text-base font-normal">
                The trainer&apos;s expertise, combined with the learners&apos;
                passion and drive, culminates in a triumphal career path for
                each individual.
              </p>
            </div>
          </div>

          <div className="w-full">
            <Image
              alt="special"
              width={428}
              height={491}
              className="-mb-[1px]"
              src={SpecialImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialContent;
