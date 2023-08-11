import { useContext } from "react";
import NavItem from "./NavItem";
import CurrentModalContext from "@/contexts/SetCurrentModalContext";
import Image from "next/image";
import logoutIcon from "@/images/icons/logout.svg";
import { useRouter } from "next/navigation";

interface NavigationProps {
  color: "white" | "black";
  isMobileMenuOpen: boolean;
  mobileMenuBackgroundColor: "bg-white" | "bg-zinc-900";
  isLoggedIn: boolean;
}

export default function Navigation({
  color,
  isMobileMenuOpen,
  mobileMenuBackgroundColor,
  isLoggedIn,
}: NavigationProps) {
  const router = useRouter();
  const setCurrentModal = useContext(CurrentModalContext);

  return (
    <nav
      className={`${
        isMobileMenuOpen
          ? `absolute top-14 left-0 flex flex-col gap-y-5 w-full items-start px-adaptive pt-4 pb-6 ${mobileMenuBackgroundColor}`
          : "hidden h-full items-center gap-x-8"
      } sm:flex justify-center font-medium`}
    >
      <ul className="h-full w-full flex flex-col sm:flex-row">
        <NavItem href="/" color={color} isMobileMenuOpen={isMobileMenuOpen}>
          Home
        </NavItem>
        {isLoggedIn && (
          <NavItem
            href="/saved-news"
            color={color}
            isMobileMenuOpen={isMobileMenuOpen}
          >
            Saved articles
          </NavItem>
        )}
      </ul>
      {isLoggedIn ? (
        <button
          type="button"
          onClick={() => router.push("/")}
          className={`flex justify-center w-full border-${color} border-solid border-[1px] rounded-r-full rounded-l-full whitespace-nowrap sm:pl-[15px] lg:pl-[19px] py-4 sm:py-2 lg:py-3 text-lg/6 sm:text-base/6 lg:text-lg/6`}
        >
          Ozan
          <Image
            src={logoutIcon}
            alt="log out"
            className="mx-[15px] sm:mx-[13px] lg:mx-[15px]"
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setCurrentModal("sign-in")}
          className={`w-full border-${color} border-solid border-[1px] rounded-r-full rounded-l-full whitespace-nowrap px-16 sm:px-[51px] lg:px-[60px] py-4 sm:py-2 lg:py-3 text-lg/6 sm:text-base/6 lg:text-lg/6`}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}
