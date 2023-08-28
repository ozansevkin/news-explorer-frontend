"use client";

import Header from "@/components/Header";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import About from "@/components/About";
import ModalController from "@/components/ModalController";
import Image from "next/image";
import backgroundImage from "@/images/background.png";
import CurrentModalContext from "@/contexts/CurrentModalContext";
import { useContext, useState } from "react";
import { searchValueType } from "@/utils/types";

export default function Home() {
  const [searchValue, setSearchValue] = useState<searchValueType>(null);
  const { currentModal } = useContext(CurrentModalContext);

  return (
    <>
      <div className="relative">
        <Image
          src={backgroundImage}
          alt="a phone showing data on the screen"
          placeholder="blur"
          fill={true}
          className="-z-10 object-cover"
        />
        <Header color="white" />
        <Search setSearchValue={setSearchValue} />
      </div>
      <main>
        {searchValue && <SearchResults searchValue={searchValue} />}
        <About />
        <ModalController currentModal={currentModal} />
      </main>
    </>
  );
}
