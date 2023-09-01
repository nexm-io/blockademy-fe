import React from 'react'
import ads from "@/public/images/home/ads.png";
import Image from "next/image";

export default function ArticleSummary() {
  return (
    <div className="px-12 flex flex-col gap-7 w-full">
            <h2 className="">TR,TD</h2>
            <ul
              className={`list-disc space-y-8 ml-5 text-gray-100 text-xl w-full`}
            >
              <li>
                A Bitcoin ETF, or Exchange Traded Fund for Bitcoin, allows
                investors to gain exposure to the price movements of Bitcoin
                without actually owning or managing Bitcoin directly
              </li>
              <li>
                The key differences between Bitcoin Spot ETFs and Bitcoin
                Futures ETFs include their underlying assets, performance
                drivers, liquidity needs, potential price divergence, and
                exposures.
              </li>
              <li>
                Bitcoin ETFs have emerged as a bridge, allowing traditional
                investors a taste of the cryptocurrency world
              </li>
              <li>
                Financial institutions including BlackRock, Invesco, Ark Invest,
                and Fidelity have submitted applications for Bitcoin Spot ETFs.
                There could potentially be more Bitcoin ETFs available for
                investors if these get approved.
              </li>
            </ul>
            <Image alt="ads" src={ads} className="rounded-lg" />
          </div>
  )
}
