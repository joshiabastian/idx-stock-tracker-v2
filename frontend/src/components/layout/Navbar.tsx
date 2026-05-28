import { NavLink } from "react-router-dom";

const NAV = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/watchlist", label: "Watchlist" },
  { to: "/scanner", label: "Scanner" },
];

export function Navbar() {
  return (
    <header className="h-12 border-b border-border bg-bg flex items-center px-4 gap-6 shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M2 12L6 6L9 9L14 3" stroke="#0a0e0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="font-semibold text-sm">
          quantamental<span className="text-text-dim">/idx</span>
        </span>
      </div>

      <nav className="flex items-center gap-1 text-sm">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `px-3 py-1.5 rounded transition-colors ${
                isActive
                  ? "text-text font-semibold bg-surface-2"
                  : "text-text-muted hover:text-text"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari saham, sektor, atau berita..."
            className="w-full h-8 bg-surface border border-border rounded-md pl-8 pr-12 text-sm placeholder:text-text-dim focus:outline-none focus:border-border-strong"
          />
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="7" cy="7" r="5" stroke="var(--color-text-dim)" strokeWidth="1.5" />
            <path d="M11 11L14 14" stroke="var(--color-text-dim)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-text-dim font-mono border border-border rounded px-1 py-0.5">
            ⌘K
          </kbd>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-bull animate-pulse" />
          <span className="text-text-muted font-mono">MARKET OPEN</span>
          <span className="text-text-dim font-mono">· 14:38 WIB</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-surface-2 border border-border flex items-center justify-center text-xs font-medium">
          RA
        </div>
      </div>
    </header>
  );
}
