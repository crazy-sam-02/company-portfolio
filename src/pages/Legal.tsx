import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Legal = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO 
        title="Legal Information | PRIONEX" 
        description="Legal information, disclaimer, and intellectual property details for PRIONEX." 
        url="https://prionex.com/legal" 
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">Legal Information</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-accent">
            <p>Last updated: May 2026</p>
            
            <h2>Company Information</h2>
            <p>
              PRIONEX is a registered company providing digital solutions, mobile app development, full-stack web development, and AI solutions.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The content, design, logo, and overall appearance of this website are the intellectual property of PRIONEX and are protected by copyright laws. You may not reproduce, distribute, or use any materials without our explicit written permission.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Legal Information, please contact us at <a href="mailto:prionex2025@gmail.com">prionex2025@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
