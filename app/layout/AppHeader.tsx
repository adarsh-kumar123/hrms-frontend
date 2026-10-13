import { Search, Bell, ChevronDown } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-[70px] items-center justify-between border-b border-border bg-background/90 px-6 backdrop-blur">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full rounded-xl bg-surface py-2.5 pl-11 pr-4 text-sm outline-none ring-1 ring-border focus:ring-primary-500"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        <button className="relative rounded-full p-2 hover:bg-primary-50">
          <Bell className="h-5 w-5" />
        </button>

        <button className="flex items-center gap-3 border-l border-border pl-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">
            A
          </div>
          <div className="text-left leading-tight">
            <p className="text-sm font-semibold">Admin</p>
            <p className="text-xs text-muted">Administrator</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted" />
        </button>
      </div>
    </header>
  );
}