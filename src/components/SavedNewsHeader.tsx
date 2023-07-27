export default function SavedNewsHeader() {
  return (
    <div className="py-2 sm:py-10">
      <h2 className="opacity-50 text-xs sm:text-lg">Saved articles</h2>
      <h3 className="font-serif text-3xl leading-[34px] sm:text-[40px] sm:leading-[46px] pt-4 sm:pt-7">
        Ozan, you have 5 saved articles
      </h3>
      <p className="pt-[50px] sm:pt-[30px] sm:pb-4">
        By keywords: <b>Nature, Yellowstone, and 2 other</b>
      </p>
    </div>
  );
}
