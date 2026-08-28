import { motion } from "framer-motion";

/**
 * Reveals an array of text lines one at a time via a clipped upward slide.
 * Each line is wrapped in an overflow-hidden mask so the motion reads as
 * the text rising into place rather than a plain fade.
 */
const SplitText = ({
  lines,
  as: Tag = "h2",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.1,
}) => {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span className="line-mask inline-block overflow-hidden" key={`${line}-${i}`}>
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
