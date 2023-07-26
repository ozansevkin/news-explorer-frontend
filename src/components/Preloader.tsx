import Image from "next/image";
import preloaderIcon from "@/images/icons/preloader.png";

export default function Preloader({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-y-6">
      <Image src={preloaderIcon} alt="preloader" className="animate-spin" />
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
