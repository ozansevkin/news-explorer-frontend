import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <p className="text-xl font-bold leading-normal font-serif">
        NewsExplorer
      </p>
    </Link>
  );
}
