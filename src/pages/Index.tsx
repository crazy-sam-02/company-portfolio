import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { VisionMission } from "@/components/VisionMission";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <Services />
        <Projects />
        <Process />
        <WhyUs />
        <Pricing />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
