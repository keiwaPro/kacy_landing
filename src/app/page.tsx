import RevealSetup from "@/components/RevealSetup";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Bento from "@/components/Bento";
// import Quote from "@/components/Quote";
import Steps from "@/components/Steps";
import Secure from "@/components/Secure";
import Calculator from "@/components/Calculator";
import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <RevealSetup />
      <div className="page-frame">
        <Nav />
        <Hero />
        <Channels />
        <Bento />
        {/* Témoignages en pause : personas fictifs. À réactiver avec de
            vrais retours des établissements pilotes. */}
        {/* <Quote /> */}
        <Steps />
        <Secure />
        <Calculator />
        <Pricing />
        {/* <Testimonials /> */}
        <FAQ />
        <DownloadSection />
        <Footer />
      </div>
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
