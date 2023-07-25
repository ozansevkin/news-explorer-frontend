import SearchForm from "./SearchForm";

export default function Search() {
  return (
    <section className="mx-auto max-w-[608px] flex flex-col items-start text-white py-20">
      <h1
        className="font-serif text-6xl
font-normal
leading-[64px]"
      >
        What's going on in the world?
      </h1>
      <p className="mt-8 mb-[88px]">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
    </section>
  );
}
