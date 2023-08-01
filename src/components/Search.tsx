import { Dispatch, SetStateAction } from "react";
import SearchForm from "./SearchForm";

interface SearchProps {
  setSearchValue: Dispatch<SetStateAction<string | null>>;
}

export default function Search({ setSearchValue }: SearchProps) {
  return (
    <section className="box-content px-adaptive mx-auto max-w-md lg:max-w-[608px] flex flex-col items-start text-white py-8 sm:pt-[38px] sm:pb-12 lg:py-20">
      <h1 className="font-serif text-4xl lg:text-6xl leading-10 lg:leading-[64px]">
        What's going on in the world?
      </h1>
      <p className="mt-4 lg:mt-8 mb-[122px] sm:mb-12 lg:mb-[88px]">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm setSearchValue={setSearchValue} />
    </section>
  );
}
