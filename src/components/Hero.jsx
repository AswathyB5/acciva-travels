import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const HERO_TITLE =
  "Corporate Mobility & Transportation Solutions for a Moving Business World";

const HERO_SUPPORTING =
  "Employee Transportation | Corporate Cabs | Corporate Car Rentals | Executive Mobility | Long-Term Leasing | Logistics | Truck Services | Events | PAN India Mobility";

const HERO_DESC =
  "Acciva Travels provides end-to-end mobility, transportation and logistics solutions for businesses-from daily employee pick-up and drop to executive travel, long-term vehicle leasing, commercial trucks, logistics movement, corporate events and PAN India transportation requirements.";

const panels = [
  {
    id: "center-welcome",
    num: "01",
    title: HERO_TITLE,
    supporting: HERO_SUPPORTING,
    desc: HERO_DESC,
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80",
    link: "/contact",
    linkText: "Get a Corporate Mobility Consultation",
  },
  {
    id: "left-tech",
    num: "02",
    title: HERO_TITLE,
    supporting: HERO_SUPPORTING,
    desc: HERO_DESC,
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/Force_Traveller%2C_Leh-Manali_Highway.jpg",
    link: "/contact",
    linkText: "Request a Corporate Quotation",
  },
  {
    id: "right-reliable",
    num: "03",
    title: HERO_TITLE,
    supporting: HERO_SUPPORTING,
    desc: HERO_DESC,
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ashok_Leyland_U_truck_-_Chennai_-_India.jpg",
    link: "/contact",
    linkText: "Talk to Our Mobility Team",
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

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const timer = useRef(null);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + panels.length) % panels.length);
  };

  const goToSlide = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    timer.current = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer.current);
  }, [current]);

  // Guarantee the zoom-out always plays from a fresh 1.12 scale, even on the very first
  // mount, by driving it off explicit state instead of relying on Framer's initial prop
  // (which can be skipped when nested inside an AnimatePresence configured with initial={false}).
  useEffect(() => {
    setZoomed(false);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setZoomed(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [current]);

  const currentPanel = panels[current];

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-midnight select-none">
      {/* Top scrim gradient for transparent navbar */}
      <div className="absolute top-0 inset-x-0 h-32 sm:h-40 bg-linear-to-b from-midnight/80 via-midnight/40 to-transparent pointer-events-none z-30" />

      {/* Main Full-Screen Slider View */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentPanel.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 280, damping: 30 },
              opacity: { duration: 0.4 },
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
            {/* Background Image with Cinematic Slow Zoom */}
            <motion.img
              key={`img-${currentPanel.id}`}
              initial={{ scale: 1.12 }}
              animate={{ scale: zoomed ? 1 : 1.12 }}
              transition={{ duration: 7, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
              src={currentPanel.src}
              alt={currentPanel.title}
            />
            {/* Left and Right Side Soft Dark Gradients + Bottom Scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/55 via-40% to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[50%] bg-gradient-to-l from-midnight/85 via-midnight/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-midnight/80 to-transparent pointer-events-none" />

            {/* Slide Content */}
            <div className="relative z-10 container-px pb-28 sm:pb-32 md:pb-36 flex flex-col justify-end max-w-5xl">
              <div>

                {/* Title */}
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-ivory text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)] max-w-4xl"
                >
                  {currentPanel.title}
                </motion.h1>

                {/* Supporting Line */}
                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-3 sm:mt-4 text-sand/95 font-mono text-[11px] sm:text-xs tracking-wide leading-relaxed max-w-3xl drop-shadow-md"
                >
                  {currentPanel.supporting}
                </motion.p>

                {/* Description */}
                <motion.p
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 sm:mt-5 text-[15px] text-ivory/90 font-medium leading-relaxed max-w-2xl drop-shadow-md"
                >
                  {currentPanel.desc}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  custom={4}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-7 sm:mt-8 flex items-center gap-4"
                >
                  <NavLink
                    to={currentPanel.link}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-sand bg-sand text-midnight font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl group active:scale-95"
                  >
                    <span>{currentPanel.linkText}</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </NavLink>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Controls & Indicators Bar */}
        <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-30 pointer-events-auto">
          <div className="container-px flex items-center justify-between">
            {/* Segmented Pill Indicators + Counter */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-sand tracking-widest">
                0{current + 1} <span className="text-ivory/30">/</span> 0{panels.length}
              </span>

              <div className="flex items-center gap-2">
                {panels.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      idx === current
                        ? "w-10 bg-sand shadow-lg"
                        : "w-2 bg-ivory/30 hover:bg-ivory/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Next / Prev Nav Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous slide"
                className="w-11 h-11 rounded-full bg-transparent border-2 border-sand flex items-center justify-center text-sand active:scale-90 transition-all duration-300 hover:bg-sand/10 shadow-lg cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next slide"
                className="w-11 h-11 rounded-full bg-transparent border-2 border-sand flex items-center justify-center text-sand active:scale-90 transition-all duration-300 hover:bg-sand/10 shadow-lg cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
