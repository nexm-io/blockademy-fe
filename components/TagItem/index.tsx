"use client";
import { ListTagsIntoData } from "@/redux/features/articles/type";
import React, { useEffect } from "react";

interface TagItemProps {
  dataTags?: ListTagsIntoData | null;
  choose: string | undefined;
  setChoose: React.Dispatch<React.SetStateAction<string | undefined>>;
  academy?: boolean;
}
const TagItem: React.FC<TagItemProps> = ({
  dataTags,
  choose,
  setChoose,
  academy,
}) => {
  useEffect(() => {
    if (dataTags && dataTags.data.length > 0 && choose === undefined) {
      setChoose(dataTags.data[0].title);
    }
  }, [dataTags, choose, setChoose]);
  return (
    <>
      {dataTags &&
        dataTags.data.map((item, index) => (
          <span
            key={index}
            className={`text-base text-center rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize ${
              choose === item.title
                ? academy
                  ? "bg-gray-400 text-black-100 font-medium"
                  : "bg-gray-50 text-black-100"
                : academy
                ? "bg-gray-50 text-gray-500 font-normal"
                : "border border-gray-600 text-gray-500"
            }`}
            onClick={() =>
              setChoose(choose === item.title ? undefined : item.title)
            }
          >
            &#35;{item.title}
          </span>
        ))}
    </>
  );
};

export default TagItem;
