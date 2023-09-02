import Image from "next/image";

const ArticleRelate = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-0">
      <span className="block font-semibold text-[20px] text-black-100 md:mb-6 leading-28px">
        Related Articles
      </span>
      {data.map((post: any, index: number) => (
        <div className="flex flex-col md:max-w-[250px]" key={index}>
          <Image
            alt="img-post"
            src={post.img}
            className="rounded-2xl w-full mb-2"
          />
          <span className="text-black-100 leading-6 font-semibold">
            {post.heading}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ArticleRelate;
