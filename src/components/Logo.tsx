import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <p className="font-serif text-base font-bold leading-normal sm:text-xl">
        NewsExplorer
      </p>
    </Link>
  );
}
