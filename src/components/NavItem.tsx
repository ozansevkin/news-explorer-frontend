import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  color: "white" | "black";
}

export default function NavItem({ href, children, color }: NavItemProps) {
  return (
    <li className="h-full">
      <Link
        href={href}
        className={`flex items-center border-solid border-b-[3px] border-${color} h-full px-7`}
      >
        {children}
      </Link>
    </li>
  );
}
