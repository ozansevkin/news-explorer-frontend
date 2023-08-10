import Image from "next/image";
import AuthorImage from "@/images/author.png";

export default function About() {
  return (
    <div className="px-adaptive max-w-8xl mx-auto pt-8 pb-20 sm:pt-10 sm:pb-16 lg:py-20 text-zinc-900 flex flex-col items-center sm:flex-row gap-y-6 sm:gap-x-8 lg:gap-x-14">
      <div className="sm:basis-2/5">
        <Image
          src={AuthorImage}
          alt="author"
          className="rounded-full mx-auto"
          width={350}
        />
      </div>
      <section className="sm:basis-3/5 py-8 flex flex-col gap-y-4 lg:gap-y-6">
        <h2
          className="font-serif text-3xl lg:text-[40px] leading-10
lg:leading-[46px]"
        >
          About the author
        </h2>
        <p>
          Ozan is highly capable of using javascript technologies such as
          React.js, Next.js, Typescript, Node.js and Express.js to build
          full-stack and fully responsive apps.
        </p>
        <p>
          Ozan has completed CS50, a computer science course offered by Harvard
          University, where he learned fundamentals of programming. After that,
          he completed a software engineering bootcamp offered by TripleTen,
          which imitates the real-world working environment with code reviews
          and sprints.
        </p>
      </section>
    </div>
  );
}
