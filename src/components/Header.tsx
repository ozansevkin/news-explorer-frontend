"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenuButton from "./MobileMenuButton";

export default function Header({ color }: { color: "white" | "black" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const TAILWIND_SM_BREAKPONT_WIDTH = 640;

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >= TAILWIND_SM_BREAKPONT_WIDTH &&
        isMobileMenuOpen
      ) {
        toggleMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen, toggleMobileMenu]);

  return (
    <>
      <header
        className={`${
          isMobileMenuOpen
            ? `absolute top-0 left-0 w-full ${
                color === "black" ? "bg-white" : "bg-zinc-900"
              } px-adaptive z-40`
            : "bg-[#c4c4c4] bg-opacity-[0.01]"
        } text-${color} flex justify-between items-center h-14 sm:h-20`}
      >
        <Logo />
        <MobileMenuButton
          color={color}
          onClick={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <Navigation color={color} isMobileMenuOpen={isMobileMenuOpen} />
        <span
          className={`absolute top-[55px] sm:top-[79px] left-0 w-full border-solid border-b-[1px] border-${color} border-opacity-20`}
        />
      </header>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-30"></div>
      )}
    </>
  );
}
