import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Building,
  Award,
  CheckCircle2,
  Play,
  Pause,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { testimonials } from "../data/content";

const SLIDE_DURATION = 4500; // 4.5 seconds per slide

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance slider
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleSelect = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const active = testimonials[currentIndex];

  // Slide transition animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-soft text-navy select-none">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))] pointer-events-none" />

      <div className="container-px relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-8 border-b border-navy/10 gap-6">
          <div>
            <span className="eyebrow text-teal">07 — Enterprise Trust & Reviews</span>
            <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[1.08] mt-6">
              Trusted By India&rsquo;s Leading <br className="hidden sm:inline" />
              <span className="italic text-teal font-normal">Enterprises & Executives.</span>
            </h2>
          </div>

          {/* Controls: Play/Pause, Slide Indicator & Navigation */}
          <div className="flex items-center flex-wrap gap-4">
            {/* Auto-play Status Indicator & Toggle */}
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause auto-slide" : "Start auto-slide"}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-navy/15 hover:border-sand/40 transition-all text-xs font-mono text-navy/70 cursor-pointer shadow-xs"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlaying && !isHovered
                    ? "bg-teal animate-pulse"
                    : "bg-navy/30"
                }`}
              />
              <span>{isPlaying && !isHovered ? "Auto-playing" : "Paused"}</span>
              {isPlaying && !isHovered ? <Pause size={12} /> : <Play size={12} />}
            </button>

            {/* Slide Counter */}
            <div className="text-xs font-mono tracking-widest text-navy/50 px-2">
              <span className="text-sand font-bold text-sm">
                0{currentIndex + 1}
              </span>{" "}
              / 0{testimonials.length}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:text-navy hover:bg-sand hover:border-sand transition-all duration-300 cursor-pointer shadow-md active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:text-navy hover:bg-sand hover:border-sand transition-all duration-300 cursor-pointer shadow-md active:scale-95"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Main Active Testimonial Card */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="lg:col-span-8 relative rounded-3xl bg-white border border-navy/10 p-7 sm:p-10 md:p-12 shadow-2xl flex flex-col justify-between overflow-hidden group min-h-[460px]"
          >
            {/* Decorative Quote Background */}
            <Quote
              size={160}
              className="absolute -top-4 -right-4 text-navy/[0.05] pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
            />

            <div>
              {/* Star Rating & Category Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1.5 text-sand">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-sand text-sand" />
                  ))}
                  <span className="text-xs font-mono ml-2 text-navy/70 font-semibold">
                    5.0 / 5.0 Rating
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/10 border border-sand/30 text-sand text-[11px] font-mono tracking-wider uppercase">
                  <CheckCircle2 size={13} className="text-sand" />
                  <span>{active.tag}</span>
                </div>
              </div>

              {/* Animated Sliding Quote Text */}
              <div className="min-h-[140px] sm:min-h-[120px] flex items-center overflow-hidden py-2">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full"
                  >
                    <blockquote className="font-display italic text-navy text-xl sm:text-2xl md:text-[26px] lg:text-[28px] leading-snug tracking-tight">
                      &ldquo;{active.quote}&rdquo;
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Author Profile & Key Metric */}
            <div>
              <div className="pt-8 mt-6 border-t border-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex items-center gap-4"
                  >
                    <img
                      src={active.avatar}
                      alt={active.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-sand/60 shadow-lg"
                    />
                    <div>
                      <h3 className="font-sans font-bold text-navy text-base sm:text-lg tracking-wide">
                        {active.name}
                      </h3>
                      <p className="text-xs text-sand font-medium mt-0.5">
                        {active.role}
                      </p>
                      <p className="text-xs text-navy/60 flex items-center gap-1.5 mt-0.5">
                        <Building size={12} className="text-teal" />
                        <span>{active.company}</span>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Highlight Metric Pill */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="bg-navy/5 border border-navy/10 rounded-2xl px-5 py-3 text-left sm:text-right shadow-inner"
                  >
                    <p className="text-[10px] uppercase font-mono tracking-widest text-navy/40">
                      Impact Delivered
                    </p>
                    <p className="font-display text-sand text-base sm:text-lg font-bold mt-0.5">
                      {active.stats}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slide Dots / Indicators */}
              <div className="flex items-center gap-2 mt-8 pt-4 border-t border-navy/5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`relative h-2 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                      currentIndex === idx
                        ? "w-10 bg-sand/30"
                        : "w-2.5 bg-navy/15 hover:bg-navy/30"
                    }`}
                  >
                    {currentIndex === idx && (
                      <motion.div
                        key={`${currentIndex}-${isPlaying && !isHovered}`}
                        initial={{ width: "0%" }}
                        animate={{
                          width: isPlaying && !isHovered ? "100%" : "100%",
                        }}
                        transition={{
                          duration: isPlaying && !isHovered ? SLIDE_DURATION / 1000 : 0.3,
                          ease: "linear",
                        }}
                        className="h-full bg-sand rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Auto-play Smooth Progress Bar at bottom of card */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy/5">
              {isPlaying && !isHovered && (
                <motion.div
                  key={currentIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="h-full bg-linear-to-r from-teal via-sand to-sand"
                />
              )}
            </div>
          </div>

          {/* Quick Select Carousel Track (Right Column) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-between">
            <div className="space-y-3">
              {testimonials.map((t, idx) => {
                const isSelected = currentIndex === idx;

                return (
                  <button
                    key={t.name}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3.5 relative overflow-hidden ${
                      isSelected
                        ? "bg-sand/15 border-sand text-navy shadow-lg translate-x-1.5"
                        : "bg-white border-navy/10 text-navy/60 hover:bg-navy/5 hover:border-navy/20"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-sand" />
                    )}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className={`w-10 h-10 rounded-full object-cover border transition-all shrink-0 ${
                        isSelected
                          ? "border-sand scale-105 shadow-md"
                          : "border-navy/10 opacity-70"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p
                          className={`text-sm font-semibold truncate ${
                            isSelected ? "text-navy" : "text-navy/80"
                          }`}
                        >
                          {t.name}
                        </p>
                        <span
                          className={`text-[10px] font-mono shrink-0 ${
                            isSelected
                              ? "text-sand font-bold"
                              : "text-navy/40"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-navy/50 truncate mt-0.5">
                        {t.company}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Trust Proof Badge */}
            <div className="p-4 rounded-2xl bg-linear-to-br from-teal/15 via-sand/10 to-sand/15 border border-navy/10 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-sand/15 border border-sand/30 flex items-center justify-center text-sand shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-sand font-bold">
                  99.8% On-Time Reliability
                </p>
                <p className="text-[11px] text-navy/70 mt-0.5 font-light leading-snug">
                  50,000+ monthly enterprise commutes executed with 100% safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Automatic Infinite Marquee Ribbon of Reviews & Stats */}
        <div className="mt-14 pt-8 border-t border-navy/10 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-soft to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-soft to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                onClick={() => handleSelect(index % testimonials.length)}
                className="flex items-center gap-3.5 px-5 py-2.5 rounded-full bg-white border border-navy/10 hover:border-sand/40 hover:bg-navy/5 transition-all cursor-pointer text-xs shrink-0 shadow-xs"
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-6 h-6 rounded-full object-cover border border-sand/50"
                />
                <span className="font-semibold text-navy">{item.name}</span>
                <span className="text-navy/40">•</span>
                <span className="text-sand">{item.company}</span>
                <span className="text-navy/40">•</span>
                <span className="text-teal font-mono">{item.stats}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
