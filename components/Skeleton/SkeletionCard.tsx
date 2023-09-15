interface SkeletonCardProps {
  className?: string;
  height: string;
  width?: string;
  radius?: string;
  skeleton?: boolean;
}

export const SkeletionCard: React.FC<SkeletonCardProps> = ({
  className = "",
  height,
  width = "100%",
  radius,
  skeleton = true,
}) => {
  return (
    <div
      className={`${skeleton ? "skeleton" : ""} ${className}`}
      style={{
        height,
        width,
        borderRadius: radius,
      }}
    ></div>
  );
};
