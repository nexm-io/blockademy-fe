import { ListTagsIntoData } from "@/redux/features/articles/type";
import { getLastPathName } from "@/utils/getPathName";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import slugifyText from "@/utils/slugifyText";
interface TagItemProps {
  dataTags?: ListTagsIntoData | null;
  choose?: string[] | undefined;
  setChoose?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  academy?: boolean;
  handleTagClick?: (tag: string) => void | undefined;
}
const TagItem: React.FC<TagItemProps> = ({
  dataTags,
  choose = [],
  academy,
  handleTagClick,
  setChoose,
}) => {
  const toggleTagSelection = (tagTitle: string) => {
    let updatedSelectedTags: string[] = [];
    if (choose.includes(slugifyText(tagTitle))) {
      updatedSelectedTags = choose.filter(
        (item) => item !== slugifyText(tagTitle)
      );
    } else {
      updatedSelectedTags = [...choose, slugifyText(tagTitle)];
    }
    if (setChoose) {
      setChoose(updatedSelectedTags);
    }
    if (handleTagClick) {
      handleTagClick(slugifyText(tagTitle));
    }
  };

  return (
    <>
      {dataTags &&
        dataTags.data.map((item, index) => (
          <span
            key={index}
            className={`text-sm text-center rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-3 capitalize select-none ${
              choose.includes(item.slug || "")
                ? academy
                  ? "bg-[#37B7FF] bg-opacity-40 text-black-100"
                  : "bg-gray-50 text-black-100"
                : academy
                ? "bg-gray-50 text-gray-500 font-normal"
                : "border border-gray-600 text-gray-500"
            }`}
            onClick={() => toggleTagSelection(item.slug || "")}
          >
            &#35;{item.title}
          </span>
        ))}
    </>
  );
};

export default TagItem;
