import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const StatCounter = ({ value, suffix = "", display, label, duration = 1.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="text-center md:text-left"
    >
      <p className="font-display text-6xl sm:text-7xl md:text-8xl leading-none">
        {display ? display : `${count}${suffix}`}
      </p>
      <p className="eyebrow opacity-50 mt-4">{label}</p>
    </motion.div>
  );
};

export default StatCounter;
