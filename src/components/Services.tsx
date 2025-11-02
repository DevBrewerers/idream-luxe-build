import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  Home,
  Building2,
  Layers,
  ClipboardList,
  PaintBucket,
  Box,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "New Builds",
    description:
      "Bespoke luxury homes designed and built from the ground up. We transform your vision into architectural masterpieces with meticulous attention to detail.",
  },
  {
    icon: Building2,
    title: "Extensions",
    description:
      "Seamlessly expand your living space with expertly designed extensions that blend perfectly with your existing home's architecture and style.",
  },
  {
    icon: Layers,
    title: "Loft Conversions",
    description:
      "Transform unused attic space into stunning bedrooms, home offices, or entertainment areas. Maximize your property's potential.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "End-to-end project coordination ensuring timely delivery, budget control, and stress-free execution. We handle every detail.",
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    description:
      "Bespoke interior design services creating luxurious, functional spaces that reflect your unique style and lifestyle needs.",
  },
  {
    icon: Box,
    title: "3D Renders",
    description:
      "Photorealistic 3D visualizations bring your project to life before construction begins. See your dream home in stunning detail.",
  },
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="font-sans text-sm tracking-widest uppercase text-secondary">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Our Services
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to completion, we deliver exceptional results across
            all aspects of luxury home construction and design.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-card border border-border p-8 lg:p-10 hover:border-primary transition-all duration-500 hover:shadow-xl"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
