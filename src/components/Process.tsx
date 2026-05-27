import { Compass, ClipboardList, Code2, TestTube2, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { icon: Compass, title: "Discovery", desc: "We listen, research, and define the problem with you." },
  { icon: ClipboardList, title: "Planning", desc: "Roadmaps, architecture, and milestones — fully transparent." },
  { icon: Code2, title: "Development", desc: "Iterative builds with clean, scalable, well-tested code." },
  { icon: TestTube2, title: "Testing", desc: "Automated and manual QA across devices and edge cases." },
  { icon: Rocket, title: "Launch", desc: "Smooth deployment, monitoring, and ongoing support." },
];

export const Process = () => (
  <section id="process" className="py-20 lg:py-28 border-t border-border">
    <div className="container">
      <SectionHeader
        eyebrow="How We Work"
        title={<>From discovery to launch</>}
        description="A transparent, collaborative, and result-driven process at every stage."
      />

      <div className="relative">
        {/* connecting line (desktop) */}
        <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-border" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal relative bg-background"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="hairline bg-surface p-6 h-full glow-on-hover">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 hairline bg-background flex items-center justify-center">
                    <Icon className="text-accent" size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-2xl font-bold text-muted-foreground/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
