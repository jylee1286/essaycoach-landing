import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import SchoolCoverage from "@/components/SchoolCoverage";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Credibility from "@/components/Credibility";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BeforeAfter />
        <SchoolCoverage />
        <SocialProof />
        <Pricing />
        <FAQ />
        <Credibility />
        <FooterCTA />
      </main>
    </>
  );
}
