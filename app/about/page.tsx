import { AboutDAF } from "@/components/aboutDAF";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faqs";
import { Footer } from "@/components/footer";
import Header from "@/components/header";

export default function About() {
  return (
    <main>
      <Header />
      <AboutDAF />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
