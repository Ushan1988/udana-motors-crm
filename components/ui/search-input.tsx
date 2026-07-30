import { SearchIcon } from "@/components/icons";

type SearchInputProps = {
  placeholder?: string;
  className?: string;
};

export function SearchInput({
  placeholder = "Search leads, campaigns...",
  className = "",
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-card-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
      />
    </div>
  );
}
