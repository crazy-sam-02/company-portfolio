import { Github, Linkedin, Instagram } from "lucide-react";
import { PrionexLogo } from "./PrionexLogo";

const quick = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#why", label: "Why Us" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

const services = [
  "Mobile App Development",
  "Full Stack Web Development",
  "Desktop Applications",
  "Digital Marketing",
  "AI Agents & Solutions",
];

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <PrionexLogo />
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Engineering future-ready digital solutions for ambitious teams and brands.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/prionex2025-hue", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/prionex-undefined-340201395/", label: "LinkedIn" },
              { Icon: Instagram, href: "https://www.instagram.com/prionex_global", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-9 w-9 hairline flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs text-center me-20 tracking-[0.3em] uppercase text-muted-foreground mb-5">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
            {quick.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s} className="text-sm text-muted-foreground">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="mailto:prionex2025@gmail.com" className="hover:text-accent transition-colors">prionex2025@gmail.com</a></li>
            <li><a href="tel:+911234567890" className="hover:text-accent transition-colors">+91 9025895743</a></li>
            <li>Puducherry, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted-foreground">© 2026 PRIONEX. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <a href="/legal" className="hover:text-foreground transition-colors">Legal</a>
          <a href="/terms-conditions" className="hover:text-foreground transition-colors">Terms & Conditions</a>
          <a href="/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</a>
          <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="/accessibility" className="hover:text-foreground transition-colors">Accessibility Statement</a>
        </div>
        <p className="text-xs text-muted-foreground tracking-widest uppercase hidden lg:block">Built with precision</p>
      </div>
    </div>
  </footer>
);
