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
import { useAppDispatch } from "@/redux/hook";
import { getRewardDetail } from "@/redux/features/reward/action";

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
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    if (assignment_status.slug === ASSIGNMENT_STATUS.PASSED) {
      if (!is_claimed) {
        setLoading(true);
        try {
          await api.get(`/api/v10/claim-reward/${course_id}`);
          dispatch(getRewardDetail(course_id as string));
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
    <div className="p-3 flex items-start gap-[20px] w-full shadow-lg hover:shadow-3xl rounded-lg transition-all duration-300 ease-linear">
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
      <div className="flex-1 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3">
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
          {assignment_status.slug !== ASSIGNMENT_STATUS.PASSED && (
            <p className="text-red-100 text-xs">
              You need to pass 80% questions to get certificate
            </p>
          )}
        </div>
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
