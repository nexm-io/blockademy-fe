import { getRelateArticle } from "@/redux/features/articles/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ArticleRelate = ({ id }: { id: number }) => {
  const relateList = useAppSelector(state => state.articles.data);
const dispatch = useAppDispatch()
  useEffect(() => {
    const getListArticle = async () => {
      await dispatch(getRelateArticle(id))
    } 
    getListArticle();
  }, [dispatch])
  
  return (
    <div className="flex flex-col gap-6 px-4 md:px-0 mt-8 md:mt-0">
      <span className="block font-semibold text-[20px] text-black-100 leading-28px">
        Related Articles
      </span>
      {relateList ? relateList.map((post, index: number) => (
        <Link href="#" key={index}>
          <div className="flex flex-col md:max-w-[250px]">
            <Image
              alt="img-post"
              width={250}
              height={150}
              src={post.image.original_image}
              className="rounded-2xl w-full mb-2"
            />
            <span className="text-black-100 leading-6 font-semibold">
              {post.title}
            </span>
          </div>
        </Link>
      )) : <div>Loading...</div>}
    </div>
  );
};

export default ArticleRelate;
