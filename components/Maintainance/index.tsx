import React from "react";
import mantainnance from "@/public/images/maintainance.svg";
import Image from "next/image";

const Maintainance = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[65vh] text-gray-100">
      <p className="text-[40px] font-medium text-black-100">
        BlockAdemy is Under Maintenance
      </p>
      <Image className="-rotate-45" alt="logo" src={mantainnance} width={350} />
      <p className="text-2xl max-w-[850px] font-light text-center text-black-100">
        {`We're sorry for the inconvenience, but BlockAdemy is currently
        undergoing maintenance to bring you an even better learning experience`}
      </p>
    </div>
  );
};

export default Maintainance;
