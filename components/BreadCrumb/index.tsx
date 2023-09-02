import Link from "next/link";

const BreadCrumb = () => {
  return (
    <>
      <nav className="w-full rounded-md">
        <ol className="list-reset flex text-gray-300 items-center pl-4 md:pl-0">
          <li className="leading-[23px]">
            <Link
              href="/courses"
              className="text-gray-300 md:text-sm font-normal capitalize text-[12px]"
            >
              courses
            </Link>
          </li>
          <li className="leading-[23px]">
            <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
          </li>
          <li className="leading-[23px]">
            <span className="text-black-100 md:text-sm font-normal capitalize text-[12px]">
              Intermediate Track
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
