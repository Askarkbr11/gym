import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Transformations from "@/components/sections/Transformations";
import Trainers from "@/components/sections/Trainers";
import Membership from "@/components/sections/Membership";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/ui/Navigation";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <Transformations />
      <Trainers />
      <Membership />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
