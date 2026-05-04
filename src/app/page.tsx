import RevealSetup from "@/components/RevealSetup";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofLine from "@/components/ProofLine";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Calculator from "@/components/Calculator";
import Timeline from "@/components/Timeline";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAFinal from "../components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ExitModal from "@/components/ExitModal";

export default function Home() {
  return (
    <>
      <RevealSetup />
      <Banner />
      <Nav />
      <Hero />
      <ProofLine />
      <Problem />
      <Features />
      <Calculator />
      <Timeline />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
      <ExitModal />
    </>
  );
}
