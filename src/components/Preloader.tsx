import Image from "next/image";
import preloaderIcon from "@/images/icons/preloader.png";

export default function Preloader({ text }: { text: string }) {
  return (
    <div className="bg-neutral-100 flex flex-col items-center justify-center py-12 lg:py-20  gap-y-4 lg:gap-y-6">
      <Image src={preloaderIcon} alt="preloader" className="animate-spin" />
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
