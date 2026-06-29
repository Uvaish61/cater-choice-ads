import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Categories } from "@/components/sections/categories";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Stats } from "@/components/sections/stats";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Catalog } from "@/components/sections/catalog";
import { Coverage } from "@/components/sections/coverage";
import { LeadForm } from "@/components/sections/lead-form";
import { FinalCta } from "@/components/sections/final-cta";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { StickyCta } from "@/components/shared/sticky-cta";
import { WaveDivider } from "@/components/shared/wave-divider";
import { AnimatedSection } from "@/components/shared/animated-section";

const TINT = "#f4fdf7";
const WHITE = "#ffffff";
const DARK_GREEN = "#14532d";

export default function LandingPage() {
  return (
    <main>
      {/* Hero has its own entrance animations — no outer wrapper needed */}
      <Hero />

      <AnimatedSection>
        <ProblemSolution />
      </AnimatedSection>

      <WaveDivider bgColor={WHITE} fillColor={TINT} />

      <AnimatedSection>
        <Categories />
      </AnimatedSection>

      <WaveDivider bgColor={TINT} fillColor={WHITE} />

      <AnimatedSection>
        <FeaturedProducts />
      </AnimatedSection>

      {/* Stats: green accent section — hard cut intentional for impact */}
      <AnimatedSection>
        <Stats />
      </AnimatedSection>

      <WaveDivider bgColor={WHITE} fillColor={TINT} />

      <AnimatedSection>
        <WhyUs />
      </AnimatedSection>

      <WaveDivider bgColor={TINT} fillColor={WHITE} />

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      {/* Catalog: dark green accent — hard cut is intentional */}
      <AnimatedSection>
        <Catalog />
      </AnimatedSection>

      <WaveDivider bgColor={DARK_GREEN} fillColor={TINT} />

      <AnimatedSection>
        <Coverage />
      </AnimatedSection>

      <WaveDivider bgColor={TINT} fillColor={WHITE} />

      <AnimatedSection>
        <LeadForm />
      </AnimatedSection>

      <AnimatedSection>
        <FinalCta />
      </AnimatedSection>

      {/* Sticky / floating elements */}
      <WhatsAppButton />
      <StickyCta />
    </main>
  );
}
