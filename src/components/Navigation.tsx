import { useContext } from "react";
import NavItem from "./NavItem";
import CurrentModalContext from "@/contexts/CurrentModalContext";
import { useRouter } from "next/navigation";
import CurrentUserContext from "@/contexts/CurrentUserContext";
import LogoutIcon from "./icons/LogoutIcon";

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
  const router = useRouter();
  const { setCurrentModal } = useContext(CurrentModalContext);
  const { currentUser, setCurrentUser, isLoggedIn } =
    useContext(CurrentUserContext);

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("jwt");
    router.push("/");
  };

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
          onClick={logout}
          className={`flex w-full justify-center border-${color} whitespace-nowrap rounded-l-full rounded-r-full border-[1px] border-solid py-4 text-lg/6 sm:py-2 sm:pl-[15px] sm:text-base/6 lg:py-3 lg:pl-[19px] lg:text-lg/6`}
        >
          {currentUser?.name}
          <div className="mx-[15px] sm:mx-[13px] lg:mx-[15px]">
            <LogoutIcon
              className={color === "white" ? "fill-white" : "fill-black"}
            />
          </div>
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
