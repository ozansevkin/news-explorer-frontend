export default function SearchForm() {
  return (
    <search className="w-full">
      <form className="flex flex-col gap-y-4 sm:flex-row sm:relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter topic"
          className="sm:grow sm:h-16 py-4 sm:py-5 px-4 sm:pl-6 sm:pr-52 sm:mr-1 rounded-l-full rounded-r-full text-zinc-900 text-base font-normal caret-blue-600 outline-blue-600"
        />
        <button
          type="submit"
          className="sm:absolute sm:right-0 sm:z-10 w-full sm:w-[168px] h-full py-4 rounded-l-full rounded-r-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-lg font-medium leading-normal"
        >
          Search
        </button>
      </form>
    </search>
  );
}
