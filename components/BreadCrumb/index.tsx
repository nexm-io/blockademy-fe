"use client";
import { getPathName } from "@/utils/getPathName";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const title = parts[1];
  const router = useRouter();
  return (
    <>
      <nav className="w-full rounded-md">
        <ol className="list-reset flex text-gray-300 items-center md:pl-0 flex-wrap">
          <li
            onClick={() => router.push(`/`)}
            className="leading-[23px] hover:underline cursor-pointer"
          >
            <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
              Home
            </span>
          </li>
          <li className="leading-[23px]">
            <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
          </li>
          {pathname.split("/").map((path, index, array) => (
            <React.Fragment key={index}>
              {index !== 0 && !/^\d+$/.test(path) && (
                <>
                  <li
                    onClick={() => {
                      if (index === 1) {
                        router.push(`/${title}`);
                      }
                    }}
                    className={`leading-[23px] ${
                      index === 1 ? "hover:underline cursor-pointer" : ""
                    } cursor-default`}
                  >
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      {getPathName(path)}
                    </span>
                  </li>

                  {index !== array.length - 1 && (
                    <li className="leading-[23px]">
                      <span className="mx-3 md:text-[12px] text-[10px]">
                        &gt;
                      </span>
                    </li>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
