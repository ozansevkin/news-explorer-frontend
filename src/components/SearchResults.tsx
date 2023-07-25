import NewsCardList from "./NewsCardList";

export default function SearchResults() {
  return (
    <div className="py-20">
      <h2 className="font-serif text-[40px] leading-[46px]">Search Results</h2>
      <NewsCardList />
      <button
        type="button"
        className="w-72 h-16 bg-white hover:bg-gray-200 rounded-r-full rounded-l-full font-medium leading-normal flex items-center justify-center mx-auto"
      >
        Show More
      </button>
    </div>
  );
}
