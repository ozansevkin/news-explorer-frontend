import { MouseEvent } from "react";
import BookmarkIcon from "./icons/BookmarkIcon";
import TrashIcon from "./icons/TrashIcon";
import cardPlaceholder from "@/images/placeholder.png";

interface NewsCardProps {
  newsItem: newsItem;
}

interface newsItem {
  publishedAt: string | null;
  source: {
    id: string | null;
    name: string | null;
  } | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
}

export default function NewsCard({ newsItem }: NewsCardProps) {
  const { publishedAt, source, title, description, url, urlToImage } = newsItem;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString(undefined, dateOptions)
    : null;

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <article className="relative flex max-w-[400px] flex-col overflow-hidden rounded-lg bg-white hover:shadow-lg">
      {/* Next.js Image Component is not suitable to use here since we can not know all remote urls*/}
      <div>
        <img
          src={urlToImage ? urlToImage : cardPlaceholder.src}
          alt="News article"
          className="h-[196px] w-full object-fill sm:h-[150px] lg:h-[272px]"
        />
      </div>
      <button
        type="button"
        onClick={handleButtonClick}
        className="group absolute right-4 top-4 flex items-center justify-center gap-x-1 overflow-hidden rounded-lg sm:right-2 sm:top-2 lg:right-6 lg:top-6"
      >
        <p className="z-10 hidden h-10 w-0 translate-x-52 items-center justify-center rounded-lg bg-white text-xs font-medium text-black transition-all duration-300 group-hover:w-[182px] group-hover:translate-x-0 xl:flex">
          Sign in to save articles
        </p>
        <div className="z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
          <BookmarkIcon className="transition-all duration-300 group-hover:stroke-black group-active:fill-blue-600 group-active:stroke-blue-600" />
          {/* <TrashIcon className="group-hover:fill-black group-active:fill-blue-600 transition-all duration-300" /> */}
        </div>
      </button>
      {/* <p className="absolute top-4 sm:top-2 lg:top-6 left-4 sm:left-2 lg:left-6 flex items-center justify-center rounded-lg bg-white h-10 px-[22px] text-black text-sm font-medium">
        Nature
      </p> */}
      <a
        href={url}
        target="_blank"
        className="h-[244px] sm:h-[270px] lg:h-[304px]"
      >
        <div className="flex h-full flex-col p-4 lg:px-6 lg:pb-6 lg:pt-5">
          <time
            dateTime="2018-07-07"
            className="font-source-sans-3 leading-6 text-gray-400"
          >
            {date}
          </time>
          <h3 className="mt-[10px] line-clamp-2 h-12 font-serif text-[22px] leading-6 sm:mt-3 sm:line-clamp-3 sm:h-[72px] lg:line-clamp-2 lg:h-[60px] lg:text-[26px] lg:leading-[30px]">
            {title}
          </h3>
          <p className="mt-[14px] line-clamp-3 text-base leading-snug sm:mt-[10px] sm:line-clamp-4 lg:mt-4 lg:line-clamp-5">
            {description}
          </p>
          <footer className="mt-auto pt-2 font-serif text-base font-bold uppercase leading-tight tracking-wide text-gray-400 [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)] sm:pt-3 lg:pt-[18px]">
            <p className="truncate">{source?.name}</p>
          </footer>
        </div>
      </a>
    </article>
  );
}
