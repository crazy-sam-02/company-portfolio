import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => (
  <div
    className={`reveal max-w-3xl mb-14 ${
      align === "center" ? "mx-auto text-center" : "text-left"
    }`}
  >
    {eyebrow && (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 hairline text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-5`}
      >
        <span className="h-1 w-1 bg-accent" />
        {eyebrow}
      </div>
    )}
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);
