import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Start Your Project
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to transform your home? Contact us today for a free
            consultation and let's bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h3 className="font-serif text-3xl text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Get in touch with us to discuss your project requirements. We're
                here to help bring your dream home to life.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-sans font-medium text-foreground mb-1">
                  Phone
                </div>
                <a
                  href="tel:02070460208"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  020 7046 0208
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-sans font-medium text-foreground mb-1">
                  Email
                </div>
                <a
                  href="mailto:info@idreamlondon.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@idreamlondon.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-sans font-medium text-foreground mb-1">
                  Office
                </div>
                <p className="text-muted-foreground">
                  330 Bath Road
                  <br />
                  Slough, Berkshire
                  <br />
                  SL1 6JA
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-8">
              <div className="font-sans font-medium text-foreground mb-4">
                Business Hours
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <label
                htmlFor="name"
                className="block font-sans text-sm font-medium text-foreground mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="John Smith"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="email"
                className="block font-sans text-sm font-medium text-foreground mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="phone"
                className="block font-sans text-sm font-medium text-foreground mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="07XXX XXXXXX"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="service"
                className="block font-sans text-sm font-medium text-foreground mb-2"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              >
                <option value="">Select a service</option>
                <option value="new-build">New Build</option>
                <option value="extension">Extension</option>
                <option value="loft-conversion">Loft Conversion</option>
                <option value="interior-design">Interior Design</option>
                <option value="project-management">Project Management</option>
                <option value="3d-renders">3D Renders</option>
                <option value="consultation">General Consultation</option>
              </select>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="message"
                className="block font-sans text-sm font-medium text-foreground mb-2"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-input border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-sans text-base font-medium hover:bg-secondary transition-all duration-500 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm text-muted-foreground text-center"
            >
              We typically respond within 24 hours during business days.
            </motion.p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
