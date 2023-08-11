export default function Preloader({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 bg-neutral-100 py-12  lg:gap-y-6 lg:py-20">
      <span className="h-[74px] w-[74px] animate-spin rounded-full border-2 border-gray-300 border-b-gray-800" />
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
