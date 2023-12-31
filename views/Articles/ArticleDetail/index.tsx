"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import ArticlesSection from "@/views/Articles/ArticleSection";
import ArticleHeading from "@/views/Articles/ArticleHeading";
import ArticleShare from "@/views/Articles/ArticleShare";
import ArticleTag from "@/views/Articles/ArticlesTag";
import IsLoginForm from "@/components/isLoginForm";
import ArticleRelate from "@/views/Articles/ArticleRelate";
import { useEffect, useState } from "react";
import { getArticleDetail } from "@/redux/features/articles/action";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import { toast } from "react-toastify";
import TagItemSkeleton from "@/components/TagItemSkeleton";
import Head from "next/head";
import { useRouter } from "next/navigation";
import BackToTop from "@/components/BackToTop";

const ArticleDetailPage = ({ params }: { params: { slug: string } }) => {
  const detailArticle = useAppSelector((state) => state.articles.detail);
  const is_loading = useAppSelector((state) => state.articles.isChange);
  const isLogin = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTrigger = 0.5;
      const hideTrigger = 0.9;

      const shouldShowBackToTop = scrollPosition / pageHeight >= scrollTrigger;
      const shouldHideBackToTop = scrollPosition / pageHeight >= hideTrigger;

      setShowBackToTop(shouldShowBackToTop);
      if (shouldHideBackToTop) {
        setBottom(true);
      } else {
        setBottom(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getDetail = async () => {
      const { payload } = await dispatch(getArticleDetail(`${params.slug}`));
      if ((payload as any)?.response?.data?.error) router.push("/not-found");
    };
    getDetail();
  }, [dispatch, params.slug]);

  const copyCurrentURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error("Copied Failed");
      });
  };

  return (
    <div className="relative">
      {is_loading ? (
        <div className="my-[60px]">
          <div className="flex gap-2 mb-[48px]">
            {Array.from({ length: 7 }, (_, index) => (
              <>
                <TagItemSkeleton className="w-[70px] h-[22px]" />
              </>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <SkeletionCard height="30px" width="400px" radius="16px" />
            <SkeletionCard height="70px" width="600px" radius="16px" />
            <div className="flex gap-3">
              <TagItemSkeleton className="w-[100px] h-[28px]" />
              <TagItemSkeleton className="w-[170px] h-[28px]" />
              <TagItemSkeleton className="w-[90px] h-[28px]" />
            </div>
            <SkeletionCard height="425px" width="760px" radius="16px" />
            <SkeletionCard height="600px" width="760px" radius="16px" />
          </div>
        </div>
      ) : (
        <>
          {detailArticle && (
            <>
              <Head>
                <meta
                  name="description"
                  content={detailArticle.title}
                  key="description"
                />
              </Head>
              <div className=" flex flex-col lg:gap-[85px] md:gap-16 xl:gap-[120px] mb-14 md:flex-row">
                <div className="md:pb-[75px] lg:px-0 md:px-4 px-6 pb-8 md:w-[75%] w-full">
                  <ArticleTag tags={detailArticle.tags} />
                  <ArticleHeading
                    level={detailArticle.level}
                    title={detailArticle.title}
                    date={detailArticle.created_at}
                    duration={detailArticle.read_time}
                  />
                  {/* <ArticleSummary /> */}
                  <ArticlesSection
                    sections={detailArticle.content}
                    author={detailArticle.user}
                    date={detailArticle.created_at}
                  />
                </div>
                <div className="w-full md:w-[25%] ">
                  <div className="sticky top-[30px] flex flex-col lg:gap-[75px] md:gap-10 gap-4">
                    <ArticleShare
                      copyCurrentURL={copyCurrentURL}
                      title={detailArticle.title}
                    />
                    {/* <ArticlesLine onTitleClick={handleTitleClick} data={array} /> */}
                    <ArticleRelate id={detailArticle.id} />
                    {!isLogin && <IsLoginForm />}
                  </div>
                </div>
              </div>
              {showBackToTop && <BackToTop />}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleDetailPage;
