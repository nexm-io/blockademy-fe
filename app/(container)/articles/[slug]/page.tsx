import Link from "next/link";
import ArticleDetailPage from "@/views/Articles/ArticleDetail";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string; title?: string; description?: string 
};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Article Details",
    description: params.description || "Article Detail Description",
  };
}

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="relative container mt-[82.27px]">
      <ArticleDetailPage params={params} />
      <div className=" full-bleed__footerArticle flex justify-center items-center bg-blue-100  text-white-100 h-[80px]">
        <Link href="/articles">
          <span className="cursor-pointer">Explore all of our content</span>
        </Link>
        <span className="ml-5 font-bold cursor-pointer">&rarr;</span>
      </div>
    </div>
  );
}
