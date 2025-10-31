import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary">
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
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
          >
            Don't Take Our Word for It
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-muted-foreground mb-12"
          >
            Hear from our clients about their experience working with iDream.
          </motion.p>

          {/* Decorative element */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center"
          >
            <Quote size={64} className="text-primary/30" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 p-8 lg:p-12 border-l-4 border-primary bg-background"
          >
            <p className="font-sans text-lg text-muted-foreground italic mb-6">
              "Testimonials coming soon from our satisfied clients who have experienced the iDream difference."
            </p>
            <div className="font-sans text-sm text-accent">
              — iDream Clients
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
