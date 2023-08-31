import BreadCumb from "@/components/BreadCumb";
import Chip from "@/components/Common/Chip";
import banner from "@/public/images/home/article.png";
import clockIcon from "@/public/icons/clock.svg";
import Image from "next/image";
const ArticleHeading = () => {
  return (
    <>
      <div>
        <Image alt="banner" src={banner} className="w-full" />
        <div className="py-6">
          <BreadCumb />
        </div>
        <h1 className="text-[45px] font-bold text-black-100 mb-[27px]">
          Bitcoin Spot ETF vs. Bitcoin Futures ETF: Whats the Difference?
        </h1>
      </div>
      <div className="flex lg:mt-7 w-full justify-start gap-[24px] mr-6 items-center mb-14">
        <Chip size="small" label="Newbie" newbie />
        <span className="text-xs font-normal text-gray-300 leading-[23px]">
          Published Jun 21, 2023
        </span>
        <div className="flex gap-1 items-center text-gray-300">
          <Image alt="" src={clockIcon}></Image>
          <span className="text-xs font-normal leading-4">7m</span>
        </div>
      </div>
    </>
  );
};

export default ArticleHeading;
