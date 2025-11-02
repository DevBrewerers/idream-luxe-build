import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
