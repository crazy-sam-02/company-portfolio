import logoSrc from "@/assets/prionex-logo.png";

export const PrionexLogo = ({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) => (
  <a href="#home" className={`flex items-center gap-2.5 group ${className}`}>
    <img
      src={logoSrc}
      alt="PRIONEX"
      className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      loading="eager"
      decoding="async"
    />
    {showWordmark && (
      <span className="font-display text-lg font-bold tracking-[0.18em] hidden sm:inline">
        PRIONEX
      </span>
    )}
  </a>
);
