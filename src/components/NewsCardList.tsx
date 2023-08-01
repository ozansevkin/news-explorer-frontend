import NewsCard from "./NewsCard";

interface NewsCardListProps {
  newsItems: Array<newsItem> | null;
  size?: number;
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

export default function NewsCardList({ newsItems, size }: NewsCardListProps) {
  return (
    <div className="bg-neutral-100">
      <ul className="px-adaptive max-w-7xl mx-auto bg-fill grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6 sm:py-8 lg:py-[62px]">
        {size
          ? newsItems?.slice(0, size).map((newsItem: newsItem, index) => {
              return (
                <li key={index} className="mx-auto">
                  <NewsCard newsItem={newsItem} />
                </li>
              );
            })
          : newsItems?.map((newsItem: newsItem, index) => {
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
