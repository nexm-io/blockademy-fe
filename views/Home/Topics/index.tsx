"use client";
import { loadCategory, setCurrCategory } from "@/redux/features/category/action";
import { selectCategory } from "@/redux/features/category/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import cn from "@/services/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Topics = () => {
  const dispatch = useAppDispatch();
  const cateRx = useAppSelector(selectCategory);

  useEffect(() => {
    dispatch(loadCategory());
  }, []);

  return (
    <section className="mt-8 sm:mt-16 w-full">
      <div className="flex items-center flex-wrap">
        {cateRx.categoryLoading
          ? <div className="skeleton h-[130px] w-full"></div>
          : cateRx.data.map((cate: any) => (
              <div
                className={cn(`flex-1 border-r border-transparent`, {
                  "border-r-[#CCC]": true,
                })}
                key={cate.id}
              >
                <Link
                  href="/courses"
                  className={cn(
                    `flex flex-col items-center justify-center gap-3 hover:-translate-y-2 transition-all duration-300 py-3`
                  )}
                  key={cate.id}
                  onClick={()=> dispatch(setCurrCategory(cate.order))}
                >
                  <Image
                    className="w-[36px] h-[36px] md:w-[66px] md:h-[66px]"
                    width={66}
                    height={66}
                    src={`/icons/${cate.slug}.svg`}
                    alt={cate.slug}
                  />
                  <p className="text-[10px] sm:text-sm md:text-lg">
                    {cate.category_name}
                  </p>
                </Link>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Topics;
