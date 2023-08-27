import { useContext } from "react";
import NewsCardList from "./NewsCardList";
import SavedNewsHeader from "./SavedNewsHeader";
import SavedNewsItemsContext from "@/contexts/SavedNewsItemsContext";
import { INewsItem } from "@/utils/types";

export default function SavedNews() {
  const { savedNewsItems } = useContext(SavedNewsItemsContext);

  const newsItems: INewsItem[] = savedNewsItems?.map((i) => ({
    searchValue: i?.keyword ?? null,
    title: i?.title ?? null,
    description: i?.text ?? null,
    publishedAt: i?.date ?? null,
    source: { name: i?.source ?? null, id: null },
    url: i?.link ?? undefined,
    urlToImage: i?.image ?? null,
    id: i?._id ?? null,
    isSaved: true,
  }))!;

  return (
    <>
      <SavedNewsHeader newsItems={newsItems} />
      <NewsCardList newsItems={newsItems} />
    </>
  );
}
