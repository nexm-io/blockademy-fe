"use client";
import Image from "next/image";
import React from "react";
import RewardEnable from "@/public/icons/reward-enable.svg";
import RewardDisable from "@/public/icons/reward-disable.svg";
import Button from "../Common/Button";
import cn from "@/services/cn";

const RewardItem = ({ status }: { status: string }) => {
  return (
    <div className="p-3 flex items-start gap-[20px] w-full shadow-lg rounded">
      <Image src={status === "passed" ? RewardEnable : RewardDisable} height={89} width={106} alt="reward enable" />
      <div className="flex flex-col gap-3 flex-1">
        <h5 className="text-[20px] font-bold line-clamp-1">User interface course</h5>
        <p className={cn(`text-[14px] capitalize`, {
          "text-green-100": status === "passed",
          "text-[#F0C43A]": status === "not-completed",
          "text-[#D62121]": status === "failed",
        })}>{status}</p>
        <div className="flex justify-end mt-4">
          <Button className="!px-4 !py-[6px]">
            {status === "passed" ? "Get Certificate" : "Complete Quiz"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RewardItem;