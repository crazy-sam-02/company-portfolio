import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";

const socials = [
  { icon: Github, href: "https://github.com/prionex2025-hue", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/prionex-undefined-340201395/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/prionex_global", label: "Instagram" },
];

const info = [
  { icon: Mail, label: "Email", value: "prionex2025@gmail.com", href: "mailto:prionex2025@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9025895743", href: "tel:+911234567890" },
  { icon: MapPin, label: "Location", value: "Puducherry, India" },
];

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    const formData = new FormData(form);
    const apiKey = import.meta.env.VITE_WEB3FORMS_API_KEY;
    
    if (apiKey) {
      formData.append("access_key", apiKey);
    } else {
      console.error("Web3Forms API key is missing");
      toast.error("Configuration error. Please contact support.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Form Submitted Successfully — we'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Error submitting form. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-border">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build something remarkable</>}
          description="Tell us about your project — we usually respond within a day."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="reveal lg:col-span-2 hairline bg-surface p-8 flex flex-col">
            <h3 className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Get in touch
            </h3>

            <ul className="mt-6 space-y-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="h-10 w-10 hairline flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm hover:text-accent transition-colors">{value}</a>
                    ) : (
                      <div className="text-sm">{value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Follow</div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="h-10 w-10 hairline flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-3 hairline bg-surface p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full h-12 bg-background hairline px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full h-12 bg-background hairline px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Service (Subject)</label>
              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full h-12 bg-background hairline px-4 text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-muted-foreground">Select a service</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Full Stack Web Development">Full Stack Web Development</option>
                  <option value="Desktop Applications">Desktop Applications</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="AI Agents & Solutions">AI Agents & Solutions</option>
                  <option value="Other / General Inquiry">Other / General Inquiry</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-background hairline p-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your project…"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 bg-primary text-primary-foreground text-sm font-medium hairline border-primary glow-on-hover hover:scale-[1.02] transition-transform disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Message"}
              <Send size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
