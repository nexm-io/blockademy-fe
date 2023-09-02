import twitter from "@/public/icons/twitter.svg";
import facebook from "@/public/icons/facebook.svg";
import share from "@/public/icons/share.svg";
import copy from "@/public/icons/copy.svg";
import Image from "next/image";

const ArticleShare = () => {
  return (
    <div className="md:pt-14">
      <span className="block font-medium text-[20px] text-black-100 mb-6 leading-28px px-6 md:px-0">
        Share Posts
      </span>
      <div className="flex gap-4 md:gap-[42px] justify-around md:justify-start">
        <Image alt="social" src={twitter} className="cursor-pointer w-8 h-8" />
        <Image alt="social" src={facebook} className="cursor-pointer w-8 h-8" />
        <Image alt="social" src={share} className="cursor-pointer w-8 h-8" />
        <Image alt="social" src={copy} className="cursor-pointer w-8 h-8" />
      </div>
    </div>
  );
};

export default ArticleShare;
