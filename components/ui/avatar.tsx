type AvatarProps = {
  name: string;
  className?: string;
};

export function Avatar({ name, className = "" }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white ring-2 ring-primary/20 ${className}`}
      title={name}
    >
      {initials}
    </div>
  );
}
