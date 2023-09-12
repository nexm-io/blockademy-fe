"use client";

import Image from "next/image";
import React from "react";
import search from "@/public/icons/search.svg";
import Button from "@/components/Common/Button";
import arrowright from "@/public/icons/righticon.svg";
import { ArrowRightShort } from "@styled-icons/bootstrap";

const Glossary = () => {
  return (
    <section className="md:mt-[106px] mt-[60px]">
      <div className="flex md:flex-row flex-col gap-[60px] pl-4">
        <div className="flex flex-col ">
          <span className="text-blue-100 font-bold text-[60px] md:text-[80px] leading-[72px]">
            25
          </span>
          <p className="text-gray-100 text-[20px] font-normal mt-[20px] md:mb-[67px] mb-5">
            This is the term count in our glossary. How many of these do you
            know?
          </p>
          <div className="flex items-center gap-[15px] border-b border-gray-300 w-[283px] p-2">
            <Image alt="search-icon" src={search}></Image>
            <input
              id="glossary"
              placeholder="Glossary search"
              className="outline-none border-none"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 md:mr-5 mr-0 lg:mr-0">
          <div className="w-[358px] h-[328px] bg-white-100 card-shadow rounded-2xl p-6 text-black-100 flex flex-col justify-between">
            <div>
              <div className="rounded-full bg-black-100 text-white-100 text-[11px] flex items-center justify-center w-fit h-[22px] py-1 px-[15px]">
                Glossary
              </div>
              <h2 className="text-[30px] font-bold my-4">The zk-SNARK</h2>
              <span className="line w-[32px] h-[4px] bg-blue-100 rounded-[4px] block mb-4"></span>
              <p className="font-normal text-base">
                “Zero-Knowledge Succinct Non- Interactive Argument of knowledge.
                Zero-knowledge argument is non-interactive...
              </p>
            </div>
            <div>
              <Button
                size="small"
                className="bg-gray-200 !text-black-100 hover:!text-white-100 hover:!bg-black-100 px-[26px]"
              >
                <div className="flex items-center gap-4">
                  <span>Full definition</span>
                  <ArrowRightShort size={30} className="text-black-100" />
                </div>
              </Button>
            </div>
          </div>
          <div className="w-[358px] bg-white-100 card-shadow rounded-2xl p-6 text-black-100 flex flex-col justify-between">
            <div>
              <div className="rounded-full bg-black-100 text-white-100 text-[11px] flex items-center justify-center w-fit h-[22px] py-1 px-[15px]">
                Glossary
              </div>
              <h2 className="text-[30px] font-bold my-4">Merkle Tree</h2>
              <span className="line w-[32px] h-[4px] bg-blue-100 rounded-[4px] block mb-4"></span>
              <p className="font-normal text-base">
                A way of organizing and structuring large amounts of data for
                easier processing. A function-based data structure...
              </p>
            </div>
            <div>
              <Button
                size="small"
                className="bg-gray-200 !text-black-100 hover:!text-white-100 hover:!bg-black-100 px-[26px]"
              >
                <div className="flex items-center gap-4">
                  <span>Full definition</span>
                  <ArrowRightShort size={30} className="text-black-100" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
