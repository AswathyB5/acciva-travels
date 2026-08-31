import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Compass, MapPin, Sparkles } from "lucide-react";

const PANEL_ICONS = [Compass, MapPin, Sparkles];
const PANEL_ACCENTS = ["teal", "sand", "teal"];

const HorizontalGallery = ({ panels }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(panels.length - 1) * 100}vw`]);

  if (reduceMotion) {
    return (
      <section className="relative bg-soft py-24 overflow-hidden">
        <GalleryBackdrop />
        <div className="relative z-10 flex flex-col gap-16">
          {panels.map((p, i) => (
            <Panel key={p.word} panel={p} index={i} total={panels.length} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-soft" style={{ height: `${panels.length * 100}vh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center">
        <GalleryBackdrop />
        <motion.div style={{ x }} className="relative z-10 flex h-full">
          {panels.map((p, i) => (
            <div key={p.word} className="h-full w-screen shrink-0 flex items-center">
              <Panel panel={p} index={i} total={panels.length} />
            </div>
          ))}
        </motion.div>

        {/* Slim progress rail */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-40 h-px bg-navy/10">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-sand origin-left"
          />
        </div>
      </div>
    </section>
  );
};

// Same ambient treatment as the About page's "Why Choose Acciva" section —
// soft glow blooms plus a radial wash — for backdrop consistency site-wide.
const GalleryBackdrop = () => (
  <>
    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sand/15 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] pointer-events-none" />

    {/* Quarter-circle corner accent — the same motif used on the About page's cards */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-teal/10 rounded-br-full pointer-events-none" />
  </>
);

const Panel = ({ panel, index, total }) => {
  const Icon = PANEL_ICONS[index % PANEL_ICONS.length];
  const accent = PANEL_ACCENTS[index % PANEL_ACCENTS.length];
  const isTeal = accent === "teal";

  return (
    <div className="container-px w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center relative">
      <div className="order-2 md:order-1 relative">
        <div className="flex items-center gap-4 mb-5">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isTeal ? "bg-teal/10 text-teal" : "bg-sand/20 text-navy"
            }`}
          >
            <Icon size={18} />
          </div>
          <span className="eyebrow text-teal">{panel.label}</span>
        </div>

        <h3 className="font-display italic text-navy text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          {panel.word}
        </h3>

        <div className={`mt-7 pl-5 border-l max-w-sm ${isTeal ? "border-teal/60" : "border-sand/60"}`}>
          <p className="text-navy/60 leading-relaxed">{panel.description}</p>
        </div>

        <span className="mt-8 inline-block font-mono text-xs tracking-[0.3em] text-navy/35">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="order-1 md:order-2 relative">
        <div className="h-64 md:h-[68vh] overflow-hidden relative rounded-2xl shadow-2xl shadow-navy/15 ring-1 ring-sand/40">
          <img src={panel.image} alt={panel.word} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-navy/10 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-ivory/20 rounded-2xl pointer-events-none" />

          {/* Corner accent — same quarter-circle motif as the About page's feature cards */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-sand/40 to-transparent rounded-bl-full pointer-events-none" />

          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-navy/50 backdrop-blur-md px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sand" />
            <span className="eyebrow text-ivory text-[10px] tracking-[0.25em]">{panel.word.replace(".", "")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
