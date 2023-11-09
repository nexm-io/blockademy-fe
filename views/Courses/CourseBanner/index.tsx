import Image from "next/image";
import React from "react";
import banner from "@/public/images/course/course-1.png";

const CourseBanner = () => {
  return (
    <div className="relative">
      <Image alt="banner-course" src={banner} className="w-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 left-10">
        <h3 className="text-5xl font-bold text-white-100 w-full container">
          Free education <br />
          Learn. Grow. Succeed <br />
          Be a strong builder.
        </h3>
      </div>
    </div>
  );
};

export default CourseBanner;
