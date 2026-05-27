import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PrionexLogo } from "./PrionexLogo";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#why", label: "Why Us" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <PrionexLogo />

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden lg:inline-flex items-center px-5 h-10 text-sm font-medium hairline glow-on-hover bg-transparent"
        >
          Get Started
        </a>

        <button
          className="lg:hidden p-2 hairline"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center px-5 h-10 text-sm font-medium hairline"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
