import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { ArrowUpRight, Cpu, ShieldCheck, Building2 } from "lucide-react";

const panels = [
  {
    id: "left-tech",
    num: "01",
    badge: "Smart Mobility",
    title: "Acciva Driven By Technology",
    desc: (
      <>
        Maximizing transport efficiency
        <br className="hidden sm:inline" /> & minimizing operational costs.
      </>
    ),
    icon: Cpu,
    src: "/hero-mountains.mp4",
  },
  {
    id: "center-welcome",
    num: "02",
    badge: "Pan India Presence",
    title: "Welcome To Acciva",
    desc: "Acciva Travels has emerged to be one of the best leading Corporate Employee Transport Services & Solutions Pan India.",
    icon: Building2,
    src: "/hero-ocean.mp4",
  },
  {
    id: "right-reliable",
    num: "03",
    badge: "Trusted Partner",
    title: "Reliable & Professional",
    desc: "Corporate employee transportation provider delivering seamless, secure, and punctual transit.",
    icon: ShieldCheck,
    src: "/hero-desert.mp4",
  },
];

const Hero = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Cursor spotlight
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

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-midnight select-none"
    >
      {/* 3 Partitioned Video Sections with Integrated Dividing Borders */}
      <div className="absolute inset-0 flex flex-row w-full h-full">
        {panels.map((panel, idx) => {
          const IconComponent = panel.icon;
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
                className="h-full w-full object-cover brightness-95"
                src={panel.src}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />

              {/* Per-Section Atmospheric Overlays */}
              <div className="absolute inset-0 bg-midnight opacity-35 pointer-events-none" />

              {/* Gradients for text contrast */}
              <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-b from-midnight/75 via-transparent to-midnight/80 pointer-events-none" />

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
                className="absolute inset-0 p-5 sm:p-7 md:p-9 flex flex-col justify-between pointer-events-none z-10"
              >
                {/* Column Top: Tag & Number */}
                <div className="pt-20 sm:pt-24 flex items-center justify-between border-b border-ivory/15 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono tracking-widest text-sand font-bold">
                      {panel.num}
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase text-ivory/90 font-medium">
                      {panel.badge}
                    </span>
                  </div>
                  <div className="text-ivory/50">
                    <IconComponent size={14} className="text-sand/80" />
                  </div>
                </div>

                {/* Column Bottom: Heading & Description */}
                <div className="pb-8 sm:pb-10 flex flex-col justify-end">
                  {/* Small Eyebrow Label */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-4 bg-sand/80" />
                    <span className="eyebrow text-sand text-[9px] sm:text-[10px] tracking-[0.25em]">
                      {panel.id === "center-welcome" ? "About Us" : "Solution"}
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
                  <div className="mt-4 pt-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ivory/20 bg-midnight/60 text-ivory/80">
                      <span className="text-[10px] font-medium tracking-wider uppercase">
                        Learn More
                      </span>
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Global Interactive Cursor Spotlight */}
      <motion.div
        style={{ background: spotlight }}
        className="absolute inset-0 pointer-events-none z-20"
      />
    </section>
  );
};

export default Hero;
