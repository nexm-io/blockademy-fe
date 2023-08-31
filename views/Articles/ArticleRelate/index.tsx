
import Image from "next/image";

const ArticleRelate = ({data} : {data: any}) => {
    return (
        <div className="flex flex-col gap-6">
            <span className="block font-medium text-[20px] text-black-100 mb-6 leading-28px">
              Related Articles
            </span>
            {data.map((post : any) => (
              <div className="flex flex-col md:max-w-[250px]">
                <Image alt="img-post" src={post.img} className="rounded-2xl w-full mb-2" />
                <span className="text-black-100 leading-6 font-medium">
                  {post.heading}
                </span>
              </div>
            ))}
          </div>
    )
}

export default ArticleRelate