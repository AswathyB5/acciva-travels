import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { testimonials } from "../data/content";

const DURATION = 5000;

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef(null);

  const go = (next) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  const goPrev = () => go((active - 1 + testimonials.length) % testimonials.length);
  const goNext = () => go((active + 1) % testimonials.length);

  useEffect(() => {
    timer.current = setTimeout(goNext, DURATION);
    return () => clearTimeout(timer.current);
  }, [active]);

  const t = testimonials[active];
  const prevIdx = (active - 1 + testimonials.length) % testimonials.length;
  const nextIdx = (active + 1) % testimonials.length;

  const quoteVariants = {
    enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40, filter: "blur(6px)" }),
    center: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (d) => ({
      opacity: 0, y: d > 0 ? -30 : 30, filter: "blur(4px)",
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative py-20 md:py-28 bg-soft overflow-hidden select-none">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-sand/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-48 bg-teal/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-px relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow text-teal">07 — Enterprise Trust &amp; Reviews</span>
          <h2 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl mt-6 leading-[1.05] tracking-tight">
            Trusted By India&rsquo;s Leading{" "}
            <span className="italic text-teal font-normal">Enterprises.</span>
          </h2>
        </div>

        {/* Main testimonial stage */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6">

          {/* Left peek card */}
          <div
            onClick={goPrev}
            className="hidden lg:flex flex-col gap-3 w-[220px] xl:w-[260px] shrink-0 cursor-pointer group"
          >
            <div className="bg-white border border-navy/10 rounded-2xl p-5 shadow-sm group-hover:shadow-md group-hover:border-teal/30 transition-all duration-300 opacity-50 group-hover:opacity-90 scale-95 group-hover:scale-100">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonials[prevIdx].avatar}
                  alt={testimonials[prevIdx].name}
                  className="w-9 h-9 rounded-full object-cover border border-sand/40"
                />
                <div>
                  <p className="text-navy text-xs font-semibold leading-tight">{testimonials[prevIdx].name}</p>
                  <p className="text-navy/40 text-[10px]">{testimonials[prevIdx].company}</p>
                </div>
              </div>
              <p className="text-navy/50 text-xs leading-relaxed line-clamp-3 italic">
                &ldquo;{testimonials[prevIdx].quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Active card */}
          <div className="flex-1 max-w-2xl">
            <div className="relative bg-white border border-navy/10 rounded-3xl p-8 sm:p-10 md:p-12 shadow-[0_8px_48px_rgba(7,26,36,0.10)]">
              {/* Giant quote mark */}
              <Quote size={80} className="absolute top-6 right-8 text-navy/5 pointer-events-none" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-sand text-sand" />
                ))}
                <span className="ml-2 text-[10px] text-navy/40 font-mono tracking-widest uppercase">
                  5.0 / 5.0
                </span>
              </div>

              {/* Animated quote */}
              <div className="min-h-[140px] sm:min-h-[110px] overflow-hidden">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.blockquote
                    key={active}
                    custom={dir}
                    variants={quoteVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="font-display italic text-navy text-xl sm:text-2xl md:text-3xl leading-snug tracking-tight"
                  >
                    &ldquo;{t.quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="mt-8 mb-6 h-px bg-navy/10" />

              {/* Author + stat */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={`author-${active}`}
                  custom={dir}
                  variants={quoteVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-sand/40 shadow-lg"
                      />
                      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-teal border-2 border-white" />
                    </div>
                    <div>
                      <p className="text-navy font-bold text-base tracking-wide">{t.name}</p>
                      <p className="text-teal text-xs mt-0.5 font-medium">{t.role}</p>
                      <p className="text-navy/50 text-xs flex items-center gap-1.5 mt-0.5">
                        <Building2 size={11} className="text-teal" />
                        {t.company}
                      </p>
                    </div>
                  </div>

                  {/* Stat pill */}
                  <div className="bg-teal/8 border border-teal/20 rounded-2xl px-5 py-3 text-right">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-navy/40 mb-1">Impact</p>
                    <p className="text-teal font-bold text-sm font-display">{t.stats}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl bg-navy/5 overflow-hidden">
                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-teal to-sand"
                />
              </div>
            </div>

            {/* Dot indicators + nav */}
            <div className="flex items-center justify-between mt-7 px-1">
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy/50 hover:text-teal hover:border-teal transition-all duration-300 cursor-pointer active:scale-90"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Go to ${i + 1}`}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === active ? "w-7 h-2 bg-teal" : "w-2 h-2 bg-navy/15 hover:bg-navy/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy/50 hover:text-teal hover:border-teal transition-all duration-300 cursor-pointer active:scale-90"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right peek card */}
          <div
            onClick={goNext}
            className="hidden lg:flex flex-col gap-3 w-[220px] xl:w-[260px] shrink-0 cursor-pointer group"
          >
            <div className="bg-white border border-navy/10 rounded-2xl p-5 shadow-sm group-hover:shadow-md group-hover:border-teal/30 transition-all duration-300 opacity-50 group-hover:opacity-90 scale-95 group-hover:scale-100">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonials[nextIdx].avatar}
                  alt={testimonials[nextIdx].name}
                  className="w-9 h-9 rounded-full object-cover border border-sand/40"
                />
                <div>
                  <p className="text-navy text-xs font-semibold leading-tight">{testimonials[nextIdx].name}</p>
                  <p className="text-navy/40 text-[10px]">{testimonials[nextIdx].company}</p>
                </div>
              </div>
              <p className="text-navy/50 text-xs leading-relaxed line-clamp-3 italic">
                &ldquo;{testimonials[nextIdx].quote}&rdquo;
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Testimonial;
