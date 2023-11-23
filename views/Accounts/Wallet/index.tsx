import React from "react";
import Button from "@/components/Common/Button";
import walletIcon from "@/public/icons/wallet-fill.svg";
import Image from "next/image";

const WalletComponent = () => {
  return (
    <div className="rounded-lg border border-grey-200 p-4 bg-gray-900">
      <h2 className="text-2xl mb-6">Wallet</h2>
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="flex gap-6 items-center">
          <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
            <Image
              alt="avatar icon"
              src={walletIcon}
              width={24}
              height={24}
              className="select-none"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <h3>Connect Wallet</h3>
            <p className="font-light text-gray-300">
              Connect your account to Wallet
            </p>
          </div>
        </div>
        <div className="md:basis-[100px] basis-auto">
          <Button className="min-w-[184px] !px-0">
            <span className="font-normal">Connect</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletComponent;
