import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tiers = [
  { name: "Mobile App", price: "₹25,000+", features: ["iOS & Android", "Modern UI", "API integration"] },
  { name: "Web Development", price: "₹15,000+", features: ["Responsive design", "SEO ready", "CMS optional"] },
  { name: "Desktop App", price: "₹20,000+", features: ["Cross-platform", "Offline support", "Auto-updates"] },
  { name: "Digital Marketing", price: "₹10,000", suffix: "/month", features: ["SEO + content", "Social campaigns", "Monthly reports"] },
  { name: "AI Solutions", price: "₹30,000+", features: ["Custom agents", "Model integration", "Automation"] },
];

export const Pricing = () => (
  <section id="pricing" className="py-20 lg:py-28 border-t border-border">
    <div className="container">
      <SectionHeader
        eyebrow="Pricing"
        title={<>Transparent starting points</>}
        description="Pricing varies based on complexity and requirements. Reach out for a tailored quote."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tiers.map((t, i) => (
          <article
            key={t.name}
            className="reveal hairline bg-surface p-7 flex flex-col glow-on-hover"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <h3 className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {t.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold">{t.price}</span>
              {t.suffix && <span className="text-sm text-muted-foreground">{t.suffix}</span>}
            </div>
            <div className="my-6 h-px bg-border" />
            <ul className="space-y-3 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center h-11 px-5 hairline text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Request Quote
            </a>
          </article>
        ))}
      </div>

      <p className="reveal mt-10 text-center text-xs text-muted-foreground tracking-wide">
        * Pricing varies based on complexity and requirements.
      </p>
    </div>
  </section>
);
