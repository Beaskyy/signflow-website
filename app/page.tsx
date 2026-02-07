import { CommunityValidation } from "@/components/community-validation";
import { FAQ } from "@/components/faqs";
import { FeaturShowCase } from "@/components/feature-showcase";
import { Features } from "@/components/features";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { RealWorldUse } from "@/components/real-world-use";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <FeaturShowCase />
      <HowItWorks />
      <RealWorldUse />
      <CommunityValidation />
      <FAQ />
    </main>
  );
}
