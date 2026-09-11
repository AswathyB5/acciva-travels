import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ChevronRight,
  ArrowUpRight,
  GraduationCap,
  Building2,
  MessageCircle,
} from "lucide-react";
import ServiceList from "../components/ServiceList";
import Magnetic from "../components/Magnetic";
import AnimatedImage from "../components/AnimatedImage";
import SmartLink from "../components/SmartLink";
import RichText from "../components/RichText";
import { services as fallbackServices } from "../data/content";
import { useCollection, usePageContent } from "../data/useContent";
import { resolveIcon } from "../data/iconMap";

const SERVICES_DEFAULTS = {
  heroEyebrow: "Enterprise Solutions",
  heroTitleMain: "Corporate Mobility & Fleet Solutions",
  heroTitleAccent: "At Scale.",
  heroIntro:
    "End-to-end employee transportation, tech park shuttle networks, executive transit, and airport transfers managed with 99.8% on-time precision.",
  heroBackgroundImage:
    "https://images.pexels.com/photos/34985962/pexels-photo-34985962.jpeg?auto=compress&cs=tinysrgb&w=1920",
  introEyebrow: "Who We Are",
  introHeadingMain: "Professional, Reliable",
  introHeadingAccent: "Transportation Services.",
  introParagraphs: [
    "At Acciva Travels, we provide reliable passenger transportation for schools, businesses, corporations, and institutions. We work with each client to understand their requirements and build a transportation service that fits their routes, schedules, and day-to-day operations.",
    "From school and employee transportation to scheduled and customized services, we manage the people, vehicles, routes, and schedules involved in keeping your transportation running smoothly. Our focus is simple: safe journeys, dependable service, and better visibility for our clients.",
  ],
  introImage: "https://i.ibb.co/1Whpb03/0cb03a11-e697-445e-8b5e-c08c67dc9c28.jpg",
  offerEyebrow: "What We Offer",
  offerHeadingMain: "Our",
  offerHeadingAccent: "Transportation Services",
  offerParagraphs: [
    "Acciva Travels provides transportation solutions for organizations with regular or customized travel requirements.",
    "Our services include school transportation, corporate and employee transportation, scheduled transportation, route planning, fleet management, and customized transportation services.",
  ],
  offerCards: [
    {
      title: "For Schools",
      description:
        "For schools, we work with administrators to plan routes, organize pickup and drop-off points, and manage day-to-day transportation operations. Our systems can also give parents better visibility of their child's journey, including vehicle location and estimated arrival times.",
    },
    {
      title: "For Businesses & Corporations",
      description:
        "For businesses and corporations, we provide organized employee transportation designed around working hours, pickup locations, routes, and staff requirements. Our team handles the coordination so that businesses can focus on their operations while we take care of the transportation.",
    },
  ],
  catalogueEyebrow: "Our Fleet Offerings",
  catalogueHeadingMain: "Tailored Mobility",
  catalogueHeadingAccent: "Programs.",
  catalogueParagraph:
    "Explore our comprehensive range of specialized transport capabilities designed for corporate technology parks, GCCs, and enterprise teams.",
  catalogueFilterLabel: "Filter Fleet by:",
  catalogueFilterAllLabel: "All Fleet Capabilities",
  catalogueFilterDailyLabel: "Daily Employee Transit",
  catalogueFilterExecutiveLabel: "Executive & VIP",
  catalogueFilterGroupLabel: "Shuttle & Tech Parks",
  catalogueCardButtonText: "View Details",
  catalogueCardButtonLink: "/contact",
  catalogueSlaText: "99.8% SLA Backed • Pan-India",
  techEyebrow: "Smarter Visibility",
  techHeadingMain: "Technology &",
  techHeadingAccent: "Tracking",
  techParagraphs: [
    "Technology plays an important role in how we manage our transportation services.",
    "With GPS vehicle tracking and mobile-based monitoring, clients can have better visibility of vehicles and routes. Tracking information can help transportation teams monitor journeys, keep passengers informed, and respond quickly when routes or schedules need to change.",
    "For school transportation, tracking can also give parents and authorized users useful information about the vehicle's location and expected arrival time.",
    "By combining technology with hands-on operational management, we make transportation easier to monitor and manage.",
  ],
  techFeatureChips: [
    { icon: "Radar", label: "GPS Vehicle Tracking" },
    { icon: "Smartphone", label: "Mobile-Based Monitoring" },
    { icon: "MapPin", label: "Live ETA Visibility" },
  ],
  techImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1PGWlQMFcALtYDya1LX3qwlmG22SbNwVPm2T3sBLgd8F-GYxd64fZNH9&s=10",
  safetyEyebrow: "Trust & Compliance",
  safetyHeadingMain: "Safety &",
  safetyHeadingAccent: "Driver Standards",
  safetyParagraphs: [
    "When you are responsible for transporting students or employees, safety comes first.",
    "Our aim is to give schools, businesses, passengers, and parents confidence that their transportation is being handled responsibly.",
  ],
  safetyCards: [
    {
      icon: "UserCheck",
      title: "Verified Drivers",
      text: "At Acciva Travels, we take care in selecting and verifying our drivers and ensuring they meet the requirements of the service they are providing. Driver qualifications, experience, conduct, and overall suitability are important parts of our selection process.",
    },
    {
      icon: "Wrench",
      title: "Vehicle Upkeep",
      text: "We also pay attention to the condition and upkeep of our vehicles.",
    },
    {
      icon: "Eye",
      title: "Monitored Operations",
      text: "We monitor transportation operations to maintain a safe and professional service.",
    },
  ],
  whyEyebrow: "Distinct Advantage",
  whyHeadingMain: "Why Choose",
  whyHeadingAccent: "Acciva Travels?",
  whyParagraphs: [
    "Every organization has different transportation needs. A school may need carefully planned student routes, while a company may need employee pickups that match multiple shifts and locations.",
    "That's why we don't believe in a one-size-fits-all approach.",
    "Acciva Travels works with clients to understand their requirements and build transportation services around them. From route planning and scheduling to fleet and driver coordination, our team manages the details that keep the service moving.",
  ],
  whyHighlight:
    "With professional drivers, managed vehicles, route planning, and technology-supported tracking, we provide organizations with a transportation partner they can rely on.",
  differentiators: [
    { icon: "Layers", title: "Not One-Size-Fits-All", text: "Services built around each client's specific routes and schedules." },
    { icon: "Route", title: "Requirement-Led Planning", text: "Route planning and scheduling shaped by real operational needs." },
    { icon: "UserCheck", title: "Fleet & Driver Coordination", text: "Vehicles and drivers coordinated so nothing is left to chance." },
    { icon: "Sparkles", title: "Technology-Supported Tracking", text: "A dependable partner backed by visibility at every step." },
  ],
  talkHeadingMain: "Let's Talk About Your",
  talkHeadingAccent: "Transportation Needs",
  talkParagraphs: [
    "Looking for a reliable transportation partner for your school, business, or organization?",
    "Talk to Acciva Travels about your requirements. We'll work with you to understand your routes, schedules, and operational needs and develop a transportation solution that works for you.",
  ],
  talkButtonText: "Talk to Acciva Travels",
  talkButtonLink: "/contact",
  ctaEyebrow: "Enterprise Mobility Consulting",
  ctaHeadingMain: "Ready to Optimize Your",
  ctaHeadingAccent: "Company Transportation?",
  ctaParagraph:
    "Get a tailored fleet proposal with live telemetry integration, automated shift rostering, and dedicated command support.",
  ctaButton1Text: "Request Enterprise Quote",
  ctaButton1Link: "/contact",
  ctaButton2Text: "Learn About Our Standards",
  ctaButton2Link: "/about",
};

