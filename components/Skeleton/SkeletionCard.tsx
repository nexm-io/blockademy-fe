interface SkeletonCardProps {
  className?: string;
  height: string;
  width?: string;
  radius?: string;
  skeleton?: boolean;
  mobileCardFull?: boolean;
}

export const SkeletionCard: React.FC<SkeletonCardProps> = ({
  className = "",
  height,
  width = "100%",
  radius,
  skeleton = true,
  mobileCardFull = false,
  
}) => {
  return (
    <div
      className={`${skeleton ? "skeleton" : ""} ${
        mobileCardFull ? "mobileCardFullSkeleton" : ""
      }  ${className}`}
      style={{
        height,
        width,
        borderRadius: radius,
      }}
    ></div>
  );
};
