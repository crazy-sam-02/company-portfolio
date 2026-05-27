import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PrivacyPolicy = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO 
        title="Privacy Policy | PRIONEX" 
        description="Privacy Policy of PRIONEX outlining how we collect and use your data." 
        url="https://prionex.com/privacy-policy" 
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-accent">
            <p>Last updated: May 2026</p>
            
            <h2>Introduction</h2>
            <p>
              At PRIONEX, accessible from prionex.com (and related domains), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PRIONEX and how we use it.
            </p>

            <h2>Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>Cookies and Web Beacons</h2>
            <p>
              Like any other website, PRIONEX uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:prionex2025@gmail.com">prionex2025@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
