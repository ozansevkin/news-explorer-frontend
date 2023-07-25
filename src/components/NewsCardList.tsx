import NewsCard from "./NewsCard";

export default function NewsCardList() {
  return (
    <ul className="grid grid-cols-3 gap-4 py-16">
      <li>
        <NewsCard />
      </li>
      <li>
        <NewsCard />
      </li>
      <li>
        <NewsCard />
      </li>
      <li>
        <NewsCard />
      </li>
    </ul>
  );
}
