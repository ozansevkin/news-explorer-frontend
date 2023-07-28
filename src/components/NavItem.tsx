import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  color: "white" | "black";
  isMobileMenuOpen: boolean;
}

export default function NavItem({
  href,
  children,
  color,
  isMobileMenuOpen,
}: NavItemProps) {
  return (
    <li className="h-full w-full">
      <Link
        href={href}
        className={`${
          isMobileMenuOpen
            ? "h-14"
            : `h-full lg:px-7 border-solid border-b-[3px] border-${color} justify-center`
        } flex items-center w-full sm:text-base lg:text-lg`}
      >
        {children}
      </Link>
    </li>
  );
}
