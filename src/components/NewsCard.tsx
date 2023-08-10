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
    <article className="bg-white max-w-[400px] relative flex flex-col rounded-lg overflow-hidden hover:shadow-lg">
      {/* Next.js Image Component is not suitable to use here since we can not know all remote urls*/}
      <div>
        <img
          src={urlToImage ? urlToImage : cardPlaceholder.src}
          alt="News article"
          className="w-full h-[196px] sm:h-[150px] lg:h-[272px] object-fill"
        />
      </div>
      <button
        type="button"
        onClick={handleButtonClick}
        className="absolute top-4 sm:top-2 lg:top-6 right-4 sm:right-2 lg:right-6 flex items-center justify-center gap-x-1 group overflow-hidden rounded-lg"
      >
        <p className="hidden text-black font-medium text-xs w-0 h-10 group-hover:w-[182px] bg-white rounded-lg xl:flex items-center justify-center translate-x-52 group-hover:translate-x-0 transition-all duration-300 z-10">
          Sign in to save articles
        </p>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center z-20">
          <BookmarkIcon className="group-hover:stroke-black group-active:stroke-blue-600 group-active:fill-blue-600 transition-all duration-300" />
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
        <div className="flex flex-col p-4 lg:px-6 lg:pb-6 lg:pt-5 h-full">
          <time
            dateTime="2018-07-07"
            className="font-source-sans-3 leading-6 text-gray-400"
          >
            {date}
          </time>
          <h3 className="h-12 sm:h-[72px] lg:h-[60px] line-clamp-2 sm:line-clamp-3 lg:line-clamp-2 font-serif text-[22px] lg:text-[26px] leading-6 lg:leading-[30px] mt-[10px] sm:mt-3">
            {title}
          </h3>
          <p className="line-clamp-3 sm:line-clamp-4 lg:line-clamp-5 text-base leading-snug mt-[14px] sm:mt-[10px] lg:mt-4">
            {description}
          </p>
          <footer className="font-serif text-gray-400 text-base font-bold uppercase leading-tight tracking-wide [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)] mt-auto pt-2 sm:pt-3 lg:pt-[18px]">
            <p className="truncate">{source?.name}</p>
          </footer>
        </div>
      </a>
    </article>
  );
}
