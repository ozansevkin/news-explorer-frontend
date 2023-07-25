interface TrashIconProps {
  className?: string;
}

export default function TrashIcon({ className }: TrashIconProps) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`fill-[#B6BCBF] ${className}`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3H9v2H3v2h18V5h-6V3ZM5 9v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9h-2v11H7V9H5Zm4 0v9h2V9H9Zm4 0v9h2V9h-2Z"
      />
    </svg>
  );
}
