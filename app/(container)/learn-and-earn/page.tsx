import InfoGraphic from "@/views/Register/InfoGraphic";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Learn & Earn",
};

const LearnEarn = () => {
  return (
    <div className="bg-black-500 flex justify-center items-center mt-[74px] pb-[64px] full-bleed__learn">
      <div className="md:mt-[100px] mt-10">
        <InfoGraphic
          description="Build your blockchain knowledge, complete
                        quizzes, and earn free crypto."
          coming_soon
          color_text="text-[#EAECEF]"
        />
      </div>
    </div>
  );
};

export default LearnEarn;
