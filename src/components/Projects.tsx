import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

type Project = { name: string; image: string };

const categories: Record<string, Project[]> = {
  "Mobile Apps": [
    { name: "Food Delivery App", image: "/projects/food_delivery_app_1777699100871.png" },
    { name: "Civic Solution App", image: "/projects/civic ai.webp" },
    { name: "College Event App", image: "/projects/college-event.webp" }
  ],
  "Web Apps": [
    { name: "LMS Portal", image: "/projects/lms_portal_1777699148821.png" },
    { name: "Enterprise SaaS Application", image: "/projects/ai_resume_builder_1777699163883.png" },
    { name: "Restaurant Website", image: "/projects/restaurant_website_1777699178775.png" }
  ],
  "Desktop Apps": [
    { name: "Inventory System", image: "/projects/inventory_system_1777699195196.png" },
    { name: "Billing Software", image: "/projects/billing-software.webp" }
  ],
  "Digital Marketing": [
    { name: "SEO Growth Project", image: "/projects/seo_growth_1777699226874.png" },
    { name: "Lead Generation", image: "/projects/lead generation.jpg" }
  ],
  "AI Solutions": [
    { name: "AI Chatbot", image: "/projects/Chatbot-examples.webp" },
    { name: "AI Predictive Maintenance", image: "/projects/fake_news_detection_1777699275838.png" },
    { name: "Automation System", image: "/projects/ai-automation.jpg" }
  ],
};

type CategoryKey = keyof typeof categories;
const cats = Object.keys(categories) as CategoryKey[];

export const Projects = () => {
  const [active, setActive] = useState<CategoryKey>(cats[0]);

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-border">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title={<>Selected work across platforms</>}
          description="A snapshot of what we've shipped — from consumer mobile apps to AI-driven systems."
        />

        <div className="reveal flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 h-10 text-xs sm:text-sm font-medium hairline transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:border-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories[active].map((project, i) => (
            <article
              key={project.name}
              className="group hairline bg-surface p-6 glow-on-hover animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] hairline bg-background relative overflow-hidden mb-5">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 backdrop-blur-md px-2 py-1 rounded">
                  {active}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Crafted with focus on performance, UX, and scalability.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
