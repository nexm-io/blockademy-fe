import Image from "next/image";
import React from "react";
import banner from "@/public/images/course/course-1.png";

const CourseBanner = () => {
  return (
    <Image alt="banner-course" src={banner} className="absolute left-0"></Image>
  );
};

export default CourseBanner;
