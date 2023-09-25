"use client"; // Error components must be Client Components

import InfoGraphic from "@/views/Register/InfoGraphic";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-black-500 h-[100vh] flex justify-center items-center full-bleed__learn ">
      <div className="flex flex-col justify-center items-center">
        <InfoGraphic
          errorPage
          description="Sorry! The page you’re looking for cannot be found"
          error
          color_text="text-[#EAECEF]"
        />
        <Link
          href="/"
          className="text-center rounded-lg text-white-100 bg-blue-100 px-6 py-3 hover:bg-transparent border border-transparent hover:border-blue-100"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
