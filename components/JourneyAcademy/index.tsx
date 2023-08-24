import React from "react";
import Button from "../Common/Button";
import journeyIcon from "../../public/journey.svg";
import Image from "next/image";

const JourneyAcademy = () => {
  return (
    <section className="lg:py-[46px] p-4 lg:px-[50px] flex md:flex-row flex-col-reverse gap-8 lg:gap-[130px] w-full lg:w-[1150px] rounded-[20px] h-full lg:h-[427px] flex-shrink-0 bg-blue-200 mx-auto mt-[86px]">
      <div className="flex flex-col text-black-100 lg:w-[40%] w-full md:w-[80%]">
        <h2 className="lg:text-[38px] text-[28px] font-bold leading-[48px] mb-4">
          Are you ready to begin your journey with Blockademy?
        </h2>
        <p className="lg:text-[18px] text-[14px] font-normal leading-[28px] mb-8">
          Our application process is just a few steps away! Follow our
          professional and streamlined application process to join our team.
        </p>
        <Button
          label="Get start"
          className="lg:w-[165px] w-[130px] text-[14px] bg-blue-100 text-white-100 h-[40px] lg:h-[48px] py-[2px] px-[24px] font-semibold leading-[24px] text-center"
        ></Button>
      </div>
      <div className="self-center md:self-start md:w-[500px] md:h-[200px] lg:w-auto lg:h-auto ">
        <Image alt="journey" src={journeyIcon}></Image>
      </div>
    </section>
  );
};

export default JourneyAcademy;
