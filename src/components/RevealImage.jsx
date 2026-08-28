import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * A large image that reveals through a rising mask on first view, then
 * subtly zooms out as it scrolls through the viewport.
 * Checks for already cached images so client-side route changes never leave images invisible.
 */
const RevealImage = ({ src, alt, className = "", imgClassName = "" }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.12, 1]);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-navy/5 ${className}`}>
      <motion.div
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full w-full"
      >
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{ scale }}
          className={`h-full w-full object-cover transition-opacity duration-300 ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
};

export default RevealImage;
