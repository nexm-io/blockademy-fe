import cn from "@/services/cn";

const ChipV2 = ({ label, type }: { label?: string; type?: string }) => {
  return (
    <div
      className={cn(`px-6 py-[6px] inline-flex gap-2 items-center rounded-[30px] bg-green-400/20`, {
        "bg-yellow-300/20": type === "intermediate",
        "bg-red-100/20": type === "expert",
      })}
    >
      <div className={cn(`w-2 h-2 rounded-full bg-green-400`, {
        "bg-yellow-300": type === "intermediate",
        "bg-red-100": type === "expert",
      })}></div>
      <span className="text-base text-[#616161] !font-light">{label}</span>
    </div>
  );
};

export default ChipV2;
