import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ScrollBadge = ({ text = "SCROLL TO EXPLORE  •  ", size = 96, className = "" }) => {
  const reduceMotion = useReducedMotion();
  const repeated = text.repeat(2);

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="scrollBadgePath" d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
        </defs>
        <text fontSize="7" letterSpacing="1.5" fill="currentColor">
          <textPath href="#scrollBadgePath">{repeated}</textPath>
        </text>
      </motion.svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <ArrowDown size={16} />
      </span>
    </div>
  );
};

export default ScrollBadge;
