import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-border/60 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" data-testid="nav-logo">
            <div className="w-9 h-9 rounded-lg bg-foreground text-background flex items-center justify-center font-serif text-lg font-bold group-hover:opacity-80 transition-opacity">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[1.05rem] leading-none tracking-tight">Anvesan</span>
              <span className="text-[0.58rem] font-medium tracking-[0.18em] text-muted-foreground uppercase leading-tight mt-0.5">
                Stablecoin Think Tank
              </span>
            </div>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center mr-3">
              {[
                { label: "Home", id: "hero" },
                { label: "Research", id: "featured-research" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-foreground/5"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* X / Twitter button */}
            <a
              href="https://x.com/anvesanorg"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-x-link"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border/60 hover:border-border rounded-lg transition-all hover:bg-foreground/5"
            >
              <XIcon />
              <span className="hidden sm:inline">@anvesanorg</span>
            </a>

            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-testid="theme-toggle"
              className="w-9 h-9 rounded-lg border border-border/60 bg-background/50 hover:bg-foreground/5 text-muted-foreground hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border pt-16 pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-serif text-base font-bold">
                  A
                </div>
                <span className="font-serif font-bold text-lg tracking-tight">Anvesan</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Stablecoin Research & Strategic Advisory for fintech operators, enterprises, and policymakers.
              </p>
            </div>

            {/* Nav */}
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">Navigation</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  { label: "Home", id: "hero" },
                  { label: "Research", id: "featured-research" },
                  { label: "Contact", id: "contact" },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button onClick={() => scrollTo(id)} className="hover:text-foreground transition-colors">
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">Connect</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://x.com/anvesanorg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <XIcon />
                    @anvesanorg
                  </a>
                </li>
                <li>
                  <a href="mailto:research@anvesan.org" className="hover:text-foreground transition-colors">
                    research@anvesan.org
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2026 Anvesan. All rights reserved.</p>
            <p>Stablecoin Research & Strategic Advisory</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
