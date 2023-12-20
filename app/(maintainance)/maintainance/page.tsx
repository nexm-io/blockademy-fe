import React from "react";
import mantainnance from "@/public/images/maintainance.svg";
import Image from "next/image";

const Maintainance = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-gray-100 px-2 h-[70vh]">
      <p className="text-[40px] font-medium text-black-100 text-center">
        BlockAdemy is Under Maintenance
      </p>
      <Image
        className="-rotate-45 w-[250px] lg:w-[350px]"
        alt="logo"
        src={mantainnance}
      />
      <p className="text-2xl max-w-[850px] font-light text-center text-black-100">
        {`We're sorry for the inconvenience, but BlockAdemy is currently
        undergoing maintenance to bring you an even better learning experience`}
      </p>
    </div>
  );
};

export default Maintainance;
