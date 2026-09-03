import { motion, useReducedMotion } from "framer-motion";

/**
 * Drop-in replacement for <img> that zooms into view on scroll.
 * The image's box never moves — only its scale/opacity animate, so the
 * card/container is visible in place from the start.
 */
const EFFECTS = {
  "zoom-in": { hidden: { opacity: 0, scale: 1.12 }, visible: { opacity: 1, scale: 1 } },
  "zoom-out": { hidden: { opacity: 0, scale: 1.22 }, visible: { opacity: 1, scale: 1 } },
};

const AnimatedImage = ({
  src,
  alt,
  className = "",
  effect = "zoom-in",
  delay = 0,
  duration = 0.9,
  amount = 0.2,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const variants = EFFECTS[effect] || EFFECTS["zoom-in"];

  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    />
  );
};

export default AnimatedImage;
