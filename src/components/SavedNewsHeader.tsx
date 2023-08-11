export default function SavedNewsHeader() {
  return (
    <section className="mx-auto max-w-8xl px-adaptive pb-8 pt-2 sm:pb-8 sm:pt-6 lg:pb-14 lg:pt-10">
      <h1 className="text-xs opacity-50 sm:text-sm lg:text-lg">
        Saved articles
      </h1>
      <h2 className="max-w-[336px] pt-4 font-serif text-3xl leading-[34px] lg:max-w-[530px] lg:pt-7 lg:text-[40px] lg:leading-[46px]">
        Ozan, you have 5 saved articles
      </h2>
      <p className="pt-[50px] sm:pt-4 lg:pt-[30px]">
        By keywords: <b>Nature, Yellowstone, and 2 other</b>
      </p>
    </section>
  );
}
