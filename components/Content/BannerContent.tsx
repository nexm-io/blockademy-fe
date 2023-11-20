"use client";
import React from "react";

const BannerContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div
      className="min-h-[164px]"
      style={{
        backgroundImage: `url(/images/home/cert-bg.png)`,
      }}
    >
      <div className="container py-2 sm:py-10 text-white-100 flex flex-col sm:gap-6">
        <h1 className="text-[40px] leading-[48px] font-bold">{title}</h1>
        <p className="max-w-[800px] text-sm sm:text-xl">{content}</p>
      </div>
    </div>
  );
};

export default BannerContent;
