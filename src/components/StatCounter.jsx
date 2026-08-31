import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, Award, Headphones, Clock, Sparkles, ShieldCheck } from "lucide-react";

const ICON_MAP = {
  MapPin: MapPin,
  Users: Users,
  Award: Award,
  Headphones: Headphones,
  Clock: Clock,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
};

const StatCounter = ({ value, suffix = "", display, label, icon, duration = 1.8, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [count, setCount] = useState(0);

  const IconComponent = icon && ICON_MAP[icon] ? ICON_MAP[icon] : null;

  useEffect(() => {
    if (!isInView || display) return;
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
  }, [isInView, value, duration, display]);

  // Determine displayed text safely without duplicate suffixes
  const mainText = display ? display : count;
  const showSuffix = !display && suffix;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="p-6 sm:p-8 rounded-3xl bg-white border border-teal/25 shadow-md hover:shadow-2xl hover:border-teal/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
    >
      {/* Permanent top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal" />

      {/* Top row: Value + Icon Badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-1">
          <p className="font-display text-4xl sm:text-5xl md:text-6xl text-navy font-semibold tracking-tight">
            {mainText}
          </p>
          {showSuffix && (
            <span className="font-display text-2xl sm:text-3xl text-teal font-medium">
              {suffix}
            </span>
          )}
        </div>

        {IconComponent && (
          <div className="w-10 h-10 rounded-2xl bg-transparent text-teal border border-teal/40 flex items-center justify-center shrink-0 group-hover:border-teal transition-all duration-300">
            <IconComponent size={20} className="stroke-[1.75]" />
          </div>
        )}
      </div>

      {/* Bottom row: Label with dot accent */}
      <div className="mt-5 pt-3 border-t border-navy/10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
        <p className="text-xs font-mono uppercase tracking-widest text-navy/80 font-semibold truncate">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCounter;
