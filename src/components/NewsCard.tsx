import { MouseEvent, useContext, useState } from "react";
import BookmarkIcon from "./icons/BookmarkIcon";
import TrashIcon from "./icons/TrashIcon";
import cardPlaceholder from "@/images/placeholder.png";
import CurrentUserContext from "@/contexts/CurrentUserContext";
import CurrentModalContext from "@/contexts/CurrentModalContext";
import {
  sendDeleteRequestWithToken,
  sendPostRequestWithToken,
} from "@/utils/mainApi";
import { INewsItem } from "@/utils/types";
import SavedNewsItemsContext from "@/contexts/SavedNewsItemsContext";
import { capitalizeString } from "@/utils/helpers";
import { usePathname } from "next/navigation";

interface NewsCardProps {
  newsItem: INewsItem;
}

export default function NewsCard({ newsItem }: NewsCardProps) {
  const pathname = usePathname();
  const isPathSavedNews = pathname === "/saved-news";

  const { isLoggedIn } = useContext(CurrentUserContext);
  const { setCurrentModal } = useContext(CurrentModalContext);
  const { savedNewsItems, setSavedNewsItems } = useContext(
    SavedNewsItemsContext,
  );
  const {
    publishedAt,
    source,
    title,
    description,
    url,
    urlToImage,
    searchValue,
    id = savedNewsItems?.find((i) => url === i?.link)?._id,
  } = newsItem;

  const [isSaved, setIsSaved] = useState(Boolean(id));

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString(undefined, dateOptions)
    : null;

  const deleteArticle = () => {
    sendDeleteRequestWithToken(`/articles/${id}`, {
      arg: {
        token: localStorage.getItem("jwt"),
      },
    })
      .then(() => {
        setIsSaved(false);
        setSavedNewsItems(
          savedNewsItems ? savedNewsItems?.filter((i) => i?._id !== id) : null,
        );
      })
      .catch(console.error);
  };

  const saveArticle = () => {
    sendPostRequestWithToken("/articles", {
      arg: {
        token: localStorage.getItem("jwt"),
        keyword: searchValue,
        title,
        text: description,
        date: publishedAt,
        source: source?.name,
        link: url,
        image: urlToImage,
      },
    })
      .then(({ article }) => {
        setIsSaved(true);
        setSavedNewsItems(
          savedNewsItems ? [...savedNewsItems, article] : [article],
        );
      })
      .catch(console.error);
  };

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation();

    if (isSaved && isLoggedIn) {
      deleteArticle();
    } else if (isLoggedIn) {
      saveArticle();
    } else {
      setCurrentModal("sign-in");
    }
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
        {(!isLoggedIn || isPathSavedNews) && (
          <p className="z-10 hidden h-10 w-0 translate-x-52 items-center justify-center rounded-lg bg-white text-xs font-medium text-black transition-all duration-300 group-hover:w-[182px] group-hover:translate-x-0 xl:flex">
            {!isLoggedIn && "Sign in to save articles"}
            {isPathSavedNews && "Remove from saved"}
          </p>
        )}
        <div className="z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
          {isPathSavedNews ? (
            <TrashIcon className="transition-all duration-300 group-hover:fill-black group-active:fill-blue-600" />
          ) : (
            <BookmarkIcon
              className={`transition-all duration-300 group-hover:stroke-black ${
                isSaved &&
                isLoggedIn &&
                "fill-blue-600 stroke-blue-600 group-hover:fill-blue-500 group-hover:stroke-blue-500"
              }`}
            />
          )}
        </div>
      </button>
      {isPathSavedNews && (
        <p className="absolute left-4 top-4 flex h-10 items-center justify-center rounded-lg bg-white px-[22px] text-sm font-medium text-black sm:left-2 sm:top-2 lg:left-6 lg:top-6">
          {capitalizeString(searchValue ? searchValue : "")}
        </p>
      )}
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
