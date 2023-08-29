const BreadCumb = () => {
  return (
    <>
      <nav className="w-full rounded-md">
        <ol className="list-reset flex text-gray-300 ">
          <li className="leading-[23px]">
            <a
              href="#"
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Home
            </a>
          </li>
          <li className="leading-[23px]">
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">
            &gt;
            </span>
          </li>
          <li className="leading-[23px]">
            <a
              href="#"
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Article
            </a>
          </li>
          <li>
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">
            &gt;
            </span>
          </li>
          <li className="text-neutral-500 dark:text-neutral-400">Bitcoin Spot ETF vs. Bitcoin Futures ETF: What	&gt;s the Difference?</li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCumb;
