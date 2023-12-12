"use client";
import React from "react";
import JourneyImg from "@/public/images/home/journey.png";
import Image from "next/image";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";

const JourneyAcademy = () => {
  const { push } = useRouter();
  return (
    <section className="w-full mt-10 bg-blue-200 px-4 md:px-12 py-14 rounded-[20px]">
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-4">
        <div className="flex flex-col gap-7">
          <h2 className="text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
            Are you ready to begin your journey with Blockademy?
          </h2>
          <p className="text-base sm:text-xl font-normal">
            Our application process is just a few steps away!
            {" "}
            <br className="hidden sm:block" />
            Follow our professional and streamlined application process to join
            our team.
          </p>
          <div className="mt-1 sm:mt-4">
            <Button className="min-w-[165px]" onClick={() => push("/courses")}>
              <span className="font-bold">Get start</span>
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image alt="journey" width={439} height={286} src={JourneyImg} />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-5 lg:justify-between flex-wrap mt-14">
        {/* Item 1 */}
        <div className="p-8 bg-blue-300 flex items-center flex-col justify-center gap-2 rounded-[20px] min-w-[216px] w-full md:w-auto">
          <span className="text-purple-100 text-lg font-bold leading-[28px]">
            01
          </span>
          <h3 className="text-white-100 text-center lg:text-[28px] text-[20px] font-semibold leading-[44px]">
            Start Journey
          </h3>
        </div>
        {/* Item 2 */}
        <div className="p-8 bg-blue-300 flex items-center flex-col justify-center gap-2 rounded-[20px] min-w-[216px] w-full md:w-auto">
          <span className="text-purple-100 text-lg font-bold leading-[28px]">
            02
          </span>
          <h3 className="text-white-100 text-center lg:text-[28px] text-[20px] font-semibold leading-[44px]">
            Study Courses
          </h3>
        </div>
        {/* Item 3 */}
        <div className="p-8 bg-blue-300 flex items-center flex-col justify-center gap-2 rounded-[20px] min-w-[216px] w-full md:w-auto">
          <span className="text-purple-100 text-lg font-bold leading-[28px]">
            03
          </span>
          <h3 className="text-white-100 text-center lg:text-[28px] text-[20px] font-semibold leading-[44px]">
            Complete Quiz
          </h3>
        </div>
        {/* Item 4 */}
        <div className="p-8 bg-blue-300 flex items-center flex-col justify-center gap-2 rounded-[20px] min-w-[216px] w-full md:w-auto">
          <span className="text-purple-100 text-lg font-bold leading-[28px]">
            04
          </span>
          <h3 className="text-white-100 text-center lg:text-[28px] text-[20px] font-semibold leading-[44px]">
            Get Rewards
          </h3>
        </div>
      </div>
    </section>
  );
};

export default JourneyAcademy;
