import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, staggerContainer } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We meet with you to understand your vision, budget, and timeline.",
    video: "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872957/1_pr2xht.mp4",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our team creates detailed 3D renders and architectural plans.",
    video: "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872995/2_k5cyzv.mp4",
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Choose from premium materials and finishes for your project.",
    video: "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761873004/4_kcjwba.mp4",
  },
  {
    number: "04",
    title: "Construction Phase",
    description: "Expert craftsmen bring your design to life with precision.",
    video: "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761873012/5_vdebfr.mp4",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description: "Rigorous inspections ensure every detail meets our standards.",
    video: "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761873021/6_ibrwui.mp4",
  },
  {
    number: "06",
    title: "Final Handover",
    description: "Your dream home is complete and ready to enjoy.",
    video: "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761873049/7_kmh7j2.mp4",
  },
];

export const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!processRef.current) return;

    const steps = processRef.current.querySelectorAll(".process-step");

    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="process" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="font-sans text-sm tracking-widest uppercase text-accent">
              How We Work
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Our Process — From Concept to Completion
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We leave no stone unturned in making your new home the very best it can possibly be.
          </motion.p>
        </motion.div>

        <div ref={processRef} className="max-w-6xl mx-auto space-y-16 lg:space-y-24">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`process-step flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Video */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={step.video} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="font-serif text-6xl lg:text-8xl text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
