"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import ArticlesSection from "@/views/Articles/ArticleSection";
import ArticleHeading from "@/views/Articles/ArticleHeading";
import ArticleShare from "@/views/Articles/ArticleShare";
import ArticleTag from "@/views/Articles/ArticlesTag";
import IsLoginForm from "@/components/isLoginForm";
import ArticleRelate from "@/views/Articles/ArticleRelate";
import { useEffect } from "react";
import { getArticleDetail } from "@/redux/features/articles/action";

const ArticleDetailPage = ({
    params,
  }: {
    params: { slug: string };
  }) => {
    const detailArticle = useAppSelector((state) => state.articles.detail);
    const isLogin = useAppSelector((state) => state.auth.isAuthenticated);
    
    const dispatch = useAppDispatch();
    useEffect(() => {
      const getDetail = async () => {
        await dispatch(getArticleDetail(`${params.slug}`));
      };
      getDetail();
    }, [dispatch]);

    return (
        <>
             {!detailArticle ? (
        <div>Loaing...</div>
      ) : (
        <>
          <div className=" flex flex-col md:gap-[85px] xl:gap-[170px] mb-14 md:flex-row">
            <div className="md:pb-[75px] lg:px-0 md:px-4 px-6 pb-8 md:w-[75%] w-full">
              <ArticleTag tags={detailArticle.tags}/>
              <ArticleHeading title={detailArticle.title} date={detailArticle.created_at}/>
              {/* <ArticleSummary /> */}
              <ArticlesSection
                sections={detailArticle.content}
              />
            </div>
            <div className="w-full md:w-[25%] ">
              <div className="sticky top-[30px] flex flex-col md:gap-[75px] gap-4">
                <ArticleShare />
                {/* <ArticlesLine onTitleClick={handleTitleClick} data={array} /> */}
                <ArticleRelate id={detailArticle.id} />
                {!isLogin && <IsLoginForm />}
              </div>
            </div>
          </div>
        </>
      )}
        </>
    )
}

export default ArticleDetailPage