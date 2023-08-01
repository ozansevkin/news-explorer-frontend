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
        className="flex flex-col gap-y-4 sm:flex-row sm:relative"
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder={error ? "Please enter a keyword" : "Enter topic"}
          className={`sm:grow sm:h-16 py-4 sm:py-5 px-4 sm:pl-6 sm:pr-40 lg:pr-44 sm:mr-1 rounded-l-full rounded-r-full text-zinc-900 text-base font-normal caret-blue-600 outline-blue-600 ${
            error && "placeholder-red-500"
          }`}
        />
        <button
          type="submit"
          className="sm:absolute sm:right-0 sm:z-10 w-full sm:w-[160px] lg:w-[168px] h-full py-4 rounded-l-full rounded-r-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-lg font-medium leading-normal"
        >
          Search
        </button>
      </form>
    </search>
  );
}
