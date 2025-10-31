import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";

const projects = [
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872785/1_w1az4l.mp4",
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872796/2_wrfjll.mp4",
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872807/3_tsivs9.mp4",
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872833/4_hxyqif.mp4",
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872839/5_frvi3k.mp4",
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872846/6_qzceiy.mp4",
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872865/7_zku48q.mp4",
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872859/8_j7bfrg.mp4",
  "https://res.cloudinary.com/di9xtaqhg/video/upload/v1761872879/9_nxu60k.mp4",
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary">
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
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((videoUrl, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-muted group cursor-pointer"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center text-background px-6">
                  <div className="font-serif text-2xl mb-2">
                    Luxury Project {index + 1}
                  </div>
                  <div className="font-sans text-sm opacity-90">
                    View Details
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
