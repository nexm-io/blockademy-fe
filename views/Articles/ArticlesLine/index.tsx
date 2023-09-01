import Image from "next/image";
import articleList from "@/public/icons/articleList.svg";

const ArticlesLine = ({data, onTitleClick } : {data: any, onTitleClick: any}) => {
  
    return (
        <div>
        <ul>
          {data.map((item : any, index: number) => (
            <li onClick={() => onTitleClick(item.title)} className="cursor-pointer flex-col hidden lg:flex relative" key={item.title}>
              <div className="flex relative items-center justify-start gap-[19px] before:w-1 before:h-full before:content-[''] before:bg-white-300 before:absolute before:left-[5px] before:top-[12px]">
                <Image
                  alt="title"
                  src={articleList}
                  className="flex flex-col justify-start self-start"
                />
                <a href={`#${item.title}`} className="block">{item.content}</a>
              </div>
              <span className="relative block h-9 top-[2px] left-[5px] w-1 bg-white-300 "></span>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default ArticlesLine