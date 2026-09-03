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
  eager = false,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const variants = EFFECTS[effect] || EFFECTS["zoom-in"];

  // Above-the-fold images (page headers/banners) use `eager` to animate on
  // mount instead of on scroll — whileInView can silently miss its first
  // check when a page mounts mid-route-transition (AnimatePresence), so
  // content that's visible immediately shouldn't depend on it.
  const viewProps = eager
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, amount } };

  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      initial={reduceMotion ? "visible" : "hidden"}
      {...viewProps}
      variants={variants}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    />
  );
};

export default AnimatedImage;
