
import BreadCumb from "@/components/BreadCumb";
import banner from "@/public/images/home/article.png";
import Image from "next/image";
export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="h-screen flex">
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
          <div className="py-6"><BreadCumb /></div>
        </div>
      </div>
      <div className="w-[25%] bg-red-500"></div>
    </div>
  );
}
