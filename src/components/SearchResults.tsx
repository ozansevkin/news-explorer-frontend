import NewsCardList from "./NewsCardList";

export default function SearchResults() {
  return (
    <div className="pt-8 pb-6 sm:py-10 lg:py-20 bg-neutral-100">
      <h2 className="px-adaptive max-w-7xl mx-auto font-serif text-3xl lg:text-[40px] leading-[34px] lg:leading-[46px]">
        Search Results
      </h2>
      <NewsCardList />
      <button
        type="button"
        className="w-60 lg:w-72 h-14 lg:h-16 bg-white hover:bg-gray-200 rounded-r-full rounded-l-full font-medium leading-normal flex items-center justify-center mx-auto"
      >
        Show More
      </button>
    </div>
  );
}
