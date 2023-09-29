import GiftHeader from "@/components/GiftHeader";
import Link from "next/link";
import ArticleDetailPage from "@/views/Articles/ArticleDetail";


import { Metadata, ResolvingMetadata } from 'next';
import axios from "axios";

type Props = {
  params: { slug: string };
};

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <GiftHeader />
      <ArticleDetailPage params={params} />
      <div className=" full-bleed__footerArticle flex justify-center items-center bg-blue-100  text-white-100 h-[80px]">
        <Link href="/articles">
          <span className="cursor-pointer">Explore all of our content</span>
        </Link>
        <span className="ml-5 font-bold cursor-pointer">&rarr;</span>
      </div>
    </>
  );
}
