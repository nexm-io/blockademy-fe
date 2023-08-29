import React from "react";
import journeyIcon from "@/public/icons/journey.svg";
import Image from "next/image";
import Button from "@/components/Common/Button";

const JourneyAcademy = () => {
  return (
    <section className="lg:py-[46px] p-4 lg:px-[50px]  gap-8 lg:gap-[130px] w-full lg:w-[1150px] rounded-[20px] h-full lg:h-[627px] flex-shrink-0 bg-blue-200 mx-auto mt-[86px]">
      <div className="flex lg:flex-row flex-col-reverse gap-4 justify-between">
        <div className="flex flex-col text-black-100 lg:w-[40%] w-full prose">
          <h2 className="lg:text-[38px] md:text-[28px] text-[20px] font-bold leading-[48px] mb-4">
            Are you ready to begin your journey with Blockademy?
          </h2>
          <p className="lg:text-[18px] text-[14px] font-normal leading-[28px] mb-8">
            Our application process is just a few steps away! Follow our
            professional and streamlined application process to join our team.
          </p>
          <div>
            <Button rounded>
              Join here
            </Button>
          </div>
        </div>
        <div className="self-center lg:self-start md:w-[500px] lg:w-auto md:h-auto ">
          <Image alt="journey" src={journeyIcon}></Image>
        </div>
      </div>
      <div className="flex lg:items-center mt-[30px] md:mt-[50px] gap-5 md:flex-row flex-col justify-center">
        <div className="flex gap-[20px]">
          {/* Item 1 */}
          <div className="lg:w-[250px] w-[170px] h-[146px] bg-blue-300 flex items-center flex-col justify-center gap-2 rounded-[20px]">
            <span className="text-purple-100 text-lg font-bold leading-[28px]">
              01
            </span>
            <h3 className="text-white-100 text-center lg:text-[28px] text-[20px] font-semibold leading-[44px]">
              Start Journey
            </h3>
          </div>
          {/* Item 2 */}
          <div className="lg:w-[250px] w-[170px] h-[146px] bg-blue-300 flex items-center flex-col justify-center gap-2 rounded-[20px]">
            <span className="text-purple-100 text-lg font-bold leading-[28px]">
              02
            </span>
            <h3 className="text-white-100 text-center lg:text-[28px] text-[20px] font-semibold leading-[44px]">
              Study Courses
            </h3>
          </div>
        </div>

        <div className="flex gap-[20px]">
          {/* Item 3 */}
          <div className="lg:w-[250px] w-[170px] h-[146px] bg-blue-300 flex items-center flex-col justify-center gap-2 rounded-[20px]">
            <span className="text-purple-100 text-lg font-bold leading-[28px]">
              03
            </span>
            <h3 className="text-white-100 text-center lg:text-[28px] text-[20px] font-semibold leading-[44px]">
              Complete Quizz
            </h3>
          </div>
          {/* Item 4 */}
          <div className="lg:w-[250px] w-[170px] h-[146px] bg-blue-300 flex items-center flex-col justify-center gap-2 rounded-[20px]">
            <span className="text-purple-100 text-lg font-bold leading-[28px]">
              04
            </span>
            <h3 className="text-white-100 text-center lg:text-[28px] text-[20px] font-semibold leading-[44px]">
              Get Rewards
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyAcademy;
