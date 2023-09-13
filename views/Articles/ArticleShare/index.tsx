"use client";
import { FacebookCircle } from "@styled-icons/boxicons-logos";
import { CursorFill } from "@styled-icons/bootstrap";
import { FileCopy } from "@styled-icons/remix-line";
import { Twitter } from "@/components/Icon";
import Link from "next/link";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "next-share";

interface ArticleShareProps {
  copyCurrentURL?: () => void;
  shareOnFacebook?: () => void;
  title?: string;
}

const ArticleShare: React.FC<ArticleShareProps> = ({
  copyCurrentURL,
  shareOnFacebook,
  title,
}) => {
  return (
    <div className="md:pt-14">
      <span className="block font-medium text-[20px] text-black-100 mb-6 leading-28px px-6 md:px-0">
        Share Posts
      </span>
      <div className="flex gap-4 md:gap-[42px] items-center justify-around md:justify-start">
        {/* <Image alt="social" src={twitter} className="cursor-pointer w-8 h-8" /> */}
        <Link href="#" className="w-7 h-7 flex items-center justify-center">
          <TwitterShareButton url={window.location.href} title={title}>
            <Twitter className="hover:fill-blue-100 w-6 h-6 fill-gray-300" />
          </TwitterShareButton>
        </Link>
        <div className="w-7 h-7" onClick={shareOnFacebook}>
          <FacebookShareButton url={window.location.href} quote={title}>
            {/* <FacebookIcon size={32} round /> */}
            <FacebookCircle className="hover:fill-blue-100 w-full h-full fill-gray-300" />
          </FacebookShareButton>
        </div>
        <Link href="#" className="w-7 h-7 ">
          <TelegramShareButton url={window.location.href} title={title}>
            <CursorFill className="hover:fill-blue-100 w-full h-full fill-gray-300" />
          </TelegramShareButton>
        </Link>
        <div className="w-7 h-7 cursor-pointer" onClick={copyCurrentURL}>
          <FileCopy className="hover:fill-blue-100 w-full h-full fill-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default ArticleShare;
