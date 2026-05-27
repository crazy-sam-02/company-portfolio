import { Lightbulb, Gauge, Users, Layers } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Lightbulb, title: "Innovation First", desc: "We push boundaries with modern stacks, AI, and bold ideas." },
  { icon: Gauge, title: "Performance Driven", desc: "Optimized for speed, reliability, and measurable outcomes." },
  { icon: Users, title: "Client-Centric Approach", desc: "Your goals lead our process — clear comms, no surprises." },
  { icon: Layers, title: "Scalable Solutions", desc: "Built to grow — architecture that scales with your business." },
];

export const WhyUs = () => (
  <section id="why" className="py-20 lg:py-28 border-t border-border">
    <div className="container">
      <SectionHeader
        eyebrow="Why PRIONEX"
        title={<>Built different. Built to deliver.</>}
        description="What you get when you partner with us."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="reveal hairline p-7 bg-surface glow-on-hover"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <Icon className="text-accent" size={26} strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
