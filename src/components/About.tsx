import Image from "next/image";
import AuthorImage from "@/images/author.png";

export default function About() {
  return (
    <div className="mx-auto flex max-w-8xl flex-col items-center gap-y-6 px-adaptive pb-20 pt-8 text-zinc-900 sm:flex-row sm:gap-x-8 sm:pb-16 sm:pt-10 lg:gap-x-14 lg:py-20">
      <div className="sm:basis-2/5">
        <Image
          src={AuthorImage}
          alt="author"
          className="mx-auto rounded-full"
          width={350}
        />
      </div>
      <section className="flex flex-col gap-y-4 py-8 sm:basis-3/5 lg:gap-y-6">
        <h2
          className="font-serif text-3xl leading-10 lg:text-[40px]
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
