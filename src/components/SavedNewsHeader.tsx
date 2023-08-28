import CurrentUserContext from "@/contexts/CurrentUserContext";
import { capitalizeString, removeDuplicates } from "@/utils/helpers";
import { INewsItem } from "@/utils/types";
import { useContext } from "react";

interface SavedNewsHeaderProps {
  newsItems: INewsItem[] | null;
}

export default function SavedNewsHeader({ newsItems }: SavedNewsHeaderProps) {
  const { currentUser } = useContext(CurrentUserContext);

  const keywordsArray = newsItems
    ? removeDuplicates(newsItems.map((i) => capitalizeString(i.searchValue!)))
    : [];

  const keywords =
    keywordsArray.length > 3
      ? keywordsArray.slice(0, 2).join(", ") +
        `, and ${keywordsArray.length - 2} others`
      : keywordsArray.join(", ");

  return (
    <section className="mx-auto max-w-8xl px-adaptive pb-8 pt-2 sm:pb-8 sm:pt-6 lg:pb-14 lg:pt-10">
      <h1 className="text-xs opacity-50 sm:text-sm lg:text-lg">
        Saved articles
      </h1>
      <h2 className="max-w-[336px] pt-4 font-serif text-3xl leading-[34px] lg:max-w-[530px] lg:pt-7 lg:text-[40px] lg:leading-[46px]">
        {currentUser?.name}, you have {newsItems?.length} saved articles
      </h2>
      <p className="pt-[50px] sm:pt-4 lg:pt-[30px]">
        By keywords: <b>{keywords}</b>
      </p>
    </section>
  );
}
