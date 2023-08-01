"use client";

import Header from "@/components/Header";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import About from "@/components/About";
import ModalController from "@/components/ModalController";
import Image from "next/image";
import backgroundImage from "@/images/background.png";
import SetCurrentModalContext from "@/contexts/SetCurrentModalContext";
import { useState } from "react";

export default function Home() {
  const [currentModal, setCurrentModal] = useState<
    "sign-in" | "sign-up" | null
  >(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);

  return (
    <>
      <SetCurrentModalContext.Provider value={setCurrentModal}>
        <div className="relative">
          <Image
            src={backgroundImage}
            alt="a phone showing data on the screen"
            placeholder="blur"
            fill={true}
            className="object-cover -z-10"
          />
          <Header color="white" />
          <Search setSearchValue={setSearchValue} />
        </div>
        <main>
          {searchValue && <SearchResults searchValue={searchValue} />}
          <About />
          <ModalController currentModal={currentModal} />
        </main>
      </SetCurrentModalContext.Provider>
    </>
  );
}
