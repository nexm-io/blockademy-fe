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
          Unlocking the Power of Blockchain
        </h1>
        <p className="text-gray-100 text-base">
          Discover the world of blockchain technology and cryptocurrency with 
          <br className="hidden sm:block" />
          {" "}
          hands-on, interactive learning that’s both engaging and effective.
          <br className="hidden sm:block" />
          {" "}
          Master the fundamentals in just 15 minutes a day.
        </p>

        <div className="mt-3">
          <Button className="lg:!px-6" onClick={() => push("/courses")}>
            <span className="font-bold">Get Started </span>
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
