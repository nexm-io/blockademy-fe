"use client";
import React from "react";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
interface TopBodyProps {
  urlApi?: string;
}

const TopBody: React.FC<TopBodyProps> = () => {
  const { push } = useRouter();

  return (
    <section className="flex flex-col lg:flex-row items-center gap-5 justify-between w-full mt-28 lg:mt-36">
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          The best way to learn math and <br className="hidden md:block" />{" "}
          computer science
        </h1>
        <p className="text-gray-100 text-base">
          {`Guided interactive problem solving that's effective and fun.`}{" "}
          <br className="hidden sm:block" />
          {`Master concepts in 15 minutes a day.`}
        </p>

        <div className="mt-3">
          <Button className="lg:!px-6" onClick={() => push("/courses")}>
            <span className="font-bold">Get start</span>
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-4/6 flex justify-center">
        <video autoPlay muted loop preload="auto" playsInline>
          <source src="/videos/landingpage_cs.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default TopBody;
