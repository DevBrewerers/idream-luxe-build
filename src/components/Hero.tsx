import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload video
    const video = document.createElement("video");
    video.src = window.innerWidth >= 1024
      ? "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761880957/idream_hero-video_lg_bkfji8.mp4"
      : "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761880956/idream_hero-video_igcszr.mp4";
    video.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        {isVideoLoaded ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={
              window.innerWidth >= 1024
                ? "https://res.cloudinary.com/di9xtaqhg/image/upload/v1761872506/hero-img-lg_lybbco.png"
                : "https://res.cloudinary.com/di9xtaqhg/image/upload/v1761872670/hero-bg-sm_ewq41v.png"
            }
          >
            <source
              src={
                window.innerWidth >= 1024
                  ? "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761880957/idream_hero-video_lg_bkfji8.mp4"
                  : "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761880956/idream_hero-video_igcszr.mp4"
              }
              type="video/mp4"
            />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                window.innerWidth >= 1024
                  ? "https://res.cloudinary.com/di9xtaqhg/image/upload/v1761872506/hero-img-lg_lybbco.png"
                  : "https://res.cloudinary.com/di9xtaqhg/image/upload/v1761872670/hero-bg-sm_ewq41v.png"
              })`,
            }}
          />
        )}
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 video-overlay " />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-5xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 lg:mb-8 leading-tight"
          >
            We Build Luxury.
            <br />
            We Design Dreams.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl lg:text-2xl text-white/90 mb-10 lg:mb-12 max-w-3xl mx-auto font-light"
          >
            iDream Living — bespoke luxury homes built with passion and precision.
          </motion.p>

          <motion.button
            variants={fadeUp}
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-primary text-background font-sans text-base lg:text-lg font-medium hover:bg-accent transition-all duration-500 hover:shadow-2xl"
          >
            Explore Our Work
            <ChevronDown
              size={20}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};
