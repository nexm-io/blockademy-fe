import Image from "next/image";
import React from "react";
import DemoCourse from "@/public/images/home/demo-course.png";
import IconUser from "@/public/icons/user.svg";
import IconVisor from "@/public/icons/visor.svg";
import IconDotList from "@/public/icons/dot-list.svg";
import { Star } from "../Icon";
import Link from "next/link";

const CourseItem = () => {
  return (
    <Link href="#" className="group">
      <div className="rounded overflow-hidden">
        <Image className="w-full transition-all duration-500 group-hover:scale-110" height={189} width={280} src={DemoCourse} alt="Demo course" />
      </div>
      <div className="px-2">
        <div className="flex items-center gap-2 mt-6">
          <div className="flex items-center gap-[2px]">
            <Star className="text-[#FEA800]" />
            <Star className="text-[#FEA800]" />
            <Star className="text-[#FEA800]" />
            <Star className="text-[#FEA800]" />
            <Star className="text-[#D9D9D9]" />
          </div>
          <div className="text-xs leading-3 -mb-[2px] font-normal">4.0</div>
        </div>
        <p className="text-xs mt-[10px]">Backend</p>
        <p className="text-lg font-bold">The Complete 2023 Web Development Bootcamp</p>
        <div className="mt-6 flex items-center justify-between bg-[#F0F0F0] py-3 px-[14px]">
          <div className="flex items-center gap-2">
            <Image src={IconUser} width={15} height={10} alt="user" />
            <p className="text-xs leading-3 -mb-[2px] font-normal">1934</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={IconVisor} width={15} height={11} alt="visor" />
            <p className="text-xs leading-3 -mb-[2px] font-normal">24586</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[18px] px-2">
          <div className="flex items-center gap-2 rounded-[30px] p-2 bg-green-100/30">
            <span className="w-[6px] h-[6px] bg-green-100 rounded-full inline-block"></span>
            <p className="text-xs leading-3 -mb-[2px] font-normal">Beginner</p>
            {/*  Beginner | Intermediate | Advance */}
          </div>
          <div className="flex items-center gap-2">
            <Image src={IconDotList} width={15} height={11} alt="dot" />
            <p className="text-xs leading-3 -mb-[2px] font-normal">16 Lecture</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
