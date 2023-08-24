import Image from "next/image";
import React from "react";
import vectorIcon from "../../public/arrowright.svg";
import CardItem from "../CardItem";
import cardImg from "../../public/images/img.png";

const LatestCard = () => {
  return (
    <section className="mt-[60px]">
      <div className="flex justify-between lg:mx-[145px] mx-4 lg:mb-[40px] mb-4 items-center">
        <h4 className="text-black-100 font-normal leading-[28px] text-xl">
          Latest Releases
        </h4>
        <div className="bg-gray-200 h-6 px-5 gap-[6px] inline-flex justify-center items-center flex-shrink-0 rounded-[30px]">
          <span className="text-black-100 text-xs font-normal uppercase">
            see all latest releases{" "}
          </span>
          <Image alt="vector" src={vectorIcon}></Image>
        </div>
      </div>
      <div className="flex lg:gap-[47px] gap-8 lg:mx-[145px] mx-4 md:flex-row flex-col md:flex-wrap">
        <CardItem
          imgSrc={cardImg}
          nftTags={["NFT", "Altcoin", "+2"]}
          title="Gaming Coin Tiền Mã Hóa Là Gì?"
          buttonLabel="Beginner"
          date="Aug 15, 2023"
          timeDuration="9m"
        />
        <CardItem
          imgSrc={cardImg}
          nftTags={["NFT", "Altcoin", "+2"]}
          title="Gaming Coin Tiền Mã Hóa Là Gì?"
          buttonLabel="Beginner"
          date="Aug 15, 2023"
          timeDuration="9m"
        />
        <CardItem
          imgSrc={cardImg}
          nftTags={["NFT", "Altcoin", "+2"]}
          title="Gaming Coin Tiền Mã Hóa Là Gì?"
          buttonLabel="Beginner"
          date="Aug 15, 2023"
          timeDuration="9m"
        />
      </div>
    </section>
  );
};

export default LatestCard;
