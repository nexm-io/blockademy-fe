"use client";
import Button from "@/components/Common/Button";
import Image from "next/image";
import React, { useState } from "react";
import arrow from "@/public/icons/arrowbottom.svg";
import CardItem from "@/components/CardItem";
import cardImg from "@/public/images/home/home-1.png";
import ReactPaginate from "react-paginate";
import Dropdown from "@/components/Common/Dropdown";

const options = [
  "Recently published",
  "Mostly viewed",
  "Recently published",
  "Recently updated",
];

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const pageCount = 24;

const itemsPerPage = 20;
const ArticleLists = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <section>
      <div className="flex justify-between mt-[39px] mb-6">
        <h2 className="text-black-100 font-bold text-[23px] leading-8 ">
          Articles
        </h2>
        <div>
          <Dropdown options={options}>
            <Image alt="arrow-bottom" src={arrow}></Image>
          </Dropdown>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {Array.from({ length: 15 }, (_, index) => (
          <CardItem
            key={index}
            imgSrc={cardImg}
            nftTags={["NFT", "Altcoin", "+2"]}
            title="Gaming Coin Tiền Mã Hóa Là Gì?"
            buttonLabel="Beginner"
            date="Aug 15, 2023"
            timeDuration="9m"
          />
        ))}
      </div>
      <div className="my-[60px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination flex items-center justify-center gap-6"
        />
      </div>
    </section>
  );
};

export default ArticleLists;
