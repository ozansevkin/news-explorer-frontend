import NewsCard from "./NewsCard";

export default function NewsCardList() {
  return (
    <div className="bg-neutral-100">
      <ul className="px-adaptive max-w-7xl mx-auto bg-fill grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6 sm:py-8 lg:py-[62px]">
        <li className="mx-auto">
          <NewsCard />
        </li>
        <li className="mx-auto">
          <NewsCard />
        </li>
        <li className="mx-auto">
          <NewsCard />
        </li>
        <li className="mx-auto">
          <NewsCard />
        </li>
      </ul>
    </div>
  );
}
