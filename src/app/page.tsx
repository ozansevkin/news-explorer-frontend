import Header from "@/components/Header";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import About from "@/components/About";
import Preloader from "@/components/Preloader";
import NotFound from "@/components/NotFound";
import Image from "next/image";
import backgroundImage from "@/images/background.png";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

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
        <Header color="white" />
        <Search />
      </div>
      <main>
        <SearchResults />
        <About />
      </main>
    </>
  );
}
