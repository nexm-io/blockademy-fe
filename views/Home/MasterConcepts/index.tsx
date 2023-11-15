"use client";
import React from "react";
import ImgLearn from "@/public/images/home/master-concepts/learn-at-your-level.png";
import ImgGuided from "@/public/images/home/master-concepts/guided-lessons.png";
import ImgMotivated from "@/public/images/home/master-concepts/stay-motivated.png";
import Image from "next/image";
import cn from "@/services/cn";

const MASTER_CONTENT = [
  {
    image: "",
    isVideo: true,
    src: "/videos/hands-on-learning.mp4",
    title: "Effective, hands-on learning",
    reverse: false,
    width: 500,
    height: 338,
    desc: "Elevate your understanding of blockchain through visually engaging, interactive lessons that render complex concepts intuitive. Benefit from real-time feedback and straightforward explanations for an efficient and effective learning experience.",
  },
  {
    image: ImgLearn,
    title: "Learn at your level",
    reverse: true,
    width: 488,
    height: 330,
    desc: "Whether you’re a student or a professional, unlock new skills or refine existing ones with lessons and challenges crafted just for you.",
  },
  {
    image: ImgGuided,
    title: "Guided bite-sized lessons",
    reverse: false,
    width: 500,
    height: 330,
    desc: "Simplify your journey in the blockchain domain with seamless progress tracking, ensuring you stay on course, witness your advancements, and enhance your problem-solving skills, one concept at a time.",
  },
  {
    image: ImgMotivated,
    title: "Stay motivated",
    reverse: true,
    width: 488,
    height: 264,
    desc: "Cultivate a genuine learning routine with enjoyable content, consistently paced lessons, gamified progress tracking, and friendly reminders in the realm of blockchain education.",
  },
];

const MasterConcepts = () => {
  return (
    <section className="mt-10 sm:mt-20 w-full">
      <div className="flex flex-col gap-1 mb-12">
        <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          Master Blockchain Concepts in 15 Minutes a Day
        </h2>
        <p className="max-w-[806px] mx-auto text-center text-[#525252] text-base sm:text-xl font-bold">
          Explore blockchain effortlessly with Blockademy—simplified, enjoyable
          lessons for beginners and enthusiasts alike. Master the intricacies at
          your own pace and unlock the world of blockchain mastery.
        </p>
      </div>
      <div className="flex flex-col gap-10 lg:gap-0">
        {MASTER_CONTENT.map((z, index) => (
          <div
            key={index}
            className="md:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 group"
          >
            <div className="overflow-hidden flex justify-center">
              {z.isVideo ? (
                <video autoPlay muted loop preload="auto" playsInline>
                  <source src={z.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={z.image}
                  width={z.width}
                  height={z.height}
                  alt={z.title}
                  className="group-hover:scale-105 transition-all duration-300 w-full"
                />
              )}
            </div>
            <div
              className={cn(`flex flex-col gap-2 sm:gap-5 md:px-8`, {
                "lg:-order-1": z.reverse,
              })}
            >
              <h3 className="text-xl sm:text-[28px] leading-[33px] font-bold text-blue-100">
                {z.title}
              </h3>
              <p className="text-[#525252] text-base sm:text-xl leading-8">
                {z.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasterConcepts;
