import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { ArrowUpRight, Cpu, ShieldCheck, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const panels = [
  {
    id: "left-tech",
    num: "01",
    badge: "Smart Mobility",
    tag: "Technology",
    title: "Acciva Driven By Technology",
    desc: "Maximizing transport efficiency & minimizing operational costs with automated intelligent routing.",
    icon: Cpu,
    src: "/hero-mountains.mp4",
    link: "/contact",
    linkText: "Book Now",
  },
  {
    id: "center-welcome",
    num: "02",
    badge: "Pan India Presence",
    tag: "About Us",
    title: "Welcome To Acciva",
    desc: "Acciva Travels has emerged to be one of the best leading Corporate Employee Transport Services & Solutions Pan India.",
    icon: Building2,
    src: "/hero-ocean.mp4",
    link: "/contact",
    linkText: "Book Now",
  },
  {
    id: "right-reliable",
    num: "03",
    badge: "Trusted Partner",
    tag: "Safety & SLA",
    title: "Reliable & Professional",
    desc: "Corporate employee transportation provider delivering seamless, secure, and punctual transit.",
    icon: ShieldCheck,
    src: "/hero-desert.mp4",
    link: "/contact",
    linkText: "Book Now",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const Hero = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // Mobile slider state
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + panels.length) % panels.length);
  };

  // Auto slide on mobile every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Cursor spotlight for desktop
  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.5);
  const springX = useSpring(mvX, { stiffness: 45, damping: 20, mass: 0.5 });
  const springY = useSpring(mvY, { stiffness: 45, damping: 20, mass: 0.5 });
  const spotlight = useMotionTemplate`radial-gradient(750px circle at ${useTransform(
    springX,
    (v) => `${v * 100}%`
  )} ${useTransform(springY, (v) => `${v * 100}%`)}, rgba(216,199,165,0.12), transparent 75%)`;

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width);
    mvY.set((e.clientY - rect.top) / rect.height);
  };

  const currentPanel = panels[current];

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-midnight select-none"
    >
      {/* ========================================================================= */}
      {/* MOBILE SLIDER VIEW (Active on screens < md)                               */}
      {/* ========================================================================= */}
      <div className="relative md:hidden w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentPanel.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 32 },
              opacity: { duration: 0.35 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -60 || offset.x < -70) {
                paginate(1);
              } else if (swipe > 60 || offset.x > 70) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full flex flex-col justify-end"
          >
            {/* Background Video */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={currentPanel.src}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />

            {/* Overlay: dark only where the text sits, clear elsewhere */}
            <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/25 to-transparent pointer-events-none" />

            {/* Mobile Bottom Content */}
            <div className="relative z-10 px-6 pb-24 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-px w-5 bg-sand" />
                <span className="eyebrow text-sand text-[10px] tracking-[0.25em]">
                  {currentPanel.tag}
                </span>
              </div>

              <h2 className="font-display text-ivory text-3xl sm:text-4xl leading-[1.15] tracking-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
                {currentPanel.title}
              </h2>

              <p className="mt-3 text-sm text-ivory/80 font-light leading-relaxed drop-shadow-md line-clamp-3">
                {currentPanel.desc}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <NavLink
                  to={currentPanel.link}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-sand/80 bg-midnight/30 backdrop-blur-xs text-sand active:bg-sand active:text-midnight hover:bg-sand hover:text-midnight font-semibold text-xs tracking-widest uppercase active:scale-95 transition-all"
                >
                  <span>{currentPanel.linkText}</span>
                  <ArrowUpRight size={16} />
                </NavLink>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Navigation Controls & Pagination */}
        <div className="absolute bottom-6 inset-x-6 z-20 flex items-center justify-between pointer-events-auto">
          {/* Segmented Indicators */}
          <div className="flex items-center gap-2">
            {panels.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-8 bg-sand shadow-sm"
                    : "w-2 bg-ivory/30 hover:bg-ivory/60"
                }`}
              />
            ))}
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full bg-midnight/70 backdrop-blur-md border border-ivory/20 flex items-center justify-center text-ivory active:scale-90 transition-all hover:bg-midnight hover:border-sand hover:text-sand"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-midnight/70 backdrop-blur-md border border-ivory/20 flex items-center justify-center text-ivory active:scale-90 transition-all hover:bg-midnight hover:border-sand hover:text-sand"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP / TABLET 3-PARTITION VIEW (Active on screens >= md)               */}
      {/* ========================================================================= */}
      <div className="hidden md:flex absolute inset-0 flex-row w-full h-full">
        {panels.map((panel, idx) => {
          const isNotLast = idx < panels.length - 1;

          return (
            <div
              key={panel.id}
              className={`group relative h-full flex-1 w-1/3 overflow-hidden ${
                isNotLast ? "border-r border-ivory/20" : ""
              }`}
            >
              {/* Individual Background Video with smooth scroll zoom */}
              <motion.video
                style={{ scale: bgScale }}
                className="h-full w-full object-cover"
                src={panel.src}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />

              {/* Overlay: dark only where the text sits, clear elsewhere */}
              <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/20 to-transparent pointer-events-none" />

              {/* Column Dividing Intersection Markers */}
              {isNotLast && (
                <>
                  <div className="absolute top-24 md:top-28 -right-[6px] text-sand/70 text-[12px] font-mono select-none pointer-events-none z-20">
                    +
                  </div>
                  <div className="absolute bottom-12 -right-[6px] text-ivory/40 text-[12px] font-mono select-none pointer-events-none z-20">
                    +
                  </div>
                </>
              )}

              {/* Column Content */}
              <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="absolute inset-0 p-5 sm:p-7 md:p-9 flex flex-col justify-end pointer-events-none z-10"
              >
                {/* Column Bottom: Heading & Description */}
                <div className="pb-8 sm:pb-10 flex flex-col justify-end">
                  {/* Small Eyebrow Label */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-4 bg-sand/80" />
                    <span className="eyebrow text-sand text-[9px] sm:text-[10px] tracking-[0.25em]">
                      {panel.tag}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="font-display text-ivory text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-tight drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]">
                    {panel.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-ivory/75 font-light leading-relaxed max-w-sm drop-shadow-md">
                    {panel.desc}
                  </p>

                  {/* Button */}
                  <div className="mt-5 pt-1">
                    <NavLink
                      to={panel.link}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-sand/80 bg-midnight/15 backdrop-blur-xs text-sand hover:bg-sand hover:text-midnight hover:border-sand font-semibold text-xs tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-0.5 group/btn"
                    >
                      <span>{panel.linkText}</span>
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Top scrim so the transparent navbar stays readable over bright video */}
      <div className="absolute top-0 inset-x-0 h-28 sm:h-36 bg-linear-to-b from-midnight/70 to-transparent pointer-events-none z-30" />

      {/* Global Interactive Cursor Spotlight */}
      <motion.div
        style={{ background: spotlight }}
        className="hidden md:block absolute inset-0 pointer-events-none z-20"
      />
    </section>
  );
};

export default Hero;

