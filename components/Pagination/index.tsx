import { CheveronLeft, CheveronRight } from "@styled-icons/zondicons";

import cn from "@/services/cn";
import usePagination, { DOTS } from "@/services/hooks/pagination";

const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
}: {
  onPageChange: (val: any) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  });

  if (!paginationRange) return null;

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  const onNext = () => {
    if (currentPage === lastPage) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };
  return (
    <div className="flex gap-[14px] items-center text-[20px]">
      {currentPage === 1 ? null : (
        <div
          className={cn(
            `w-8 h-8 cursor-pointer text-light-100 transition-all hover:text-normal-800 hover:bg-light-100 rounded-[3px] flex justify-center items-center bg-normal-800`
          )}
          onClick={onPrevious}
        >
          <CheveronLeft size={20} />
        </div>
      )}

      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <div
              className="text-light-100"
              key={i}
            >
              ...
            </div>
          );
        }

        if (pageNumber === currentPage)
          return (
            <div
              className={cn(
                `min-w-[32px] px-1 h-8 cursor-pointer transition-all font-medium border border-light-100 bg-blue-100 text-white-100 text-light-100 rounded-[3px] flex justify-center items-center`
              )}
              key={i}
            >
              {pageNumber}
            </div>
          );

        return (
          <div
            className="text-light-100 font-thin cursor-pointer transition-colors hover:text-primary-100 h-8 flex justify-center items-center"
            key={i}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </div>
        );
      })}
      {currentPage === lastPage ? null : (
        <div
          className={cn(
            `w-8 h-8 cursor-pointer text-light-100 transition-all hover:text-normal-800 hover:bg-light-100 rounded-[3px] flex justify-center items-center bg-normal-800`
          )}
          onClick={onNext}
        >
          <CheveronRight size={20} />
        </div>
      )}
    </div>
  );
};

export default Pagination;
