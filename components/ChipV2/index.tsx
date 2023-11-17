const ChipV2 = ({ label, type }: { label?: string; type?: string }) => {
  return (
    <div
      className="px-6 py-[6px] inline-flex gap-2 items-center rounded-[30px]"
      style={{
        background: `rgba(2, 231, 85, 0.20)`,
      }}
    >
      <div className="w-2 h-2 rounded-full bg-[#02E755]"></div>
      <span className="text-base text-[#616161] !font-light">{label}</span>
    </div>
  );
};

export default ChipV2;