// 3D Tilt Card wrapper with layered pattern-line hover animations
// (top shimmer sweep, corner accent, left edge line, animated top thumb line)
// — matches the pattern used across the About page's feature cards.
const TiltCard = ({
  children,
  className,
  glowColor = "rgba(59,141,196,0.22)",
  accentGlow = "rgba(59,141,196,0.4)",
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 350,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 350,
    damping: 24,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
        boxShadow: `0 20px 35px -10px ${glowColor}`,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`${className} relative transition-all duration-500 group`}
    >
      {/* Animated Top Glow Bar on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Corner quarter-circle round accent, pops in when the card scrolls into view */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none origin-top-right"
        style={{ background: glowColor }}
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Left edge line, grows downward when the card scrolls into view */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-0.5 origin-top pointer-events-none"
        style={{ background: accentGlow }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Animated top accent line: a scrollbar-style thumb slides once from start to end */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-navy/5 overflow-hidden pointer-events-none z-10">
        <motion.div
          className="absolute inset-y-0 w-1/4 rounded-full"
          style={{ background: accentGlow }}
          initial={{ x: "-100%" }}
          whileInView={{ x: "400%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>

      {children}
    </motion.div>
  );
};

// Row of feature chips with a traveling ball that runs left-to-right along a
// connecting line, looping forever. Whichever chip the ball is passing under
// lights up (glow ring + sweep) — same motif as the WhyAcciva ball-relay.
const FeatureChipsRow = ({ chips }) => {
  const [active, setActive] = useState(-1);
  const total = chips.length;
  const toneCycle = ["teal", "sand"];

  return (
    <div className="relative pt-4">
      {/* Connecting line + traveling ball (desktop) */}
      <div className="hidden sm:block absolute top-8 left-[16.6%] right-[16.6%] h-px bg-navy/10 overflow-visible pointer-events-none z-0">
        <motion.div
          className="h-full bg-linear-to-r from-teal via-sand to-teal origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(59,141,196,0.55)]"
          initial={{ left: "0%", opacity: 0 }}
          whileInView={{
            left: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          viewport={{ once: true, amount: 0.3 }}
          onUpdate={(latest) => {
            const pct = parseFloat(latest.left);
            if (Number.isNaN(pct)) return;
            const step = Math.min(total - 1, Math.max(0, Math.round((pct / 100) * (total - 1))));
            setActive((prev) => (prev === step ? prev : step));
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            repeatDelay: 0.9,
            ease: "easeInOut",
            times: [0, 0.08, 0.92, 1],
          }}
        />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap lg:justify-between gap-3 relative z-10">
        {chips.map((item, i) => {
          const isActive = active === i;
          const isSand = toneCycle[i % toneCycle.length] === "sand";
          const glow = isSand ? "rgba(225,197,157,0.6)" : "rgba(59,141,196,0.4)";
          const IconComp = resolveIcon(item.icon);
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              animate={
                isActive
                  ? { y: -4, scale: 1.05, boxShadow: `0 16px 30px ${glow}` }
                  : { y: 0, scale: 1, boxShadow: "0 10px 25px rgba(38,55,74,0.05)" }
              }
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-white border-2 transition-colors duration-300 overflow-hidden ${
                isSand
                  ? `border-sand/40 ${isActive ? "!border-sand" : "hover:border-sand/70"}`
                  : `border-teal/25 ${isActive ? "!border-teal" : "hover:border-teal/50"}`
              }`}
            >
              <span
                className={`relative w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                  isSand ? "bg-sand/25 text-navy" : "bg-teal/10 text-teal"
                }`}
              >
                {isActive && (
                  <motion.span
                    className={`absolute -inset-1.5 rounded-full border-2 pointer-events-none ${
                      isSand ? "border-sand/70" : "border-teal/60"
                    }`}
                    initial={{ opacity: 0.8, scale: 0.85 }}
                    animate={{ opacity: [0.8, 0], scale: [0.85, 1.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <IconComp size={15} className="relative z-10" />
              </span>
              <span
                className={`text-[13px] font-semibold ${
                  isSand ? "text-[#a3843f]" : "text-navy"
                }`}
              >
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Safety card — mirrors the Home page WhyAcciva AccentCard: 3D tilt, colored
// border, corner accent, top sweep + icon glow ring while the traveling ball
// is passing beneath it.
const SafetyCard = ({ card, isActive }) => {
  const IconComp = resolveIcon(card.icon);
  const isTeal = card.tone === "teal";
  const glow = isTeal ? "rgba(59,141,196,0.4)" : "rgba(225,197,157,0.55)";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 350, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 350, damping: 24 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.06, y: -6 }}
      animate={
        isActive
          ? { scale: 1.12, y: -12, boxShadow: `0 30px 60px ${glow}` }
          : { scale: 1, y: 0, boxShadow: "0 10px 30px rgba(38,55,74,0.06)" }
      }
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative z-40 mx-auto w-full max-w-72 rounded-3xl bg-white border-2 overflow-hidden ${
        isTeal ? "border-teal/30" : "border-sand/50"
      }`}
    >
      {/* Top sweep line — animates in when the traveling ball reaches this card */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-navy/5 overflow-hidden z-10">
        {isActive && (
          <motion.div
            key="sweep"
            className="h-full origin-left bg-linear-to-r from-teal via-sand to-teal"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </div>

      {/* Corner round pattern */}
      <motion.div
        className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full pointer-events-none origin-top-right ${
          isTeal ? "bg-teal/15" : "bg-sand/25"
        }`}
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="p-5 relative" style={{ transform: "translateZ(20px)" }}>
        <div
          className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
            isTeal ? "bg-teal/10 text-teal" : "bg-sand/20 text-navy"
          }`}
        >
          {isActive && (
            <>
              <motion.span
                className={`absolute -inset-2 rounded-2xl border-2 pointer-events-none ${
                  isTeal ? "border-teal/60" : "border-sand/70"
                }`}
                initial={{ opacity: 0.8, scale: 0.85 }}
                animate={{ opacity: [0.8, 0], scale: [0.85, 1.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    `0 0 0px 0px ${glow}`,
                    `0 0 18px 7px ${glow}`,
                    `0 0 0px 0px ${glow}`,
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}
          <IconComp size={24} className="stroke-[1.75] relative z-10" />
        </div>
        <h3 className="font-display text-navy text-lg font-bold leading-snug">{card.title}</h3>
        <p className="text-slate-600 text-[13px] leading-relaxed mt-2">{card.text}</p>
      </div>
    </motion.div>
  );
};

const SAFETY_CARD_VISUALS = [
  { tone: "teal", offset: "lg:mt-0" },
  { tone: "sand", offset: "lg:mt-18" },
  { tone: "teal", offset: "lg:mt-36" },
];

// Row with a bent, stair-step connecting line + traveling ball, same motif
// and visibility as the Home page's WhyAcciva row (colored gradient line
// drawn in permanently, plus a glowing ball that relays across, looping
// forever) — the path itself steps down to match each card's offset.
const SafetyCardsRow = ({ cards }) => {
  const [active, setActive] = useState(-1);
  const cx = [150, 225, 300, 375, 450, 525, 600, 675, 750];
  const cy = [56, 56, 56, 92, 128, 128, 128, 162, 196];
  const minCx = cx[0];
  const maxCx = cx[cx.length - 1];

  return (
    <div className="relative pb-6">
      {/* Connecting stair-step line + traveling ball (desktop only) */}
      <svg
        viewBox="0 0 900 220"
        preserveAspectRatio="none"
        className="hidden lg:block absolute left-0 right-0 top-0 w-full h-[220px] pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="safetyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b8dc4" />
            <stop offset="50%" stopColor="#e1c59d" />
            <stop offset="100%" stopColor="#3b8dc4" />
          </linearGradient>
        </defs>
        {/* Colored gradient track, always visible (drawn in on scroll) */}
        <motion.path
          d="M 150,56 C 300,56 300,128 450,128 C 600,128 600,196 750,196"
          fill="none"
          stroke="url(#safetyLineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Traveling ball, loops forever once the line has drawn in */}
        <motion.circle
          r="6"
          fill="#3b8dc4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          animate={{ cx, cy }}
          onUpdate={(latest) => {
            const progress = (latest.cx - minCx) / (maxCx - minCx);
            const step = progress < 0.375 ? 0 : progress < 0.625 ? 1 : 2;
            setActive((prev) => (prev === step ? prev : step));
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 0.8,
            delay: 1.1,
            ease: "easeInOut",
          }}
          style={{ filter: "drop-shadow(0 0 8px rgba(59,141,196,0.7))" }}
        />
      </svg>

      <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {cards.map((card, i) => {
          const visual = SAFETY_CARD_VISUALS[i % SAFETY_CARD_VISUALS.length];
          const mergedCard = { ...card, ...visual };
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={visual.offset}
            >
              <SafetyCard card={mergedCard} isActive={active === i} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Vertical timeline of differentiators with a traveling ball running down the
// connecting line, looping forever — when it reaches an item, that item's
// icon and card light up (same motif as the Technology page's "How It Works"
// process timeline).
const DifferentiatorTimeline = ({ items }) => {
  const [active, setActive] = useState(-1);
  const total = items.length;

  return (
    <div className="relative">
      <motion.div
        className="absolute left-5 top-2 bottom-2 w-0.5 bg-linear-to-b from-teal via-sand to-teal origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Traveling ball riding the vertical line, looping forever */}
      <motion.div
        className="absolute left-5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-teal shadow-[0_0_14px_5px_rgba(59,141,196,0.55)] z-20"
        initial={{ top: "0%", opacity: 0 }}
        whileInView={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, amount: 0.2 }}
        onUpdate={(latest) => {
          const pct = parseFloat(latest.top);
          if (Number.isNaN(pct)) return;
          const step = Math.min(total - 1, Math.max(0, Math.round((pct / 100) * (total - 1))));
          setActive((prev) => (prev === step ? prev : step));
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          repeatDelay: 0.9,
          ease: "easeInOut",
          times: [0, 0.06, 0.94, 1],
        }}
      />

      <div className="space-y-5">
        {items.map((item, i) => {
          const isActive = active === i;
          const IconComp = resolveIcon(item.icon);
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="relative flex items-start gap-4 pl-0"
            >
              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                animate={
                  isActive
                    ? { scale: 1.12, backgroundColor: "rgba(225,197,157,0.25)" }
                    : { scale: 1, backgroundColor: "rgba(255,255,255,1)" }
                }
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center shadow-md transition-colors duration-300 ${
                  isActive ? "border-sand text-navy" : "border-teal/40 text-teal"
                }`}
              >
                {isActive && (
                  <motion.span
                    className="absolute -inset-1.5 rounded-full border-2 border-sand/70 pointer-events-none"
                    initial={{ opacity: 0.8, scale: 0.85 }}
                    animate={{ opacity: [0.8, 0], scale: [0.85, 1.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <IconComp size={18} className="relative z-10" />
              </motion.span>
              <motion.div
                animate={
                  isActive
                    ? { y: -2, boxShadow: "0 20px 45px rgba(59,141,196,0.18)" }
                    : { y: 0, boxShadow: "0 10px 30px rgba(38,55,74,0.05)" }
                }
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative pt-1.5 p-4 rounded-2xl bg-white border transition-colors duration-300 flex-1 overflow-hidden ${
                  isActive ? "border-teal/50" : "border-navy/10 hover:border-teal/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 origin-left bg-linear-to-r from-teal via-sand to-teal"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <h3 className="font-display text-navy text-lg font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[13px] leading-relaxed mt-1">
                  {item.text}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const Services = () => {
  const { items: services } = useCollection("services", fallbackServices);
  const { data: content } = usePageContent("services", SERVICES_DEFAULTS);
  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* SUBPAGE HEADER: CLEAN WHITE/SOFT SECTION WITH HERO SHOWCASE IMAGE    */}
      {/* ========================================================================= */}
      <section
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('${content.heroBackgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Light overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        <div className="container-px relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider">
            <NavLink
              to="/"
              className="hover:text-teal transition-colors text-navy/70 font-bold"
            >
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Services</span>
          </div>

          {/* Title & Intro Row with Staggered Fade Up */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">{content.heroEyebrow}</span>
              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                {content.heroTitleMain}{" "}
                <span className="italic text-teal font-normal">{content.heroTitleAccent}</span>
              </h1>
            </motion.div>

            <RichText
              as={motion.div}
              html={content.heroIntro}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="article-content max-w-md text-navy/90 text-[15px] font-medium leading-relaxed pb-2"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROFESSIONAL, RELIABLE TRANSPORTATION SERVICES (INTRO)               */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/10 rounded-bl-full pointer-events-none" />
        <div className="container-px relative z-10 space-y-10">
          {/* Row 1 — full width heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="eyebrow text-teal">{content.introEyebrow}</span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
              {content.introHeadingMain}{" "}
              <span className="italic text-teal font-normal">
                {content.introHeadingAccent}
              </span>
            </h2>
          </motion.div>

          {/* Row 2 — image + description, full width */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-full min-h-[260px] rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group"
              >
                <AnimatedImage
                  src={content.introImage}
                  alt="Acciva Travels professional transportation"
                  effect="zoom-out"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="h-full flex flex-col justify-center space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              {content.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR TRANSPORTATION SERVICES                                          */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <span className="eyebrow text-teal">{content.offerEyebrow}</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
              {content.offerHeadingMain}{" "}
              <span className="italic text-teal font-normal">
                {content.offerHeadingAccent}
              </span>
            </h2>
            <div className="mt-5 space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed w-full">
              {content.offerParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Schools */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: 1200 }}
            >
              <TiltCard
                glowColor="rgba(59,141,196,0.25)"
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-teal/25 shadow-lg cursor-default h-full overflow-hidden"
              >
                <div
                  style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-inner mb-6">
                    <GraduationCap size={26} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-navy font-bold mb-3 group-hover:text-teal transition-colors">
                    {content.offerCards[0].title}
                  </h3>
                  <p className="text-[15px] text-slate-700 leading-relaxed font-normal">
                    {content.offerCards[0].description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Businesses */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              style={{ transformPerspective: 1200 }}
            >
              <TiltCard
                glowColor="rgba(225,197,157,0.3)"
                accentGlow="rgba(225,197,157,0.6)"
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-sand/30 shadow-lg cursor-default h-full overflow-hidden"
              >
                <div
                  style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-sand/20 flex items-center justify-center text-navy shadow-inner mb-6">
                    <Building2 size={26} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-navy font-bold mb-3 group-hover:text-teal transition-colors">
                    {content.offerCards[1].title}
                  </h3>
                  <p className="text-[15px] text-slate-700 leading-relaxed font-normal">
                    {content.offerCards[1].description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TECHNOLOGY & TRACKING (ANIMATED LIVE-TRACKING VISUAL)                */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/10 rounded-tr-full pointer-events-none" />

        {/* Ambient drifting glow orbs */}
        <motion.div
          className="absolute top-10 right-[10%] w-72 h-72 bg-teal/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-[8%] w-56 h-56 bg-sand/15 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-px relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-5"
            >
              <span className="eyebrow text-teal">{content.techEyebrow}</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
                {content.techHeadingMain}{" "}
                <span className="italic text-teal font-normal">{content.techHeadingAccent}</span>
              </h2>
              <div className="space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed">
                {content.techParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Feature chips row */}
              <FeatureChipsRow chips={content.techFeatureChips} />
            </motion.div>

            {/* Right — Live tracking radar visual */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-square max-w-[420px] mx-auto rounded-3xl bg-white border border-navy/10 shadow-2xl overflow-hidden group">
                <AnimatedImage
                  src={content.techImage}
                  alt="Live GPS vehicle tracking"
                  effect="zoom-out"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating live badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-navy/10 shadow-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-navy/80 font-semibold">
                    Live Tracking
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SAFETY & DRIVER STANDARDS                                            */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="max-w-3xl">
              <span className="eyebrow text-teal">{content.safetyEyebrow}</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
                {content.safetyHeadingMain}{" "}
                <span className="italic text-teal font-normal">
                  {content.safetyHeadingAccent}
                </span>
              </h2>
            </div>
            <div className="mt-5 space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed">
              {content.safetyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <SafetyCardsRow cards={content.safetyCards} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY CHOOSE ACCIVA TRAVELS?                                           */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-12"
          >
            <span className="eyebrow text-teal">{content.whyEyebrow}</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
              {content.whyHeadingMain}{" "}
              <span className="italic text-teal font-normal">
                {content.whyHeadingAccent}
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left — narrative copy inside a tilted highlight card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              {content.whyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <TiltCard
                glowColor="rgba(225,197,157,0.35)"
                accentGlow="rgba(59,141,196,0.45)"
                className="p-6 sm:p-7 rounded-3xl bg-white border border-teal/30 shadow-xl cursor-default overflow-hidden"
              >
                <p
                  style={{ transform: "translateZ(20px)" }}
                  className="font-display text-lg sm:text-xl text-navy font-medium leading-snug relative"
                >
                  {content.whyHighlight}
                </p>
              </TiltCard>
            </motion.div>

            {/* Right — animated vertical timeline of differentiators */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="lg:col-span-5 relative"
            >
              <DifferentiatorTimeline items={content.differentiators} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LET'S TALK ABOUT YOUR TRANSPORTATION NEEDS                          */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-teal/20 shadow-xl relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-teal/10 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-sand/15 rounded-tr-full pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-inner mb-6">
                <MessageCircle size={26} />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
                {content.talkHeadingMain}{" "}
                <span className="italic text-teal font-normal">
                  {content.talkHeadingAccent}
                </span>
              </h2>
              <div className="mt-5 space-y-3 text-slate-700 text-[15px] font-normal leading-relaxed max-w-2xl mx-auto">
                {content.talkParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Magnetic strength={20}>
                  <SmartLink
                    to={content.talkButtonLink}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
                  >
                    <span>{content.talkButtonText}</span>
                    <ArrowUpRight size={16} />
                  </SmartLink>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SERVICES CATALOGUE GRID                                              */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <span className="eyebrow text-teal">{content.catalogueEyebrow}</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
                {content.catalogueHeadingMain}{" "}
                <span className="italic text-teal font-normal">{content.catalogueHeadingAccent}</span>
              </h2>
            </div>
            <RichText
              html={content.catalogueParagraph}
              className="article-content text-slate-600 text-[15px] font-normal leading-relaxed max-w-md"
            />
          </motion.div>

          <ServiceList
            services={services}
            filterLabel={content.catalogueFilterLabel}
            filterLabels={{
              all: content.catalogueFilterAllLabel,
              daily: content.catalogueFilterDailyLabel,
              executive: content.catalogueFilterExecutiveLabel,
              group: content.catalogueFilterGroupLabel,
            }}
            cardButtonText={content.catalogueCardButtonText}
            cardButtonLink={content.catalogueCardButtonLink}
            slaText={content.catalogueSlaText}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CINEMATIC MAGNETIC CLOSING CTA WITH BACKGROUND VIDEO                 */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-soft text-navy relative overflow-hidden">
        {/* Background Video & Overlays */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-ocean.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-soft/95 via-soft/85 to-soft/95 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none" />
        {/* Corner quarter-circle accents — same motif as the About page's cards */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-4xl mx-auto">
          <span className="eyebrow text-teal inline-block">
            {content.ctaEyebrow}
          </span>

          <motion.div
            className="mx-auto my-6 h-px w-16 bg-sand/60"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
            {[
              { text: content.ctaHeadingMain, cls: "" },
              {
                text: content.ctaHeadingAccent,
                cls: "italic text-teal font-normal",
              },
            ].map((line, i) => (
              <span className="line-mask block" key={i}>
                <motion.span
                  initial={{ y: "40%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.12,
                  }}
                  className={`block ${line.cls}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          <RichText
            html={content.ctaParagraph}
            className="article-content mt-6 text-slate-700 text-[15px] font-normal max-w-2xl mx-auto leading-relaxed"
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Magnetic strength={20}>
              <SmartLink
                to={content.ctaButton1Link}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
              >
                <span>{content.ctaButton1Text}</span>
                <ArrowUpRight size={16} />
              </SmartLink>
            </Magnetic>

            <Magnetic strength={15}>
              <SmartLink
                to={content.ctaButton2Link}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
              >
                <span>{content.ctaButton2Text}</span>
                <ArrowUpRight size={16} />
              </SmartLink>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;








