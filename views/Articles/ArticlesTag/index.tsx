const ArticleTag = ({ tags }: { tags: Array<{tag: string, slug: string}> }) => {

  return (
    <div className="flex gap-2 my-8 px-4 md:px-0">
      {tags.map((tag, index) => (
        <span key={index} className="text-white-100 text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
          {tag.slug}
        </span>
      ))}
    </div>
  );
};

export default ArticleTag;