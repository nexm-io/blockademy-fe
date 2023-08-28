import Image from "next/image";
import React from "react";
import gift from "@/public/icons/gift.svg";
import Link from "next/link";

const GiftHeader = () => {
  return (
    <div className="bg-blue-200 flex items-center justify-center h-[57px] mt-[74px]">
      <div className="flex items-center">
        <Image alt="gift-icon" src={gift}></Image>
        <span className="ml-3 mr-6 md:text-sm text-[12px]">
          Earn FREE Crypto While You Learn
        </span>
        <Link
          href="#"
          className="capitalize text-white-100 flex items-center justify-center md:text-sm text-[12px] font-medium leading-5 bg-blue-100 rounded-[4px] min-w-[52px] min-h-[24px] py-[6px] px-[18px] btn__contain-shadow"
        >
          learn now
        </Link>
      </div>
    </div>
  );
};

export default GiftHeader;
