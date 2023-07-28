import { useContext } from "react";
import NavItem from "./NavItem";
import CurrentModalContext from "@/contexts/SetCurrentModalContext";

interface NavigationProps {
  color: "white" | "black";
  isMobileMenuOpen: boolean;
  mobileMenuBackgroundColor: "bg-white" | "bg-zinc-900";
}

export default function Navigation({
  color,
  isMobileMenuOpen,
  mobileMenuBackgroundColor,
}: NavigationProps) {
  const setCurrentModal = useContext(CurrentModalContext);

  return (
    <nav
      className={`${
        isMobileMenuOpen
          ? `absolute top-14 left-0 flex flex-col gap-y-5 w-full items-start px-adaptive pt-4 pb-6 ${mobileMenuBackgroundColor}`
          : "hidden h-full items-center gap-x-8"
      } sm:flex justify-center font-medium`}
    >
      <ul className="h-full w-full">
        <NavItem href="/" color={color} isMobileMenuOpen={isMobileMenuOpen}>
          Home
        </NavItem>
      </ul>
      <button
        type="button"
        onClick={() => setCurrentModal("sign-in")}
        className={`${
          isMobileMenuOpen
            ? "py-4"
            : "px-16 sm:px-[51px] lg:px-[60px] py-3 sm:py-2 lg:py-3 sm:text-base lg:text-lg"
        } w-full border-${color} border-solid border-[1px] rounded-r-full rounded-l-full whitespace-nowrap`}
      >
        Sign in
      </button>
    </nav>
  );
}
