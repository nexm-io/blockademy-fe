import React from "react";
import { SkeletionCard } from "../Skeleton/SkeletionCard";

const CardItemSkeleton = () => {
  return (
    <div className="w-[352px] h-[370px] bg-gray-200 flex flex-col rounded-2xl">
      <SkeletionCard width="352px" height="198px" radius="16px" />
      <SkeletionCard
        width="320px"
        height="48px"
        radius="16px"
        className="mx-4 mt-6"
      />
      <div className="flex gap-4 justify-around mt-auto mb-6">
        <SkeletionCard width="105px" height="30px" radius="16px" />
        <SkeletionCard width="88px" height="30px" radius="16px" />
        <SkeletionCard width="50px" height="30px" radius="16px" />
      </div>
    </div>
  );
};

export default CardItemSkeleton;
