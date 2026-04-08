import { ContactProvider } from "@/components/ContactModal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ContactProvider>
      <main>
        <Nav />
        <Hero />
        <Ticker />
        <Stats />
        <Services />
        <CaseStudies />
        <Process />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </ContactProvider>
  );
}
