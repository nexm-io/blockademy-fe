import React from "react";
import Button from "@/components/Common/Button";
import Image from "next/image";
import cancelIcon from "@/public/icons/cancel.svg";
import { Wallet } from "@styled-icons/fa-solid";
const WalletComponent = () => {
  return (
    /* Connect Wallet */
    <div>
      <h2 className="font-semibold text-2xl md:mb-[40px] mb-6 md:mt-[60px] mt-8">
        Wallet
      </h2>
      <div className="flex justify-between items-center md:mb-[40px] mb-6 md:flex-row flex-col">
        <div className="flex gap-4 md:basis-[450px] basis-auto items-center md:items-start self-start">
          <Wallet className="md:w-6 md:h-6 w-8 h-8" />
          <div className="flex flex-col">
            <h3 className="font-semibold text-base">Wallet</h3>
            <p className="text-base font-normal text-gray-300">
              Connect your account to Wallet
            </p>
          </div>
        </div>
        <div className=" my-4 md:my-0">
          <div className="flex gap-2 items-center ">
            <Image alt="" src={cancelIcon} className="w-4 h-4"></Image>
            <span className="text-base font-semibold">Off</span>
          </div>
        </div>
        <div className="md:basis-[100px] basis-auto">
          <Button
            size="small"
            className="w-[100px] h-[40px] bg-white-300 !text-black-100 hover:!text-white-100"
          >
            Connect{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletComponent;
