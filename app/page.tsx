import { FeaturShowCase } from "@/components/feature-showcase";
import { Features } from "@/components/features";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <FeaturShowCase />
      <HowItWorks />
    </main>
  );
}
