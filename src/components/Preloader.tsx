export default function Preloader({ text }: { text: string }) {
  return (
    <div className="bg-neutral-100 flex flex-col items-center justify-center py-12 lg:py-20  gap-y-4 lg:gap-y-6">
      <span className="w-[74px] h-[74px] rounded-full border-2 border-gray-300 border-b-gray-800 animate-spin" />
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
