import Image from "next/image";
import React from "react";
import DemoCourse from "@/public/images/home/demo-course.png";

const CoursesItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="rounded overflow-hidden">
        <Image height={189} width={280} src={DemoCourse} alt="Demo course" />
      </div>
    </div>
  );
};

export default CoursesItem;
