import NewsCardList from "./NewsCardList";
import Preloader from "@/components/Preloader";
import NotFound from "@/components/NotFound";
import searchNews from "@/utils/newsApi";
import useSWR from "swr";
import { useContext, useState } from "react";
import { INewsItem } from "@/utils/types";
import SavedNewsItemsContext from "@/contexts/SavedNewsItemsContext";

interface SearchResultsProps {
  searchValue: string | null;
}

export default function SearchResults({ searchValue }: SearchResultsProps) {
  const [size, setSize] = useState(3);
  const { data, isLoading, error } = useSWR(searchValue, searchNews);
  const { savedNewsItems } = useContext(SavedNewsItemsContext);

  const getNewsItems = (data: any) =>
    data.articles.map((i: INewsItem) => {
      i.searchValue = searchValue;
      return i;
    });

  if (error)
    return (
      <p>
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </p>
    );
  if (isLoading) return <Preloader text="Searching for news..." />;
  if (data.totalResults === undefined || data.totalResults == 0)
    return <NotFound text="Sorry, but nothing matched your search terms." />;
  return (
    <div className="bg-neutral-100 pb-6 pt-8 sm:py-10 lg:py-20">
      <h2 className="mx-auto max-w-8xl px-adaptive pb-[34px] font-serif text-3xl leading-[34px] sm:pb-0 lg:text-[40px] lg:leading-[46px]">
        Search Results
      </h2>
      <NewsCardList newsItems={getNewsItems(data)} size={size} />
      {size <= data.totalResults && (
        <button
          type="button"
          onClick={() => setSize(size + 3)}
          className="mx-auto flex h-14 w-72 items-center justify-center rounded-l-full rounded-r-full bg-white font-medium leading-normal hover:bg-gray-200 sm:w-60 lg:h-16 lg:w-72"
        >
          Show More
        </button>
      )}
    </div>
  );
}
