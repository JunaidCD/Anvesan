import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-foreground text-background flex items-center justify-center font-serif text-xl font-bold group-hover:bg-primary/90 transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none">Anvesan</span>
              <span className="text-[0.6rem] font-medium tracking-widest text-muted-foreground uppercase leading-tight mt-1">
                Stablecoin Think Tank
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <button onClick={() => scrollToSection("hero")} className="hover:text-foreground transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("featured-research")} className="hover:text-foreground transition-colors">
                Research
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-foreground transition-colors">
                Contact
              </button>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-9 h-9 border border-border bg-background hover:bg-muted"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-muted/50 border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-foreground text-background flex items-center justify-center font-serif text-lg font-bold">
                  A
                </div>
                <span className="font-serif font-bold text-xl">Anvesan</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Stablecoin Research & Strategic Advisory for fintech operators, enterprises, and policymakers.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 font-serif text-lg">Platform</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection("hero")} className="hover:text-foreground transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("featured-research")} className="hover:text-foreground transition-colors">Research</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="hover:text-foreground transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 font-serif text-lg">Connect</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    Twitter / X
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
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© 2026 Anvesan. All rights reserved.</p>
            <p>Stablecoin Research & Strategic Advisory</p>
          </div>
        </div>
      </footer>
    </div>
  );
}