import Navbar from "@/components/Navbar";
import ScrollHero from "@/components/ScrollHero";
import HowItWorks from "@/components/HowItWorks";
import SchoolCoverage from "@/components/SchoolCoverage";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollHero />
        <HowItWorks />
        <SchoolCoverage />
        <SocialProof />
        <Pricing />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
