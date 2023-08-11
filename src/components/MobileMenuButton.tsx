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
      className="flex h-6 w-6 flex-col items-center justify-center gap-y-1 sm:hidden"
      onClick={onClick}
    >
      <span
        className={`w-4 border-${color} border-[1px] transition ${
          isMobileMenuOpen && "translate-y-[3px]  rotate-45"
        }`}
      ></span>
      <span
        className={`w-4 border-${color} border-[1px] transition ${
          isMobileMenuOpen && "-translate-y-[3px]  -rotate-45"
        }`}
      ></span>
    </button>
  );
}
