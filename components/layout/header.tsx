import { BellIcon, MenuIcon } from "@/components/icons";
import { Avatar } from "@/components/ui/avatar";
import { SearchInput } from "@/components/ui/search-input";

type HeaderProps = {
  title: string;
  onMenuClick?: () => void;
};

export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-4 border-b border-card-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
      {onMenuClick && (
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      )}

      <h1 className="text-lg font-semibold text-foreground sm:text-xl">
        {title}
      </h1>

      <div className="ml-auto flex items-center gap-3 sm:gap-4">
        <SearchInput className="hidden w-48 md:block lg:w-64 xl:w-80" />

        <button
          type="button"
          className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          aria-label="Notifications"
        >
          <BellIcon />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
        </button>

        <Avatar name="Admin User" />
      </div>
    </header>
  );
}
