import React from "react";
import { SkeletionCard } from "../Skeleton/SkeletionCard";

interface TagItemSkeletonProps {
  className?: string;
}

const TagItemSkeleton: React.FC<TagItemSkeletonProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 bg-gray-200 rounded-full ${className}`}
    ></div>
  );
};

export default TagItemSkeleton;
