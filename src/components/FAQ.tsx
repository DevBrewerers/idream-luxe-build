import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve West and North London, including areas such as Hampstead, Chiswick, Richmond, Kensington, Chelsea, and surrounding neighborhoods. We focus on these areas to ensure we can provide the highest level of service and attention to detail for each project.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope of work. A kitchen extension typically takes 12-16 weeks, a full house renovation can take 4-6 months, and new builds usually require 8-12 months. We provide a detailed timeline during the consultation phase and keep you updated throughout the entire process.",
  },
  {
    question: "Do you provide design services?",
    answer:
      "Yes! We offer comprehensive interior design services as part of our luxury build packages. Our in-house design team works closely with you to create bespoke spaces that reflect your vision while maintaining functionality and timeless elegance. We provide 3D renders and detailed plans before construction begins.",
  },
  {
    question: "What is your process for starting a project?",
    answer:
      "We begin with an initial consultation to understand your vision and requirements. Following this, we conduct a site survey and provide a detailed quote. Once approved, our design team creates 3D renders and plans. After final approval, we move to construction with regular updates and quality checks throughout.",
  },
  {
    question: "Are you fully licensed and insured?",
    answer:
      "Absolutely. iDream is fully licensed, bonded, and insured. We hold all necessary certifications and comply with UK building regulations. Our team includes qualified tradespeople across all disciplines, and we work with certified structural engineers and architects when required.",
  },
  {
    question: "Can you work with my existing architect or designer?",
    answer:
      "Yes, we're happy to collaborate with your existing architect or interior designer. We have extensive experience working as part of larger teams and can seamlessly integrate into your project workflow while maintaining our high standards of craftsmanship.",
  },
  {
    question: "What warranties do you offer?",
    answer:
      "We provide comprehensive warranties on all our work. Structural work comes with a 10-year warranty, and finishes and installations are covered for 2 years. We also offer extended maintenance packages for ongoing support and peace of mind.",
  },
  {
    question: "How do you handle project changes or additions?",
    answer:
      "We understand that visions can evolve during construction. We accommodate changes through a formal change order process, providing clear documentation of any additions or modifications along with cost and timeline implications. Our goal is flexibility while maintaining project integrity.",
  },
];

export const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="font-sans text-sm tracking-widest uppercase text-primary">
                Frequently Asked Questions
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Your Questions Answered
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
            >
              Everything you need to know about working with iDream. Can't find
              the answer you're looking for? Feel free to contact us directly.
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border px-6 py-2"
                >
                  <AccordionTrigger className="font-serif text-lg md:text-xl text-foreground hover:text-primary text-left py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-base text-foreground/80 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
