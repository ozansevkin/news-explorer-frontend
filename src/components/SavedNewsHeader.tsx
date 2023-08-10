export default function SavedNewsHeader() {
  return (
    <section className="pt-2 pb-8 sm:pt-6 sm:pb-8 lg:pt-10 lg:pb-14 px-adaptive max-w-8xl mx-auto">
      <h1 className="opacity-50 text-xs sm:text-sm lg:text-lg">
        Saved articles
      </h1>
      <h2 className="max-w-[336px] lg:max-w-[530px] font-serif text-3xl leading-[34px] lg:text-[40px] lg:leading-[46px] pt-4 lg:pt-7">
        Ozan, you have 5 saved articles
      </h2>
      <p className="pt-[50px] sm:pt-4 lg:pt-[30px]">
        By keywords: <b>Nature, Yellowstone, and 2 other</b>
      </p>
    </section>
  );
}
