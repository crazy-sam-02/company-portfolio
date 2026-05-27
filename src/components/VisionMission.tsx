import { Eye, Target } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export const VisionMission = () => (
  <section id="vision" className="py-20 lg:py-28 border-t border-border">
    <div className="container">
      <SectionHeader
        eyebrow="Our Compass"
        title={<>Vision &amp; Mission</>}
        description="The principles that direct every line of code we write and every product we ship."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: Eye,
            label: "Vision",
            text: "To become a leading innovation-driven technology company that empowers businesses with intelligent digital solutions for a smarter future.",
          },
          {
            icon: Target,
            label: "Mission",
            text: "Deliver high-quality, scalable, and efficient software solutions while maintaining transparency, innovation, and customer satisfaction at every step.",
          },
        ].map(({ icon: Icon, label, text }) => (
          <article
            key={label}
            className="reveal hairline p-8 lg:p-10 bg-surface glow-on-hover relative"
          >
            <span className="absolute top-0 left-0 h-px w-12 bg-accent" />
            <Icon className="text-accent" size={28} strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {label}
            </h3>
            <p className="mt-3 text-lg leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
