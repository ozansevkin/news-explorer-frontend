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
          ? `absolute left-0 top-14 flex w-full flex-col items-start gap-y-5 px-adaptive pb-6 pt-4 ${mobileMenuBackgroundColor}`
          : "hidden h-full items-center gap-x-8"
      } justify-center font-medium sm:flex`}
    >
      <ul className="flex h-full w-full flex-col sm:flex-row">
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
          className={`flex w-full justify-center border-${color} whitespace-nowrap rounded-l-full rounded-r-full border-[1px] border-solid py-4 text-lg/6 sm:py-2 sm:pl-[15px] sm:text-base/6 lg:py-3 lg:pl-[19px] lg:text-lg/6`}
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
          className={`w-full border-${color} whitespace-nowrap rounded-l-full rounded-r-full border-[1px] border-solid px-16 py-4 text-lg/6 sm:px-[51px] sm:py-2 sm:text-base/6 lg:px-[60px] lg:py-3 lg:text-lg/6`}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}
