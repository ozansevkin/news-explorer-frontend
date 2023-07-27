import NewsCard from "./NewsCard";

export default function NewsCardList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-14 pb-4 sm:py-16">
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
  );
}
