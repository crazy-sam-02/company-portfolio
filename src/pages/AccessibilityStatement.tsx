import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AccessibilityStatement = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO 
        title="Accessibility Statement | PRIONEX" 
        description="PRIONEX is committed to ensuring digital accessibility for people with disabilities." 
        url="https://prionex.com/accessibility" 
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">Accessibility Statement</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-accent">
            <p>Last updated: May 2026</p>
            
            <h2>Our Commitment</h2>
            <p>
              PRIONEX is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2>Measures to Support Accessibility</h2>
            <p>PRIONEX takes the following measures to ensure accessibility of our website:</p>
            <ul>
              <li>Include accessibility as part of our mission statement.</li>
              <li>Integrate accessibility into our procurement practices.</li>
              <li>Provide continual accessibility training for our staff.</li>
              <li>Assign clear accessibility targets and responsibilities.</li>
            </ul>

            <h2>Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. PRIONEX is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>

            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of PRIONEX. Please let us know if you encounter accessibility barriers on PRIONEX:
            </p>
            <ul>
              <li>E-mail: <a href="mailto:prionex2025@gmail.com">prionex2025@gmail.com</a></li>
            </ul>
            <p>We try to respond to feedback within 2 business days.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityStatement;
