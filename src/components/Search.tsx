import SearchForm from "./SearchForm";

export default function Search() {
  return (
    <section className="mx-auto max-w-[608px] flex flex-col items-start text-white py-8 sm:py-20">
      <h1 className="font-serif text-4xl sm:text-6xl leading-10 sm:leading-[64px]">
        What's going on in the world?
      </h1>
      <p className="mt-4 sm:mt-8 mb-[122px] sm:mb-[88px]">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
    </section>
  );
}
