import Image from "next/image";
import AuthorImage from "@/images/author.png";

export default function About() {
  return (
    <div className="py-20 text-zinc-900 flex gap-x-14">
      <div className="basis-1/3">
        <Image
          src={AuthorImage}
          alt="author"
          className="rounded-full ml-auto"
          width={350}
        />
      </div>
      <section className="basis-2/3 py-8 flex flex-col gap-y-6">
        <h2
          className="font-serif text-[40px]
leading-[46px]"
        >
          About the author
        </h2>
        <p>
          As a software developer with a background in cost management and
          engineering, Ozan brings strong problem-solving and analytical
          thinking skills to his work. Through a combination of formal education
          and self-learning, he has honed his skills in writing maintainable and
          readable code, and he is committed to delivering high-quality software
          that meets the needs of users and stakeholders. He is highly capable
          of using javascript technologies such as React.js, Next.js, Node.js
          and Express.js to build full-stack and fully responsive apps.
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
