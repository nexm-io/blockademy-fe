import CardItemSkeleton from "@/components/CardItemSkeleton";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import { getRelateArticle } from "@/redux/features/articles/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import defaultImg from "@/public/images/home/home-default.png";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";

const ArticleRelate = ({ id }: { id: number }) => {
  const relateList = useAppSelector((state) => state.articles.data);
  const isLoading = useAppSelector((state) => state.articles.isLoading);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getListArticle = async () => {
      await dispatch(getRelateArticle(id));
    };
    getListArticle();
  }, [dispatch, id]);

  return (
    <div className="flex flex-col gap-6 px-4 md:px-0 mt-8 md:mt-0">
      <span className="block font-semibold text-[20px] text-black-100 leading-28px">
        Related Articles
      </span>
      {(!isLoading && relateList) ? (
        relateList.map((post, index: number) => (
          <Link href={`/articles/${post.slug}`} key={index}>
            <div className="flex flex-col md:max-w-[250px]">
              <Image
                alt="img-post"
                width={250}
                height={150}
                src={
                  post.image
                    ? post.image.original_image || post.image.thumbnail
                    : post.image === ""
                    ? defaultImg
                    : defaultImg
                }
                className="rounded-2xl mb-2 w-[250px] h-[130px]"
                placeholder="blur"
                blurDataURL={PLACEHOLDER_BASE64}
              />
              <span className="text-black-100 leading-6 font-semibold">
                {post.title}
              </span>
            </div>
          </Link>
        ))
      ) : (
        <>
          {Array.from({ length: 3 }, (_, index) => (
            <>
              <div className="flex flex-col gap-2">
                <SkeletionCard width="250px" height="140px" radius="16px" />
                <SkeletionCard width="250px" height="30px" radius="16px" />
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ArticleRelate;
