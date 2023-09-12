import React from "react";
import ads from "@/public/images/home/ads.png";
import Image from "next/image";

export default function ArticleSummary() {
  return (
    <div className="px-8 md:px-12 flex flex-col md:gap-7 gap-4 w-full">
      <h2 className="font-semibold">TR,TD</h2>
      <ul
        className={`list-disc md:space-y-8 space-y-4 ml-5 text-gray-100 text-xl w-full`}
      >
        <li className="text__spacing pr-4">
          A Bitcoin ETF, or Exchange Traded Fund for Bitcoin, allows investors
          to gain exposure to the price movements of Bitcoin without actually
          owning or managing Bitcoin directly
        </li>
        <li className="text__spacing pr-4">
          The key differences between Bitcoin Spot ETFs and Bitcoin Futures ETFs
          include their underlying assets, performance drivers, liquidity needs,
          potential price divergence, and exposures.
        </li>
        <li className="text__spacing pr-4">
          Bitcoin ETFs have emerged as a bridge, allowing traditional investors
          a taste of the cryptocurrency world
        </li>
        <li className="text__spacing pr-4">
          Financial institutions including BlackRock, Invesco, Ark Invest, and
          Fidelity have submitted applications for Bitcoin Spot ETFs. There
          could potentially be more Bitcoin ETFs available for investors if
          these get approved.
        </li>
      </ul>
      <Image alt="ads" src={ads} className="rounded-lg" />
    </div>
  );
}
