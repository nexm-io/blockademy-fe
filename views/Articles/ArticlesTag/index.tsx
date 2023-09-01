const ArticleTag = () => {
    return (
        <div className="flex gap-2 my-12">
        <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
          Trading
        </span>
        <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
          Bitcoin
        </span>
        <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
          Personal Finance
        </span>
      </div>
    )
}

export default ArticleTag;