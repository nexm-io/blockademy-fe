import BreadCrumb from "@/components/BreadCrumb";
import Chip from "@/components/Common/Chip";
import clockIcon from "@/public/icons/clock.svg";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { UserArticle } from "@/redux/features/articles/type";
import Link from "next/link";
const ArticleHeading = ({
  title,
  date,
  level,
  duration,
}: {
  title: string;
  date: string;
  level?: string;
  duration: number;
}) => {
  return (
    <>
      <div>
        <div className="py-6">
          <BreadCrumb />
        </div>
        <h1 className="md:text-[45px] text-3xl font-bold text-black-100 leading-10 md:leading-[46px] mb-[27px] px-4 md:px-0">
          {title}
        </h1>
      </div>
      <div className="flex lg:mt-7 w-full justify-start gap-[24px] mr-6 items-center mb-4 mx-4 md:mx-0">
        <Chip size="small" labelDetails={level} levelDetail={level} />

        <span className="text-xs font-normal text-gray-300 leading-[23px]">
          Published {formatDate(date)}
        </span>

        <div className="flex gap-1 items-center text-gray-300">
          <Image alt="" src={clockIcon}></Image>
          <span className="text-xs font-normal leading-4">{duration} mins</span>
        </div>
      </div>
    </>
  );
};

export default ArticleHeading;
