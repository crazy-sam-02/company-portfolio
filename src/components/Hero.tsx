import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const WORDS = [
  "Digital Solutions",
  "AI-Powered Systems",
  "Scalable Platforms",
  "Smart Applications",
  "Next-Gen Technology",
];

const TYPE_SPEED = 70;
const ERASE_SPEED = 35;
const HOLD_TIME = 1400;

const Typewriter = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");

  useEffect(() => {
    const word = WORDS[wordIdx];
    let timeout: number;

    if (phase === "typing") {
      if (text.length < word.length) {
        timeout = window.setTimeout(() => setText(word.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = window.setTimeout(() => setPhase("holding"), HOLD_TIME);
      }
    } else if (phase === "holding") {
      timeout = window.setTimeout(() => setPhase("erasing"), 200);
    } else {
      if (text.length > 0) {
        timeout = window.setTimeout(() => setText(word.slice(0, text.length - 1)), ERASE_SPEED);
      } else {
        setWordIdx((i) => (i + 1) % WORDS.length);
        setPhase("typing");
      }
    }
    return () => window.clearTimeout(timeout);
  }, [text, phase, wordIdx]);

  // Longest word reserves width so the layout doesn't reflow while typing.
  const longest = WORDS.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <span className="relative inline-block align-bottom whitespace-nowrap text-accent font-display">
      {/* Invisible sizer keeps width stable */}
      <span aria-hidden className="invisible">{longest}</span>
      <span className="absolute inset-0 flex items-center">
        <span>{text}</span>
        <span className="caret" />
      </span>
    </span>
  );
};

const HeroVisual = () => (
  <div className="relative aspect-[1/1.1] w-full max-w-md mx-auto">
    {/* Concentric squares */}
    <div className="absolute inset-0 hairline animate-spin-slower" />
    <div className="absolute inset-6 hairline rotate-45 animate-spin-slow" />
    <div className="absolute inset-16 hairline" />
    {/* Inner core */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-24 w-24 hairline border-accent/60 flex items-center justify-center">
        <span className="absolute inset-0 border border-accent animate-pulse-ring" />
        <span className="font-display text-xs tracking-[0.3em] text-accent">PRX</span>
      </div>
    </div>
    {/* Floating dots */}
    <span className="absolute top-4 right-8 h-1.5 w-1.5 bg-accent animate-float-slow" />
    <span className="absolute bottom-10 left-6 h-1 w-1 bg-foreground/60 animate-float-slow [animation-delay:1.5s]" />
    <span className="absolute top-1/2 left-2 h-1 w-1 bg-accent/80 animate-float-slow [animation-delay:3s]" />
    {/* Corner ticks */}
    {[
      "top-0 left-0",
      "top-0 right-0",
      "bottom-0 left-0",
      "bottom-0 right-0",
    ].map((p) => (
      <span key={p} className={`absolute ${p} h-3 w-3 border-accent`}>
        <span className="absolute inset-0 border-l border-t border-accent" />
      </span>
    ))}
  </div>
);

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden lg:min-h-[760px] flex items-center">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade animate-grid-pan opacity-70" />
      {/* Soft blue vignette (solid color, not gradient) */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 hairline text-xs tracking-widest uppercase text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 bg-accent" />
              Innovation • Engineering • Intelligence
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              Building Future-Ready
              <br />
              <Typewriter />
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              At PRIONEX, we design and develop intelligent, scalable, and
              high-performance solutions that transform ideas into impactful
              digital products.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 bg-primary text-primary-foreground text-sm font-medium hairline border-primary glow-on-hover hover:scale-[1.02] transition-transform"
              >
                Start Your Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-7 hairline text-sm font-medium glow-on-hover hover:scale-[1.02] transition-transform"
              >
                Contact Us
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 max-w-md gap-6">
              {[
                { k: "5+", v: "Service Lines" },
                { k: "20+", v: "Projects Built" },
                { k: "100%", v: "Client Focused" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-bold text-foreground">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
