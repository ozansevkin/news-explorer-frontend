import NewsCardList from "./NewsCardList";
import Preloader from "@/components/Preloader";
import NotFound from "@/components/NotFound";
import searchNews from "@/utils/newsApi";
import useSWR from "swr";
import { useState } from "react";

interface SearchResultsProps {
  searchValue: string | null;
}

export default function SearchResults({ searchValue }: SearchResultsProps) {
  const [size, setSize] = useState(3);
  const { data, isLoading, error } = useSWR(searchValue, searchNews);

  if (error)
    return (
      <p>{`Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.`}</p>
    );
  if (isLoading) return <Preloader text="Searching for news..." />;
  if (data.totalResults === undefined || data.totalResults == 0)
    return <NotFound text="Sorry, but nothing matched your search terms." />;
  return (
    <div className="pt-8 pb-6 sm:py-10 lg:py-20 bg-neutral-100">
      <h2 className="px-adaptive pb-[34px] sm:pb-0 max-w-8xl mx-auto font-serif text-3xl lg:text-[40px] leading-[34px] lg:leading-[46px]">
        Search Results
      </h2>
      <NewsCardList newsItems={data.articles} size={size} />
      {size <= data.totalResults && (
        <button
          type="button"
          onClick={() => setSize(size + 3)}
          className="w-72 sm:w-60 lg:w-72 h-14 lg:h-16 bg-white hover:bg-gray-200 rounded-r-full rounded-l-full font-medium leading-normal flex items-center justify-center mx-auto"
        >
          Show More
        </button>
      )}
    </div>
  );
}
