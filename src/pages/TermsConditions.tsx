import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TermsConditions = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO 
        title="Terms & Conditions | PRIONEX" 
        description="Terms and Conditions governing the use of PRIONEX services and website." 
        url="https://prionex.com/terms-conditions" 
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-accent">
            <p>Last updated: May 2026</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to PRIONEX. By accessing this website, we assume you accept these terms and conditions. Do not continue to use PRIONEX if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2>2. License</h2>
            <p>
              Unless otherwise stated, PRIONEX and/or its licensors own the intellectual property rights for all material on PRIONEX. All intellectual property rights are reserved. You may access this from PRIONEX for your own personal use subjected to restrictions set in these terms and conditions.
            </p>

            <h2>3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any website material in any other media</li>
              <li>Selling, sublicensing, and/or otherwise commercializing any website material</li>
              <li>Publicly performing and/or showing any website material</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
              <li>Using this website in any way that impacts user access to this website</li>
            </ul>

            <h2>4. User Content</h2>
            <p>
              In these Website Standard Terms and Conditions, "User Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant PRIONEX a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
            </p>

            <h2>5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
