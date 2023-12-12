"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import gift from "@/public/icons/gift.svg";
import Button from "../Common/Button";
import { useRouter, redirect } from "next/navigation";
import Popup from "../Popup";

const GiftHeader = () => {
  const { push } = useRouter();

  return (
    <>
      <div className="bg-blue-200 relative flex items-center justify-center py-6 px-4 full-bleed__header ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4">
          <Image
            alt="hutech"
            src="/images/hutech.png"
            width={101}
            height={34}
          />
          <span className="text-lg text-blue-100 text-center">
            HUTECH Workshop on Blockchain and Smart Contracts
          </span>
          <Image
            alt="cert"
            src="/images/cert.png"
            width={36}
            height={40}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default GiftHeader;
