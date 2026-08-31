import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const StatCounter = ({ value, suffix = "", display, label, duration = 1.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    let frame;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-navy/10 hover:border-teal/40 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Dynamic top ambient glow line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-baseline gap-1">
        <p className="font-display text-4xl sm:text-5xl md:text-6xl text-navy font-semibold tracking-tight group-hover:text-teal transition-colors">
          {display ? display : count}
        </p>
        <span className="font-display text-2xl sm:text-3xl text-teal font-normal">
          {suffix}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-teal group-hover:scale-150 transition-transform" />
        <p className="text-xs font-mono uppercase tracking-wider text-navy/60 group-hover:text-navy transition-colors">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCounter;
