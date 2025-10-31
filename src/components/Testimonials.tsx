import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "iDream transformed our Victorian terrace in Hampstead into an absolute masterpiece. Their attention to detail and ability to blend modern luxury with period features is unmatched. The team was professional, reliable, and the project was completed on time. We couldn't be happier with our dream home.",
    author: "Sarah & James Mitchell",
    location: "Hampstead, North London",
    project: "Full House Renovation",
    rating: 5,
  },
  {
    quote: "From the initial consultation to the final handover, the iDream team exceeded every expectation. The 3D renders were stunning and the finished result was even better. Their craftsmen are true artists. Our kitchen extension has become the heart of our home.",
    author: "Amelia Richardson",
    location: "Chiswick, West London",
    project: "Kitchen Extension & Remodel",
    rating: 5,
  },
  {
    quote: "We worked with several contractors before finding iDream, and the difference was night and day. They understood our vision for a contemporary luxury home and delivered beyond what we imagined. The quality of materials and finishes is exceptional. Highly recommend for anyone seeking bespoke design.",
    author: "Marcus & Priya Patel",
    location: "Richmond, West London",
    project: "New Build Luxury Home",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="font-sans text-sm tracking-widest uppercase text-primary">
                Client Testimonials
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Don't Take Our Word for It
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Hear from our clients about their experience working with iDream.
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-background p-8 border-l-4 border-primary relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={48} className="text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans text-base text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-sans font-semibold text-foreground mb-1">
                    {testimonial.author}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground mb-1">
                    {testimonial.location}
                  </div>
                  <div className="font-sans text-xs text-accent uppercase tracking-wide">
                    {testimonial.project}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
