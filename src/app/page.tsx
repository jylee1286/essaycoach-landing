import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TheDifference from "@/components/TheDifference";
import ProductPreview from "@/components/ProductPreview";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <TheDifference />
        <ProductPreview />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>
      <FooterCTA />
    </>
  );
}
