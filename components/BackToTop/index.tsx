"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import IconBackToTop from "@/public/icons/backToTop.svg";
import React from "react";
import cn from "@/services/cn";

const BackToTop = ({
  onlyShowOnMobile = false,
}: {
  onlyShowOnMobile?: boolean;
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTrigger = 0.6;
      const shouldShowBackToTop = scrollPosition / pageHeight >= scrollTrigger;
      setShowBackToTop(shouldShowBackToTop);
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

  return (
    showBackToTop && (
      <button
        className={cn(
          `fixed items-center justify-center right-4 bottom-[60px] sm:right-[75px] animate-bounce w-[60px] h-[60px] rounded-lg bg-white-100 hover:brightness-90 shadow-3xl z-50`,
          {
            "flex md:hidden": onlyShowOnMobile,
            flex: !onlyShowOnMobile,
          }
        )}
        onClick={scrollToTop}
      >
        <Image alt="btn" src={IconBackToTop} width={40} height={40} />
      </button>
    )
  );
};

export default BackToTop;
