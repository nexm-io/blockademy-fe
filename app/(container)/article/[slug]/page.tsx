import clockIcon from "@/public/icons/clock.svg";
import BreadCumb from "@/components/BreadCumb";
import Button from "@/components/Common/Button";
import banner from "@/public/images/home/article.png";
import Image from "next/image";
export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className=" flex">
      <div className=" py-[74px] w-[75%]">
        <div className="flex gap-2 my-12">
          <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
            Trading
          </span>
          <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
            Bitcoin
          </span>
          <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
            Personal Finance
          </span>
        </div>
        <div>
          <Image alt="banner" src={banner} />
          <div className="py-6">
            <BreadCumb />
          </div>
          <h1 className="text-[45px] font-bold text-black-100 mb-[27px]">
            Bitcoin Spot ETF vs. Bitcoin Futures ETF: Whats the Difference?
          </h1>
        </div>
        <div className="flex lg:mt-7 w-[36%] justify-between mr-6 items-center mb-14">
          {/* TODO: chip component */}
          {/* <Button
            label={"Người mới"}
            className="w-[90px] px-2 py-2 text-xs font-normal leading-3 bg-green-900 text-gray-100 flex flex-row-reverse gap-2 items-center"
          >
            <span className="active w-[6px] h-[6px] rounded-[4px] bg-green-100"></span>
          </Button> */}
          <span className="text-xs font-normal text-gray-300 leading-[23px]">
            Published Jun 21, 2023
          </span>
          <div className="flex gap-1 items-center text-gray-300">
            <Image alt="" src={clockIcon}></Image>
            <span className="text-xs font-normal leading-4">7m</span>
          </div>
        </div>
        <div className="px-12">
          <h2>TR,TD</h2>
        </div>
      </div>
      <div className="w-[25%] bg-red-500"></div>
    </div>
  );
}
