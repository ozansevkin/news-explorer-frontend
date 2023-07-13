export default function Logo({ color }: { color: string }) {
  return (
    <p className={`${color} text-xl font-bold leading-normal`}>NewsExplorer</p>
  );
}
