import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Categories } from "@/components/sections/categories";
import { Stats } from "@/components/sections/stats";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Catalog } from "@/components/sections/catalog";
import { Coverage } from "@/components/sections/coverage";
import { LeadForm } from "@/components/sections/lead-form";
import { FinalCta } from "@/components/sections/final-cta";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { StickyCta } from "@/components/shared/sticky-cta";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Categories />
      <Stats />
      <WhyUs />
      <Testimonials />
      <Catalog />
      <Coverage />
      <LeadForm />
      <FinalCta />

      {/* Sticky / floating elements */}
      <WhatsAppButton />
      <StickyCta />
    </main>
  );
}
