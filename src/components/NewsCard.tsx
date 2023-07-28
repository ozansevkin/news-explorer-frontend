import Image from "next/image";
import BookmarkIcon from "./icons/BookmarkIcon";
import TrashIcon from "./icons/TrashIcon";
import cardPlaceholder from "@/images/placeholder.svg";

export default function NewsCard() {
  return (
    <article className="bg-white max-w-[400px] relative flex flex-col rounded-lg overflow-hidden hover:shadow-lg">
      <a href="#" target="_blank">
        <Image src={cardPlaceholder} alt="News article"></Image>
        <button
          type="button"
          className="absolute top-4 sm:top-2 lg:top-6 right-4 sm:right-2 lg:right-6 flex items-center justify-center gap-x-1 group overflow-hidden rounded-lg"
        >
          <p className="hidden text-black font-medium text-xs w-0 h-10 group-hover:w-[182px] bg-white rounded-lg xl:flex items-center justify-center translate-x-52 group-hover:translate-x-0 transition-all duration-300 z-10">
            Sign in to save articles
          </p>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center z-20">
            <BookmarkIcon className="group-hover:stroke-black group-active:stroke-blue-600 group-active:fill-blue-600 transition-all duration-300" />
            {/* <TrashIcon className="group-hover:fill-black group-active:fill-blue-600 transition-all duration-300" /> */}
          </div>
        </button>
        <p className="absolute top-4 sm:top-2 lg:top-6 left-4 sm:left-2 lg:left-6 flex items-center justify-center rounded-lg bg-white h-10 px-[22px] text-black text-sm font-medium">
          Nature
        </p>
        <div className="flex flex-col p-4 lg:px-6 lg:pb-6 lg:pt-5">
          <time
            dateTime="2018-07-07"
            className="font-source-sans-3 text-gray-400"
          >
            July 7, 2023
          </time>
          <h3 className="font-serif text-[22px] lg:text-[26px] leading-normal lg:leading-[30px] mt-[10px] sm:mt-3">
            Title
          </h3>
          <p className="text-base leading-snug mt-[14px] sm:mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            obcaecati necessitatibus dolore molestias exercitationem, quia
            facilis, ab perferendis iusto ea eum nihil eos atque. Odit velit
            facilis aut maxime officiis.
          </p>
          <footer className="font-serif text-gray-400 text-base font-bold uppercase leading-tight tracking-wide [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)] mt-2 sm:mt-3 lg:mt-[18px]">
            <p>National Geographic</p>
          </footer>
        </div>
      </a>
    </article>
  );
}
