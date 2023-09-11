import Image from "next/image";
import React from "react";
import reward1 from "@/public/icons/reward-1.svg";
import reward2 from "@/public/icons/reward-2.svg";
import reward3 from "@/public/icons/reward-3.svg";
const CourseRewards = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-black-100 text-[38px] font-bold mb-4 text-center">
          Learn crypto and earn rewards
        </h2>
        <p className="text-gray-100 text-center font-normal text-xl md:mb-[60px] mb-10">
          Advance your knowledge for free through our fun, interactive courses.
          Blockademy Academy presents the most comprehensive educational courses
          lineup for beginners, intermediate and advanced learners.
        </p>
        <div className="flex justify-between items-center md:flex-row flex-col gap-6 md:gap-0">
          {/* Sub-reward 1 */}
          <div className="flex flex-col items-center justify-center md:basis-[33.33%] basis-full">
            <Image alt="reward-1" src={reward1}></Image>
            <h3 className="text-black-100 text-xl font-semibold text-center mt-[18px] mb-[13px]">
              Learn for Free
            </h3>
            <p className="font-normal text-sm text-center">
              Complete quizzes and earn rewards.
            </p>
          </div>

          {/* Sub-reward 2 */}
          <div className="flex flex-col items-center justify-center md:basis-[33.33%] basis-full">
            <Image alt="reward-1" src={reward2}></Image>
            <h3 className="text-black-100 text-xl font-semibold text-center mt-[18px] mb-[13px]">
              Receive Certificate
            </h3>
            <p className="font-normal text-sm text-center w-[65%]">
              Claim your Certificate of Achievement as proof of learning
            </p>
          </div>

          {/* Sub-reward 3 */}
          <div className="flex flex-col items-center justify-center md:basis-[33.33%] basis-full">
            <Image alt="reward-1" src={reward3}></Image>
            <h3 className="text-black-100 text-xl font-semibold text-center mt-[18px] mb-[13px]">
              One-Stop Learning Hub
            </h3>
            <p className="font-normal text-sm text-center w-[65%]">
              Join millions and start learning from Blockademy Academy’s
              standard-setting educational programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseRewards;
