export const RewardLoading = ({ row = 1 }: { row?: number }) => {
  return Array(row)
    .fill(0)
    .map((_z, index) => (
      <div key={index} className="flex flex-col gap-3">
        <div className="h-[158px] skeleton w-full !rounded-lg"></div>
      </div>
    ));
};
