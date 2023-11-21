"use client";
import cn from "@/services/cn";
import { TOPIC_LIST } from "@/utils/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GuidedBlockchain from "@/public/images/home/guided/blockchain.png";

const GUIDED_OPTIONS = [
  {
    id: "blockchain",
    title: "Courses in Blockchain",
    steps: [
      "Solving Equations",
      "Measurement",
      "Mathematical Fundamentals",
      "Geometry I",
      "Reasoning with Algebra",
      "Functions and Quadratics",
    ],
    image: GuidedBlockchain,
  },
  {
    id: "backend",
    title: "Courses in Backend",
    steps: [
      "Solving Equations",
      "Measurement",
      "Mathematical Fundamentals",
      "Geometry I",
      "Reasoning with Algebra",
      "Functions and Quadratics",
    ],
    image: GuidedBlockchain,
  },
  {
    id: "frontend",
    title: "Courses in Frontend",
    steps: [
      "Solving Equations",
      "Measurement",
      "Mathematical Fundamentals",
      "Geometry I",
      "Reasoning with Algebra",
      "Functions and Quadratics",
    ],
    image: GuidedBlockchain,
  },
  {
    id: "mobile",
    title: "Courses in Mobile",
    steps: [
      "Solving Equations",
      "Measurement",
      "Mathematical Fundamentals",
      "Geometry I",
      "Reasoning with Algebra",
      "Functions and Quadratics",
    ],
    image: GuidedBlockchain,
  },
  {
    id: "game",
    title: "Courses in Game",
    steps: [
      "Solving Equations",
      "Measurement",
      "Mathematical Fundamentals",
      "Geometry I",
      "Reasoning with Algebra",
      "Functions and Quadratics",
    ],
    image: GuidedBlockchain,
  },
  {
    id: "qc",
    title: "Courses in QC",
    steps: [
      "Solving Equations",
      "Measurement",
      "Mathematical Fundamentals",
      "Geometry I",
      "Reasoning with Algebra",
      "Functions and Quadratics",
    ],
    image: GuidedBlockchain,
  },
];

const GuidedCourses = () => {
  const [topicSelected, setTopicSelected] = useState(TOPIC_LIST[0].id);
  const [guide, setGuide] = useState(GUIDED_OPTIONS[0]);

  useEffect(() => {
    const guideForTopic = GUIDED_OPTIONS.find((z) => z.id === topicSelected);
    if (guideForTopic) setGuide(guideForTopic);
  }, [topicSelected]);

  return (
    <section className="mt-10 w-full">
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-1">
          <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
            Guided courses for every journey
          </h2>
          <p className="max-w-[806px] mx-auto text-center text-[#525252] text-base sm:text-xl font-bold">
            All of our courses are crafted by award-winning teachers,
            researchers, and professionals from MIT, Caltech, Duke, Microsoft,
            Google, and more.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {TOPIC_LIST.map((topic) => (
            <div
              className={cn(
                `flex-1 flex items-center gap-4 rounded-md border border-[#ccc] px-[14px] py-2 cursor-pointer hover:border-blue-100 transition-all`,
                {
                  "bg-[#E9F2FD] !border-blue-100": topicSelected === topic.id,
                }
              )}
              key={topic.id}
              onClick={() => setTopicSelected(topic.id)}
            >
              <Image width={28} height={28} src={topic.img} alt={topic.title} />
              <p className="text-xs text-[#666] tracking-widest uppercase">
                {topic.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-start flex-wrap gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-[22px] font-bold leading-8">{guide.title}</h3>
            <div className="relative">
              <div className="absolute left-[7px] w-[2px] bg-blue-100 top-2 bottom-2"></div>
              <ul className="flex flex-col gap-6">
                {guide.steps.map((step, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-blue-100"></span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <video
            width={767}
            height={472}
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          >
            <source src="/videos/guided.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default GuidedCourses;
