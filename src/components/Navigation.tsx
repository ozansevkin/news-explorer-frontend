import NavItem from "./NavItem";

interface NavigationProps {
  color: "white" | "black";
  isMobileMenuOpen: boolean;
}

export default function Navigation({
  color,
  isMobileMenuOpen,
}: NavigationProps) {
  return (
    <nav
      className={`${
        isMobileMenuOpen
          ? `absolute top-14 left-0 flex flex-col gap-y-5 w-full items-start px-adaptive pt-4 pb-6 ${
              color === "black" ? "bg-white" : "bg-zinc-900"
            }`
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
        className={`${
          isMobileMenuOpen
            ? "py-4"
            : "px-16 sm:px-[51px] py-3 sm:py-2 sm:text-base"
        } w-full border-${color} border-solid border-[1px] rounded-r-full rounded-l-full whitespace-nowrap`}
      >
        Sign in
      </button>
    </nav>
  );
}
