import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 50000, suffix: "+", label: "Sq Ft Built", isLarge: true },
];

const Counter = ({
  value,
  suffix,
  label,
  duration = 2000,
  isLarge = false,
}: {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
  isLarge?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * value));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, value, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    if (isLarge && num >= 1000) {
      return (num / 1000).toFixed(0) + "k";
    }
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-serif text-5xl lg:text-6xl text-primary mb-3"
      >
        {formatNumber(count)}
        {count === value && suffix}
      </motion.div>
      <div className="font-sans text-sm lg:text-base text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="font-sans text-sm tracking-widest uppercase text-secondary">
              By The Numbers
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Our Track Record
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isLarge={stat.isLarge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
