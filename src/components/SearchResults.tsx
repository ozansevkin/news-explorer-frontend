import NewsCardList from "./NewsCardList";

export default function SearchResults() {
  return (
    <div className="pt-8 pb-6 sm:py-20">
      <h2 className="font-serif text-3xl sm:text-[40px] leading-[34px] sm:leading-[46px]">
        Search Results
      </h2>
      <NewsCardList />
      <button
        type="button"
        className="w-72 h-14 sm:h-16 bg-white hover:bg-gray-200 rounded-r-full rounded-l-full font-medium leading-normal flex items-center justify-center mx-auto"
      >
        Show More
      </button>
    </div>
  );
}
