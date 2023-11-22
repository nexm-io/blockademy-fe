import React from "react";
import Button from "@/components/Common/Button";
import { Wallet } from "@styled-icons/fa-solid";

const WalletComponent = () => {
  return (
    <div className="rounded-lg border border-grey-200 p-4 bg-gray-900">
      <h2 className="text-2xl mb-6">
        Wallet
      </h2>
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="flex gap-6 items-center">
          <Wallet className="md:w-6 md:h-6 w-8 h-8" />
          <div className="flex flex-col gap-[2px]">
            <h3 className="font-semibold text-base">Wallet</h3>
            <p className="text-base font-normal text-gray-300">
              Connect your account to Wallet
            </p>
          </div>
        </div>
        <div className="md:basis-[100px] basis-auto">
          <Button
            className="min-w-[184px] !px-0"
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletComponent;
