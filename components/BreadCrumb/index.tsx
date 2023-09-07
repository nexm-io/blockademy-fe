"use client";
import { getPathName } from "@/utils/getPathName";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="w-full rounded-md">
        <ol className="list-reset flex text-gray-300 items-center pl-4 md:pl-0">
          {pathname.split("/").map((path, index, array) => (
            <>
              {index !== 0 && (
                <>
                  <li className="leading-[23px]">
                    <Link
                      href="/courses"
                      className="text-gray-300 md:text-sm font-normal capitalize text-[12px]"
                    >
                      {getPathName(path)}
                    </Link>
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
            </>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
