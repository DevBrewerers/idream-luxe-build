import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Phone, Mail } from "lucide-react";

export const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-background"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-background"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-background mb-6 lg:mb-8"
          >
            Let's Build Your Dream Project
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-background/90 mb-12 leading-relaxed"
          >
            For a stress-free development experience, call us on{" "}
            <a
              href="tel:02080450533"
              className="font-semibold underline hover:text-background transition-colors"
            >
              0208 045 0533
            </a>{" "}
            or send us your project brief.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6"
          >
            <a
              href="tel:02080450533"
              className="group inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-background text-primary font-sans text-base lg:text-lg font-medium hover:bg-secondary transition-all duration-500 hover:shadow-2xl w-full sm:w-auto justify-center"
            >
              <Phone size={20} />
              Book a Consultation
            </a>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-transparent border-2 border-background text-background font-sans text-base lg:text-lg font-medium hover:bg-background hover:text-primary transition-all duration-500 w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              Send Project Brief
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
