"use client";

import { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenuButton from "./MobileMenuButton";

interface HeaderProps {
  color: "white" | "black";
  isLoggedIn: boolean;
}

export default function Header({ color, isLoggedIn }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

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

  const mobileMenuBackgroundColor =
    color === "black" ? "bg-white" : "bg-zinc-900";

  return (
    <>
      <header
        className={`${
          isMobileMenuOpen
            ? `relative z-40 ${mobileMenuBackgroundColor}`
            : "bg-stone-300 bg-opacity-[0.01]"
        } mx-auto max-w-8xl px-adaptive text-${color} flex h-14 items-center justify-between sm:h-[66px] lg:h-20`}
      >
        <Logo />
        <MobileMenuButton
          color={color}
          onClick={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <Navigation
          color={color}
          isMobileMenuOpen={isMobileMenuOpen}
          mobileMenuBackgroundColor={mobileMenuBackgroundColor}
          isLoggedIn={isLoggedIn}
        />
        <span
          className={`absolute left-0 top-[55px] w-full border-b-[1px] sm:top-[65px] lg:top-[79px] border-${color} opacity-20`}
        />
      </header>
      {isMobileMenuOpen && (
        <div className="fixed left-0 top-0 z-30 h-screen w-screen bg-black bg-opacity-50"></div>
      )}
    </>
  );
}
