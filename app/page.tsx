import { FeaturShowCase } from "@/components/feature-showcase";
import { Features } from "@/components/features";
import Header from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <FeaturShowCase />
    </main>
  );
}
