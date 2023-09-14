import Image from "next/image";
import React from "react";
import banner from "@/public/images/course/course-1.png";

const CourseBanner = () => {
  return (
    <>
      <Image
        alt="banner-course"
        src={banner}
        className="absolute left-0 w-full lg:h-[450px] md:h-[30%] h-[150px] max-h-[450px] select-none"
      />
      <h2 className="pl-6 text-white-100 md:text-[46px] text-base font-bold md:leading-[56px] w-[235px] md:w-[445px] relative translate-y-full md:translate-y-[85%] banner-top">
        Free education Learn. Earn. Be a smart investor.
      </h2>
    </>
  );
};

export default CourseBanner;
