"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RewardDetails } from "@/redux/features/reward/type";
import MyCertificate from "../MyCertificate";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";

const RewardItem = ({
  data: {
    assignment_status,
    title,
    course_id,
    certificate_image_url,
    aissignment_grade,
  },
}: {
  data: RewardDetails;
}) => {
  const [cerImage, setCerImage] = useState("");

  useEffect(() => {
    setCerImage(certificate_image_url || "");
  }, [certificate_image_url]);

  return (
    <div className="px-6 py-4 flex items-start gap-[30px] w-full hover:bg-gray-900 rounded-lg transition-all duration-300 ease-linear border border-grey-100">
      <Image
        src={cerImage}
        height={381}
        onError={() => setCerImage("/images/default-certificate.jpg")}
        blurDataURL={PLACEHOLDER_BASE64}
        width={580}
        className="w-[130px]"
        alt="blockademy-certificate"
      />
      <div className="flex-1 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <div>
            <h5 className="text-2xl line-clamp-2">{title}</h5>
            <p className="text-[14px] capitalize text-green-400">
              {assignment_status.name}
            </p>
          </div>
          <p className="text-grey-700 text-xl">
            Grade Achieved: {aissignment_grade || "--"}%
          </p>
        </div>
        <div className="flex justify-end">
          <div className="w-[184px]">
            <MyCertificate
              btnClass="!bg-blue-100 !group hover:bg-blue-100/50"
              txtClass="text-white-100 group-hover:text-white-100/80"
              loadingClass="text-white-100"
              courseId={course_id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardItem;
