import RevealSetup from "@/components/RevealSetup";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Bento from "@/components/Bento";
import Quote from "@/components/Quote";
import Steps from "@/components/Steps";
import Secure from "@/components/Secure";
import Calculator from "@/components/Calculator";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "../components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import ExitModal from "@/components/ExitModal";

export default function Home() {
  return (
    <>
      <RevealSetup />
      <Banner />
      <div className="page-frame">
        <Nav />
        <Hero />
        <Channels />
        <Bento />
        <Quote />
        <Steps />
        <Secure />
        <Calculator />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTAFinal />
        <Footer />
      </div>
      <WhatsAppFloat />
      <BackToTop />
      <ExitModal />
    </>
  );
}
