"use client";
import Image from "next/image";
import React from "react";
import gift from "@/public/icons/gift.svg";
import Button from "../Common/Button";
import { useRouter } from "next/navigation";

const GiftHeader = () => {
  const { push } = useRouter();
  return (
    <div className="bg-blue-200 flex items-center justify-center h-[57px] mt-[74px] full-bleed__header ">
      <div className="flex items-center prose">
        <div>
          <Image alt="gift-icon" src={gift}></Image>
        </div>
        <span className="ml-3 mr-4 md:text-sm text-[12px]">
          Earn FREE Crypto While You Learn
        </span>
        <Button size="small" onClick={() => push("/courses")}>
          Learn Now
        </Button>
      </div>
    </div>
  );
};

export default GiftHeader;
