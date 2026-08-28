import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const HorizontalGallery = ({ panels }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(panels.length - 1) * 100}vw`]);

  if (reduceMotion) {
    return (
      <section className="bg-midnight py-24">
        <div className="flex flex-col gap-16">
          {panels.map((p) => (
            <Panel key={p.word} panel={p} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-midnight" style={{ height: `${panels.length * 100}vh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex h-full">
          {panels.map((p) => (
            <div key={p.word} className="h-full w-screen shrink-0 flex items-center">
              <Panel panel={p} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Panel = ({ panel }) => (
  <div className="container-px w-full grid md:grid-cols-2 gap-10 items-center">
    <div className="order-2 md:order-1">
      <span className="eyebrow text-sand">{panel.label}</span>
      <h3 className="font-display italic text-ivory text-6xl sm:text-7xl lg:text-8xl mt-4">
        {panel.word}
      </h3>
      <p className="text-ivory/60 mt-6 max-w-sm">{panel.description}</p>
    </div>
    <div className="order-1 md:order-2 h-64 md:h-[70vh] overflow-hidden">
      <img src={panel.image} alt={panel.word} className="h-full w-full object-cover" loading="lazy" />
    </div>
  </div>
);

export default HorizontalGallery;
