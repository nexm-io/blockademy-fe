import Image from "next/image";
import React from "react";
import vectorIcon from "@/public/icons/arrowright.svg";
import cardImg from "@/public/images/home/home-1.png";
import CardItem from "@/components/CardItem";

interface ListCardProps {
  cardTitle: string;
  cardLabel: string;
  mTop?: string;
}

const ListCard: React.FC<ListCardProps> = ({ cardTitle, cardLabel, mTop }) => {
  return (
    <section className={`${mTop}`}>
      <div className="flex justify-between lg:mb-[40px] mb-4 items-center mx-4 lg:mx-0">
        <h4 className="text-black-100 font-normal leading-[28px] md:text-xl text-base">
          {cardTitle}
        </h4>
        <div className="bg-gray-200 h-6 px-5 gap-[6px] inline-flex justify-center items-center flex-shrink-0 rounded-[30px] cursor-pointer">
          <span className="text-black-100 text-xs font-normal uppercase">
            see all {cardLabel}
          </span>
          <Image alt="vector" src={vectorIcon}></Image>
        </div>
      </div>
      <div className="flex lg:gap-[47px] gap-8 ml-4 lg:ml-0 md:flex-row flex-col md:flex-wrap">
        <CardItem
          imgSrc={cardImg}
          nftTags={["NFT", "Altcoin", "+2"]}
          title="Gaming Coin, What is Cryptocurrency?,Gaming Coin, What is Cryptocurrency?"
          buttonLabel="Beginner"
          date="Aug 15, 2023"
          timeDuration="9m"
        />
        <CardItem
          imgSrc={cardImg}
          nftTags={["NFT", "Altcoin", "+2"]}
          title="Gaming Coin, What is Cryptocurrency?"
          buttonLabel="Beginner"
          date="Aug 15, 2023"
          timeDuration="9m"
        />
        <CardItem
          imgSrc={cardImg}
          nftTags={["NFT", "Altcoin", "+2"]}
          title="Gaming Coin, What is Cryptocurrency?"
          buttonLabel="Beginner"
          date="Aug 15, 2023"
          timeDuration="9m"
        />
      </div>
    </section>
  );
};

export default ListCard;
