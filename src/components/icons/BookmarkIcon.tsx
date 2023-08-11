interface BookmarkIconProps {
  className?: string;
}

export default function BookmarkIcon({ className }: BookmarkIconProps) {
  return (
    <svg
      className={`fill-none stroke-[#B6BCBF] stroke-2 ${className}`}
      width="14"
      height="19"
      viewBox="0 0 14 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z" />
    </svg>
  );
}
