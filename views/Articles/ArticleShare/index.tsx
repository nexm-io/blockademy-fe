import twitter from "@/public/icons/twitter.svg";
import facebook from "@/public/icons/facebook.svg";
import share from "@/public/icons/share.svg";
import copy from "@/public/icons/copy.svg";
import Image from "next/image";

const ArticleShare = () => {
  return (
    <div className="md:pt-14">
      <span className="block font-medium text-[20px] text-black-100 mb-6 leading-28px">
        Share Posts
      </span>
      <div className="flex gap-4 md:gap-[42px] justify-around md:justify-start">
        <Image alt="social" src={twitter} />
        <Image alt="social" src={facebook} />
        <Image alt="social" src={share} />
        <Image alt="social" src={copy} />
      </div>
    </div>
  );
};

export default ArticleShare;
