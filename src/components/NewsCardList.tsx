import { INewsItem } from "@/utils/types";
import NewsCard from "./NewsCard";

interface NewsCardListProps {
  newsItems: Array<INewsItem> | null;
  size?: number;
}

export default function NewsCardList({ newsItems, size }: NewsCardListProps) {
  return (
    <div className="bg-neutral-100">
      <ul className="bg-fill mx-auto grid max-w-8xl grid-cols-1 gap-4 px-adaptive py-6 sm:grid-cols-2 sm:py-8 md:grid-cols-3 lg:py-[62px]">
        {size
          ? newsItems?.slice(0, size).map((newsItem: INewsItem, index) => {
              return (
                <li key={index} className="mx-auto">
                  <NewsCard newsItem={newsItem} />
                </li>
              );
            })
          : newsItems?.map((newsItem: INewsItem, index) => {
              return (
                <li key={index} className="mx-auto">
                  <NewsCard newsItem={newsItem} />
                </li>
              );
            })}
      </ul>
    </div>
  );
}
