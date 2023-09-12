"use client";
import { ListTagsIntoData } from "@/redux/features/articles/type";
import React, { useState } from "react";

interface TagItemProps {
  dataTags?: ListTagsIntoData | null;
  choose: string[] | undefined;
  setChoose: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  academy?: boolean;
  handleTagClick?: (tag: string) => void | undefined;
}
const TagItem: React.FC<TagItemProps> = ({
  dataTags,
  choose,
  academy,
  handleTagClick,
  setChoose,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTagSelection = (tagTitle: string) => {
    if (selectedTags.includes(tagTitle)) {
      // Nếu đã chọn, loại bỏ nó khỏi danh sách chọn
      setSelectedTags(selectedTags.filter((item) => item !== tagTitle));
    } else {
      // Nếu chưa chọn, thêm nó vào danh sách chọn
      setSelectedTags([...selectedTags, tagTitle]);
    }

    if (handleTagClick) {
      handleTagClick(tagTitle);
    }
  };

  return (
    <>
      {dataTags &&
        dataTags.data.map((item, index) => (
          <span
            key={index}
            className={`text-sm text-center rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-3 capitalize ${
              selectedTags.includes(item.title)
                ? academy
                  ? "bg-gray-400 text-black-100 font-medium"
                  : "bg-gray-50 text-black-100"
                : academy
                ? "bg-gray-50 text-gray-500 font-normal"
                : "border border-gray-600 text-gray-500"
            }`}
            onClick={() => toggleTagSelection(item.title)}
          >
            &#35;{item.title}
          </span>
        ))}
    </>
  );
};

export default TagItem;
