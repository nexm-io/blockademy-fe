"use client";
import cn from "@/services/cn";
import { TOPIC_LIST } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topics = () => {
  return (
    <section className="mt-16 w-full">
      <div className="flex items-center">
        {TOPIC_LIST.map((topic) => (
          <div
            className={cn(`flex-1 border-r border-transparent`, {
              "border-r-[#CCC]":
                topic.id !== TOPIC_LIST[TOPIC_LIST.length - 1].id,
            })}
            key={topic.id}
          >
            <Link
              href="/"
              className={cn(
                `flex flex-col items-center justify-center gap-3 hover:-translate-y-2 transition-all duration-300 py-3`
              )}
              key={topic.id}
            >
              <Image width={66} height={66} src={topic.img} alt={topic.title} />
              <p className="text-lg">{topic.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topics;
