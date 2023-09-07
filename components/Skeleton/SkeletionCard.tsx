interface SkeletonCardProps {
  className?: string;
  height: string;
  width?: string;
  radius?: string;
}

export const SkeletionCard: React.FC<SkeletonCardProps> = ({
  className = "",
  height,
  width = "100%",
  radius,
}) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        height,
        width,
        borderRadius: radius,
      }}
    ></div>
  );
};
