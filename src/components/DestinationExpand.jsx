import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import AnimatedImage from "./AnimatedImage";

const AUTOPLAY_MS = 3500;

const DestinationExpand = ({
  destinations,
  showcaseLabel = "Corporate Fleet Showcase · Hover to Expand",
  ctaLabel = "Book This Fleet",
}) => {
  const [active, setActive] = useState(0);
  const count = destinations.length;

  const widthFor = (i) => (i === active ? 46 : (100 - 46) / (count - 1));

  // Auto-advance through the fleet so the section visibly moves on its own;
  // the countdown restarts (and the progress dot resets) whenever active changes,
  // whether from this timer or from a manual hover/click.
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, count]);

  return (
    <div className="container-px relative">
      {/* Ambient floating backdrop accents */}
      <motion.div
        className="absolute -top-10 right-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-sand/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between mb-8 relative z-10"
      >
        <p className="eyebrow text-teal/80 flex items-center gap-2">
          <motion.span
            className="relative flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-teal/30 blur-sm"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Sparkles size={14} className="text-teal relative z-10" />
          </motion.span>
          <span>{showcaseLabel}</span>
        </p>

        {/* Dynamic active index indicator — the fill sweeping across the active
            dot is the autoplay countdown, so it's visible that this is moving on its own */}
        <div className="hidden md:flex items-center gap-2">
          {destinations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="relative h-1.5 cursor-pointer"
            >
              <motion.span
                animate={{ width: idx === active ? 32 : 8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`block h-1.5 rounded-full overflow-hidden transition-colors duration-500 ${
                  idx === active ? "bg-teal/20" : "bg-navy/20 hover:bg-navy/40"
                }`}
              />
              {idx === active && (
                <motion.span
                  key={active}
                  className="absolute inset-y-0 left-0 w-8 rounded-full bg-teal origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Desktop: expanding accordion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex h-[75vh] gap-3 relative z-10"
      >
        {destinations.map((d, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={d.name}
              onMouseEnter={() => setActive(i)}
              animate={{
                width: `${widthFor(i)}%`,
                boxShadow: isActive
                  ? [
                      "0 25px 60px rgba(59,141,196,0.15)",
                      "0 25px 70px rgba(59,141,196,0.3)",
                      "0 25px 60px rgba(59,141,196,0.15)",
                    ]
                  : "0 10px 35px rgba(38,55,74,0.08)",
              }}
              transition={{
                width: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                boxShadow: isActive
                  ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.4 },
              }}
              className={`relative overflow-hidden cursor-pointer rounded-3xl transition-[border-color] duration-500 ${
                isActive ? "border-2 border-teal/40" : "border border-navy/10"
              }`}
            >
              {/* Per-card scrolling progress line: fills while this card is active, showing it's about to move to the next */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-midnight/20 z-20 overflow-hidden">
                {isActive && (
                  <motion.div
                    key={active}
                    className="h-full bg-linear-to-r from-teal via-sand to-teal origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                  />
                )}
              </div>

              <NavLink to="/services" className="absolute inset-0 block">
                <motion.img
                  src={d.image}
                  alt={`${d.name}, ${d.country}`}
                  loading="lazy"
                  decoding="async"
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-midnight/10" : "bg-navy/30"
                  }`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-midnight/75 via-midnight/20 to-transparent" />

                {/* Collapsed label: index + vertical name */}
                <motion.div
                  animate={{ opacity: isActive ? 0 : 1, y: isActive ? 10 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 flex flex-col justify-between p-6 ${
                    isActive ? "pointer-events-none" : ""
                  }`}
                >
                  <span className="eyebrow text-ivory/80 font-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="vertical-label font-display text-ivory text-xl tracking-wide font-normal">
                    {d.name}
                  </span>
                </motion.div>

                {/* Expanded content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <motion.h3
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="font-display text-ivory text-3xl lg:text-5xl leading-tight font-normal"
                    >
                      {d.name}
                    </motion.h3>
                    {d.description && (
                      <motion.p
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-3 text-ivory/80 text-sm leading-relaxed max-w-sm"
                      >
                        {d.description}
                      </motion.p>
                    )}
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ y: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
                      className="mt-6 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
                    >
                      <span>{ctaLabel}</span>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>
              </NavLink>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile: simple stacked list */}
      <div className="md:hidden space-y-5">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <NavLink to="/services" className="group relative block h-[42vh] rounded-3xl overflow-hidden shadow-xl border border-navy/10">
              <AnimatedImage
                src={d.image}
                alt={`${d.name}, ${d.country}`}
                effect="zoom-in"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight/75 via-midnight/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="eyebrow text-sand font-mono">
                  {String(i + 1).padStart(2, "0")} · {d.country}
                </span>
                <h3 className="font-display text-ivory text-2xl mt-1">{d.name}</h3>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DestinationExpand;
