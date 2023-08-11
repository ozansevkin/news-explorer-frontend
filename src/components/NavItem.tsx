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
            : `h-full justify-center px-4 lg:px-7 ${
                isActive && `border-b-[3px] border-${color}`
              }`
        } flex w-full items-center whitespace-nowrap sm:text-base lg:text-lg`}
      >
        {children}
      </Link>
    </li>
  );
}
