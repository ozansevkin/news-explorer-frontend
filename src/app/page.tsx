import Header from "@/components/Header";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import About from "@/components/About";
import Image from "next/image";
import backgroundImage from "@/images/background.png";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src={backgroundImage}
          alt="a phone showing data on the screen"
          placeholder="blur"
          fill={true}
          className="object-cover -z-10"
        />
        <div className="px-adaptive max-w-7xl mx-auto">
          <Header color="white" />
          <Search />
        </div>
      </div>
      <main className="px-adaptive max-w-7xl mx-auto">
        <SearchResults />
        <About />
      </main>
    </>
  );
}
