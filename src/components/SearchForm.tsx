import { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface SearchFormProps {
  setSearchValue: Dispatch<SetStateAction<string | null>>;
}

export default function SearchForm({ setSearchValue }: SearchFormProps) {
  const [error, setError] = useState(false);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchValue = formData.get("search") as string;
    if (!searchValue) {
      setError(true);
    } else {
      setError(false);
      setSearchValue(searchValue);
    }
  };

  return (
    <search className="w-full">
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col gap-y-4 sm:relative sm:flex-row"
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder={error ? "Please enter a keyword" : "Enter topic"}
          className={`rounded-l-full rounded-r-full px-4 py-4 text-base font-normal text-zinc-900 caret-blue-600 outline-blue-600 sm:mr-1 sm:h-16 sm:grow sm:py-5 sm:pl-6 sm:pr-40 lg:pr-44 ${
            error && "placeholder-red-500"
          }`}
        />
        <button
          type="submit"
          className="h-full w-full rounded-l-full rounded-r-full bg-blue-600 py-4 text-lg font-medium leading-normal hover:bg-blue-500 active:bg-blue-700 sm:absolute sm:right-0 sm:z-10 sm:w-[160px] lg:w-[168px]"
        >
          Search
        </button>
      </form>
    </search>
  );
}
