import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const RefundPolicy = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO 
        title="Refund Policy | PRIONEX" 
        description="Details on our refund policy for software development, web development, and digital services." 
        url="https://prionex.com/refund-policy" 
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">Refund Policy</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-accent">
            <p>Last updated: May 2026</p>
            
            <h2>General Policy</h2>
            <p>
              At PRIONEX, we strive to deliver high-quality digital solutions and services. Because our services involve dedicated time and resources, our refund policy varies depending on the nature of the project.
            </p>

            <h2>Software Development & Digital Services</h2>
            <p>
              For custom software development, web development, and mobile app development projects:
            </p>
            <ul>
              <li><strong>Initial Deposit:</strong> Deposits made prior to the commencement of work are non-refundable after the project kicks off and resources are allocated.</li>
              <li><strong>Milestone Payments:</strong> Payments tied to specific deliverables are non-refundable once the milestone has been approved by the client.</li>
              <li><strong>Cancellation:</strong> If a project is cancelled by the client before completion, the client will be billed for the work completed up to that point.</li>
            </ul>

            <h2>Consulting & AI Solutions</h2>
            <p>
              Consulting fees and payments for strategy sessions are non-refundable once the service has been provided.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              If you are dissatisfied with our services, we encourage you to reach out to our team immediately. We will work diligently to resolve any issues and ensure the final product meets the agreed-upon specifications.
            </p>

            <h2>Contact Information</h2>
            <p>
              To discuss matters relating to refunds or project cancellations, please contact us at <a href="mailto:prionex2025@gmail.com">prionex2025@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
