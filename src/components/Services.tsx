import { useState } from "react";
import {
  Smartphone,
  Globe,
  Monitor,
  TrendingUp,
  Bot,
  X,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps built for performance, polish, and reach.",
    points: [
      "Platform choice: React Native, Flutter, or native SDKs",
      "Performance optimizations and native integrations",
      "App store submission and CI/CD setup",
    ],
  },
  {
    icon: Globe,
    title: "Full Stack Web Development",
    desc: "End-to-end web platforms with modern stacks, secure APIs, and clean UX.",
    points: [
      "Frontend: React + TypeScript with accessible UI",
      "Backend: REST/GraphQL APIs, auth, and data modeling",
      "Deployment: containerization, monitoring, and scaling",
    ],
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    desc: "Reliable desktop tools for productivity, operations, and internal systems.",
    points: [
      "Electron and Tauri options with native integrations",
      "Auto-updates and offline-first behavior",
      "Secure storage and cross-platform packaging",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Growth-focused SEO, social, and performance marketing campaigns.",
    points: [
      "SEO audits, keyword strategy, and on-page optimizations",
      "Paid ads, creatives, and conversion tracking",
      "Analytics, A/B testing, and growth loops",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents & Solutions",
    desc: "Custom AI agents, automations, and ML-powered product features.",
    points: [
      "Agent design, prompt engineering, and safety",
      "Automation of workflows and integrations",
      "Model selection, evaluation, and deployment",
    ],
  },
];

export const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 border-t border-border">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title={<>Engineered for every layer of your product</>}
          description="A focused suite of services to help you ship faster, scale smarter, and stay ahead of the curve."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, points }, i) => (
            <article
              key={title}
              className="reveal group hairline bg-surface relative overflow-hidden flex flex-col h-[320px] sm:h-[340px]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Main Content */}
              <div className="p-7 flex flex-col h-full relative z-0 glow-on-hover">
                <span className="absolute top-0 right-0 text-[10px] tracking-widest text-muted-foreground/60 px-2 py-1">
                  0{i + 1}
                </span>
                <div className="h-12 w-12 hairline flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                  <Icon className="text-accent" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">{desc}</p>
  
                <div className="mt-6 flex items-start w-full">
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    aria-expanded={expanded === i}
                    className="flex items-center gap-2 text-xs text-muted-foreground/80 hover:text-accent group-hover:text-accent transition-colors focus:outline-none"
                  >
                    <span>Learn more</span>
                    <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
                  </button>
                </div>
              </div>

              {/* Slide-up Overlay Content */}
              <div 
                className={`absolute inset-0 bg-background/95 backdrop-blur-xl p-7 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-10 ${
                  expanded === i ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-lg font-semibold text-accent leading-tight">{title}</h3>
                  <button 
                    onClick={() => setExpanded(null)} 
                    className="h-8 w-8 ml-3 rounded-full bg-surface hairline flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground focus:outline-none flex-shrink-0"
                    aria-label="Close details"
                  >
                    <X size={14} />
                  </button>
                </div>
                
                <div className="flex-grow overflow-y-auto pr-2 pb-2">
                  <ul className="space-y-4">
                    {points?.map((p, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-sm text-muted-foreground group/item"
                      >
                        <div className="mt-1 h-5 w-5 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent),0.8)]" />
                        </div>
                        <span className="leading-snug transition-colors group-hover/item:text-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
