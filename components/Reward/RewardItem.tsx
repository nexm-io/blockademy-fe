"use client";
import Image from "next/image";
import React, { useState } from "react";
import RewardEnable from "@/public/icons/reward-enable.svg";
import RewardDisable from "@/public/icons/reward-disable.svg";
import Button from "../Common/Button";
import cn from "@/services/cn";
import { RewardDetails } from "@/redux/features/reward/type";
import { ASSIGNMENT_STATUS } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { Loader3 } from "@styled-icons/remix-line";
import api from "@/services/axios";
import { toast } from "react-toastify";

const RewardItem = ({
  rewardDetailLoading,
  data: { course_id, assignment_status, title, is_claimed, assigment_id },
  handleViewCertificate,
}: {
  rewardDetailLoading: boolean;
  data: RewardDetails;
  handleViewCertificate: () => void;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    if (assignment_status.slug === ASSIGNMENT_STATUS.PASSED) {
      if (!is_claimed) {
        setLoading(true);
        try {
          const { data: info } = await api.get(
            `/api/v10/claim-reward/${course_id}`
          );
          if (info.status === 200)
            toast.success("Claim certificate is success");
        } catch (error) {
          toast.warning("Something wrong...");
          return null;
        } finally {
          setLoading(false);
        }
      } else {
        handleViewCertificate();
      }
    } else {
      router.push(`/quiz/${assigment_id}`);
    }
  };

  return (
    <div className="p-3 flex items-start gap-[20px] w-full shadow-lg rounded">
      <Image
        src={
          assignment_status.slug === ASSIGNMENT_STATUS.PASSED
            ? RewardEnable
            : RewardDisable
        }
        height={89}
        width={106}
        alt="reward enable"
      />
      <div className="flex flex-col gap-3 flex-1">
        {rewardDetailLoading ? (
          <div className="flex flex-col gap-3">
            <div className="h-[60px] skeleton w-full"></div>
            <div className="h-[21px] skeleton w-full"></div>
          </div>
        ) : (
          <>
            <h5 className="text-[20px] font-bold line-clamp-2">{title}</h5>
            <p
              className={cn(`text-[14px] capitalize`, {
                "text-green-100":
                  assignment_status.slug === ASSIGNMENT_STATUS.PASSED,
                "text-[#F0C43A]":
                  assignment_status.slug === ASSIGNMENT_STATUS.NOT_COMPLETED,
                "text-[#D62121]":
                  assignment_status.slug === ASSIGNMENT_STATUS.FAILED,
              })}
            >
              {assignment_status.slug === ASSIGNMENT_STATUS.NOT_COMPLETED
                ? "Not Completed"
                : assignment_status.name}
            </p>
          </>
        )}
        <p className="text-red-100 text-xs">
          You need to pass 80% questions to get certificate
        </p>
        <div className="flex justify-end mt-4">
          <Button
            disabled={rewardDetailLoading}
            className="!px-4 !py-[6px]"
            onClick={handleClick}
          >
            {assignment_status.slug === ASSIGNMENT_STATUS.PASSED
              ? !is_claimed
                ? "Get Certificate"
                : "View Detail"
              : "Complete Quiz"}
            {loading && (
              <Loader3 className="animate-spin ml-2" width={25} height={25} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RewardItem;
