import Image from "next/image";
import React from "react";
import NoCertificateIcon from "@/public/icons/no-certificate.svg";
import Button from "../Common/Button";
import { useRouter } from "next/navigation";

const RewardEmpty = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center text-center mt-4">
      <div className="flex flex-col items-center gap-10 max-w-[430px]">
        <div className="flex flex-col gap-[14px]">
          <div className="mb-[6px] flex justify-center">
            <Image
              src={NoCertificateIcon}
              width={99}
              height={114}
              alt="no certificate icon"
            />
          </div>
          <p className="text-2xl text-black-400">
            You don’t have any certificates
          </p>
          <p className="text-xl text-grey-700 font-light">
            Join in the exciting courses of Blockademy now
          </p>
        </div>
        <Button
          className="min-w-[184px] !px-0"
          onClick={() => router.push("/courses")}
        >
          <span className="font-normal">Discover Now!</span>
        </Button>
      </div>
    </div>
  );
};

export default RewardEmpty;
