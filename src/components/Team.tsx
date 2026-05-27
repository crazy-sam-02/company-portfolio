import { SectionHeader } from "./SectionHeader";

const team = [
  {
    name: "Sambath S",
    role: "Developer & Tech Expert",
    initials: "SS",
    bio: "Full-stack engineer turning complex problems into elegant products.",
  },
  {
    name: "Thamizhkumaran MDR",
    role: "Project Manager & Hardware Expert",
    initials: "TM",
    bio: "Bridges hardware, software, and people — keeps every project on track.",
  },
];

export const Team = () => (
  <section id="team" className="py-20 lg:py-28 border-t border-border">
    <div className="container">
      <SectionHeader
        eyebrow="The Team"
        title={<>Small team. Sharp focus.</>}
        description="The people behind every PRIONEX product."
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {team.map((m, i) => (
          <article
            key={m.name}
            className="reveal hairline bg-surface p-8 glow-on-hover text-center"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="relative mx-auto h-24 w-24 hairline border-accent/40 flex items-center justify-center">
              <span className="absolute inset-0 border border-accent animate-pulse-ring" />
              <span className="font-display text-2xl font-bold text-accent">{m.initials}</span>
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold">{m.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{m.role}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
