import NavItem from "./NavItem";

export default function Navigation({ color }: { color: "white" | "black" }) {
  return (
    <nav className="flex items-center justify-center gap-x-8 font-medium h-full">
      <ul className="h-full">
        <NavItem href="/" color={color}>
          Home
        </NavItem>
      </ul>
      <button
        type="button"
        className={`border-${color} border-solid border-[1px] rounded-r-full rounded-l-full px-16 py-3`}
      >
        Sign in
      </button>
    </nav>
  );
}
