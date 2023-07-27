interface MobileMenuButtonProps {
  color: "white" | "black";
  onClick: () => void;
  isMobileMenuOpen: boolean;
}

export default function MobileMenuButton({
  color,
  onClick,
  isMobileMenuOpen,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label="menu"
      className="w-6 h-6 flex sm:hidden flex-col items-center justify-center gap-y-1"
      onClick={onClick}
    >
      <span
        className={`w-4 border-${color} border-[1px] transition ${
          isMobileMenuOpen && "rotate-45  translate-y-[3px]"
        }`}
      ></span>
      <span
        className={`w-4 border-${color} border-[1px] transition ${
          isMobileMenuOpen && "-rotate-45  -translate-y-[3px]"
        }`}
      ></span>
    </button>
  );
}
