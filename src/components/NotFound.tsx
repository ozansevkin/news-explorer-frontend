import Image from "next/image";
import notFoundIcon from "@/images/icons/not-found.svg";

export default function NotFound({ text }: { text: string }) {
  return (
    <div className="max-w-xs flex flex-col items-center justify-center py-20 px-10 gap-y-6 mx-auto">
      <Image src={notFoundIcon} alt="not found" />
      <h3 className="text-[26px] font-serif leading-[30px]">Nothing Found</h3>
      <p className="text-gray-400 text-center">{text}</p>
    </div>
  );
}
