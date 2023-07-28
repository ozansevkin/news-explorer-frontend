import Image from "next/image";
import notFoundIcon from "@/images/icons/not-found.svg";

export default function NotFound({ text }: { text: string }) {
  return (
    <div className="bg-neutral-100 flex flex-col items-center justify-center py-12 lg:py-20 gap-y-4 lg:gap-y-6 mx-auto">
      <Image src={notFoundIcon} alt="not found" />
      <h3 className="text-[26px] font-serif leading-[30px]">Nothing Found</h3>
      <p className="text-gray-400 text-center">{text}</p>
    </div>
  );
}
