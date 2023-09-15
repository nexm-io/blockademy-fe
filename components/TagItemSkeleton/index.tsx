import React from "react";
import { SkeletionCard } from "../Skeleton/SkeletionCard";

interface TagItemSkeletonProps {
  className?: string;
}

const TagItemSkeleton: React.FC<TagItemSkeletonProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 bg-gray-200 rounded-full ${className}`}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <>
          <SkeletionCard
            key={index}
            height="6px"
            width="6px"
            radius="999px"
            skeleton={false}
            className="animate-bounce bg-gray-300"
          ></SkeletionCard>
        </>
      ))}
    </div>
  );
};

export default TagItemSkeleton;
