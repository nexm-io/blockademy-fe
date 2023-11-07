"use client";
import React from "react";
import ImgEffective from "@/public/images/home/master-concepts/effective.png";
import ImgLearn from "@/public/images/home/master-concepts/learn-at-your-level.svg.png";
import ImgGuided from "@/public/images/home/master-concepts/guided-lessons.png.png";
import ImgMotivated from "@/public/images/home/master-concepts/stay-motivated.svg.png";
import Image from "next/image";
import cn from "@/services/cn";

const MASTER_CONTENT = [
  {
    image: ImgEffective,
    title: "Effective, hands-on learning",
    reverse: false,
    width: 500,
    height: 338,
    desc: "Visual, interactive lessons make concepts feel intuitive — so even complex ideas just click. Our real-time feedback and simple explanations make learning efficient.",
  },
  {
    image: ImgLearn,
    title: "Learn at your level",
    reverse: true,
    width: 488,
    height: 330,
    desc: "Students and professionals alike can hone dormant skills or learn new ones. Progress through lessons and challenges tailored to your level. Designed for ages 13 to 113.",
  },
  {
    image: ImgGuided,
    title: "Guided bite-sized lessons",
    reverse: false,
    width: 500,
    height: 330,
    desc: "We make it easy to stay on track, see your progress, and build your problem solving skills one concept at a time.",
  },
  {
    image: ImgMotivated,
    title: "Stay motivated",
    reverse: true,
    width: 488,
    height: 264,
    desc: "Form a real learning habit with fun content that’s always well-paced, game-like progress tracking, and friendly reminders.",
  },
];

const MasterConcepts = () => {
  return (
    <section className="md:mt-[74px] mt-[40px] w-full">
      <div className="flex flex-col gap-1 mb-12">
        <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          Master concepts in 15 minutes a day
        </h2>
        <p className="max-w-[806px] mx-auto text-center text-[#525252] text-base sm:text-xl font-bold">
          Whether you’re a complete beginner or ready to dive into machine
          learning and beyond, Brilliant makes it easy to level up fast with
          fun, bite-sized lessons.
        </p>
      </div>
      <div className="flex flex-col gap-10 lg:gap-0">
        {MASTER_CONTENT.map((z, index) => (
          <div
            key={index}
            className="md:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 group"
          >
            <div className="overflow-hidden flex justify-center">
              <Image
                src={z.image}
                width={z.width}
                height={z.height}
                alt={z.title}
                className="group-hover:scale-105 transition-all duration-300 w-full"
              />
            </div>
            <div
              className={cn(`flex flex-col gap-2 sm:gap-5 md:px-8`, {
                "lg:-order-1": z.reverse,
              })}
            >
              <h3 className="text-xl sm:text-[28px] leading-[33px] font-bold text-blue-100">
                {z.title}
              </h3>
              <p className="text-[#525252] text-base sm:text-xl leading-8">{z.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasterConcepts;
