import Image from "next/image";
import notFoundIcon from "@/images/icons/not-found.svg";

export default function NotFound({ text }: { text: string }) {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-y-4 bg-neutral-100 py-12 lg:gap-y-6 lg:py-20">
      <Image src={notFoundIcon} alt="not found" />
      <h3 className="font-serif text-[26px] leading-[30px]">Nothing Found</h3>
      <p className="text-center text-gray-400">{text}</p>
    </div>
  );
}
