import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="h-full w-full">
      <Link
        href={href}
        className={`${
          isMobileMenuOpen
            ? "h-14"
            : `h-full px-4 lg:px-7 justify-center ${
                isActive && `border-b-[3px] border-${color}`
              }`
        } flex items-center w-full sm:text-base lg:text-lg whitespace-nowrap`}
      >
        {children}
      </Link>
    </li>
  );
}
