export default function SearchForm() {
  return (
    <search className="w-full">
      <form className="flex relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter topic"
          className="grow h-16 py-5 pl-6 pr-52 mr-1 rounded-l-full rounded-r-full text-zinc-900 text-base font-normal caret-blue-600 outline-blue-600"
        />
        <button
          type="submit"
          className="absolute right-0 z-10 w-[168px] h-full rounded-l-full rounded-r-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
        >
          Search
        </button>
      </form>
    </search>
  );
}
