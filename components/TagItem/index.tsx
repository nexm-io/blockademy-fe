import { ListTagsIntoData } from "@/redux/features/articles/type";
import React from "react";

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
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTagSelection = (tagTitle: string) => {
    let updatedSelectedTags: string[] = [];
    if (choose.includes(tagTitle)) {
      updatedSelectedTags = choose.filter((item) => item !== tagTitle);
    } else {
      updatedSelectedTags = [...choose, tagTitle];
    }
    if (setChoose) {
      setChoose(updatedSelectedTags);
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
            className={`text-sm text-center rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-3 capitalize select-none ${
              choose.includes(item.title)
                ? academy
                  ? "bg-[#37B7FF] bg-opacity-40 text-black-100 font-medium"
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
