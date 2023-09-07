import React from "react";
import Link from "next/link";
import Image from "next/image";
import registerbg from "@/public/icons/registerbg.svg";

interface GraphicProps {
  description?: string;
  coming_soon?: boolean;
  color_text?: string;
  error?: boolean;
}

export default function InfoGraphic(props: GraphicProps) {
  const {
    description = "Follow the registration steps to redeem your rewards and start your crypto journey with us!",
    coming_soon = false,
    color_text,
    error = false,
  } = props;
  return (
    <div className="w-full lg:w-[424px] flex flex-col items-center justify-center">
      <div className="px-9">
        <Image
          alt="background"
          src={registerbg}
          width={400}
          height={222}
          className=""
        />
      </div>
      {coming_soon && (
        <h2 className="md:text-[46px] text-3xl font-bold text-white-300 md:mt-[70px] mt-10">
          Coming soon
        </h2>
      )}
      {error && (
        <h2 className="md:text-[106px] text-3xl font-bold text-white-300 md:mt-[70px] mb-6">
          404
        </h2>
      )}
      <p
        className={`${color_text} text-sm leading-[22px] mt-6 mb-5 text-center md:max-w-[440px] max-w-full px-6 md:px-0`}
      >
        {description}
      </p>
    </div>
  );
}
