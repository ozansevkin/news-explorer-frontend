import Link from "next/link";
import Image from "next/image";
import githubIcon from "@/images/icons/github.svg";
import linkedinIcon from "@/images/icons/linkedin.svg";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-8xl flex-col-reverse gap-y-10 px-adaptive py-5 md:flex-row md:justify-between md:py-8 ">
      <p className="text-base leading-snug text-gray-400">
        &copy; {year} Developed by Ozan Sevkin
      </p>
      <div className="flex justify-between md:gap-x-10">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10">
          <Link href="/">Home</Link>
          <a href="https://cs50.harvard.edu/x/2023" target="_blank">
            CS50
          </a>
          <a href="https://tripleten.com" target="_blank">
            TripleTen
          </a>
        </div>
        <address className="flex gap-x-6">
          <a href="https://github.com/ozansevkin" target="_blank">
            <Image src={githubIcon} alt="github logo" width={20} />
          </a>
          <a href="https://linkedin.com/in/ozansevkin" target="_blank">
            <Image src={linkedinIcon} alt="linkedin logo" width={20} />
          </a>
        </address>
      </div>
    </footer>
  );
}
