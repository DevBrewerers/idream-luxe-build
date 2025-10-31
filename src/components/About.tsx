import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="font-sans text-sm tracking-widest uppercase text-accent">
              Philosophy
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 lg:mb-12"
          >
            Turning Visions Into Luxury Living
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-6">
            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
              Your dreams are what inspire us to create gorgeous living spaces — each home designed bespoke for each client. We call it{" "}
              <span className="text-accent font-medium italic">iDream Living</span>.
            </p>

            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
              As local master building contractors specializing in high-end interior design, we bring your vision to life with unmatched craftsmanship, reliability, and a completely stress-free experience. From large-scale projects to intricate 3D renders, we transform luxury homes across West and North London.
            </p>

            <motion.div
              variants={fadeUp}
              className="pt-8 flex flex-wrap justify-center gap-12 lg:gap-16"
            >
              <div className="text-center">
                <div className="font-serif text-4xl lg:text-5xl text-primary mb-2">
                  Luxury
                </div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wide">
                  Craftsmanship
                </div>
              </div>

              <div className="text-center">
                <div className="font-serif text-4xl lg:text-5xl text-primary mb-2">
                  Reliability
                </div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wide">
                  Trust
                </div>
              </div>

              <div className="text-center">
                <div className="font-serif text-4xl lg:text-5xl text-primary mb-2">
                  Bespoke
                </div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wide">
                  Design
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
