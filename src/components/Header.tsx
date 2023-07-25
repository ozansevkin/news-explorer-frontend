import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header({ color }: { color: "white" | "black" }) {
  return (
    <header
      className={`text-${color} flex justify-between items-center h-[80px] bg-[#c4c4c4] bg-opacity-[0.01]`}
    >
      <Logo />
      <Navigation color={color} />
      <span className="absolute top-[79px] left-0 w-full border-solid border-b-[1px] border-[rgba(255,255,255,0.20)]" />
    </header>
  );
}
