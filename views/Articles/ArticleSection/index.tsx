"use client";
import React from "react";

export default function ArticlesSection({ sections, id }: any) {
  return (
    <div className="md:mt-12 mt-6 md:px-12 px-8">
      {sections.map((section: any, sectionIndex: any) => (
        <div className="mb-6" key={sectionIndex}>
          <h2
            id={id}
            key={id}
            className="font-bold leading-[40px] text-black-100 text-[30px] mb-4"
          >
            What Is an ETF?
          </h2>
          <div className="flex flex-col md:gap-10 gap-4 text-xl text-black-400 text-justify">
            <span className="block leading-8">
              An Exchange Traded Fund (ETF) is a type of investment fund
              that&apos;s traded on stock exchanges, much like stocks. These
              funds usually hold a variety of assets such as stocks,
              commodities, or cryptocurrencies and aim to track the performance
              of a specific index or asset.
            </span>
            <span className="block leading-8">
              For example, an S&P 500 ETF holds shares of the companies listed
              in the S&P 500 index, seeking to mimic the performance of the
              index. If the index changes its components, the ETF manager
              adjusts the fund&apos;s holdings to reflect those changes in order
              to continue tracking the index&apos;s composition and performance.
            </span>
            <span className="block leading-8">
              Unlike mutual funds, which have their net asset value (NAV)
              calculated once at the end of each trading day, ETFs are traded on
              stock exchanges and can be bought and sold throughout the trading
              day at market prices that fluctuate based on supply and demand.
            </span>
            <span className="block leading-8">
              {" "}
              Although the NAV of ETFs is calculated multiple times during the
              trading day, it&apos;s the market price that investors use for
              trading. This provides investors with greater liquidity and
              flexibility compared to mutual funds. Moreover, investors can
              employ various trading strategies such as short selling or buying
              on margin with ETFs, options that aren&apos;t typically available
              with mutual funds.
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
