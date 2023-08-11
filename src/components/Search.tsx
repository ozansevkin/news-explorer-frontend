import { Dispatch, SetStateAction } from "react";
import SearchForm from "./SearchForm";

interface SearchProps {
  setSearchValue: Dispatch<SetStateAction<string | null>>;
}

export default function Search({ setSearchValue }: SearchProps) {
  return (
    <section className="mx-auto box-content flex max-w-md flex-col items-start px-adaptive py-8 text-white sm:pb-12 sm:pt-[38px] lg:max-w-[608px] lg:py-20">
      <h1 className="font-serif text-4xl leading-10 lg:text-6xl lg:leading-[64px]">
        What&apos;s going on in the world?
      </h1>
      <p className="mb-[122px] mt-4 sm:mb-12 lg:mb-[88px] lg:mt-8">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm setSearchValue={setSearchValue} />
    </section>
  );
}
