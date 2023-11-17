"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RewardDetails } from "@/redux/features/reward/type";
import MyCertificate from "../MyCertificate";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";
import Button from "../Common/Button";

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
    <div className="px-8 py-6 flex flex-col md:flex-row items-start gap-[30px] w-full hover:bg-gray-900 rounded-lg transition-all duration-300 ease-linear border border-grey-100">
      <Image
        src={cerImage}
        height={381}
        onError={() => setCerImage("/images/default-certificate.jpg")}
        blurDataURL={PLACEHOLDER_BASE64}
        width={580}
        className="w-full md:w-[130px]"
        alt="blockademy-certificate"
      />
      <div className="flex-1 flex flex-col lg:justify-between h-full w-full">
        <div className="flex lg:justify-between md:items-end flex-col md:flex-row gap-6 w-full">
          <div className="flex-1 flex flex-col gap-2">
            <h5 className="text-2xl line-clamp-2">{title}</h5>
            <p className="text-[14px] font-light capitalize text-green-400">
              {assignment_status.name}
            </p>
            <p className="text-grey-700 text-xl">
              Grade Achieved: {aissignment_grade || "--"}%
            </p>
          </div>
          <div>
            <Button className="!px-0 min-w-[184px]">View Certificate</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardItem;
