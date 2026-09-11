import { useState, useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ChevronRight,
  ArrowUpRight,
  Landmark,
  MessageCircle,
} from "lucide-react";
import Seo from "../components/Seo";
import AnimatedImage from "../components/AnimatedImage";
import Magnetic from "../components/Magnetic";
import SmartLink from "../components/SmartLink";
import { usePageContent } from "../data/useContent";
import { resolveIcon } from "../data/iconMap";

const FMS_DEFAULTS = {
  heroEyebrow: "Fleet Operations",
  heroTitleMain: "Fleet Management Services for Businesses:",
  heroTitleAccent: "Keeping Your Vehicles Organised and Operational",
  heroBackgroundImage:
    "https://images.pexels.com/photos/34985962/pexels-photo-34985962.jpeg?auto=compress&cs=tinysrgb&w=1920",
  introEyebrow: "Introduction",
  introHeadingMain: "Keeping Your Fleet",
  introHeadingAccent: "Organised and Operational.",
  introParagraphs: [
    "Owning a fleet of vehicles is only the starting point. The real challenge for any business begins after the vehicles are on the road — keeping them available when needed, maintained on schedule, properly documented, and coordinated with drivers and routes on a daily basis. For corporates, IT companies, logistics providers, hospitals, and institutions running multiple vehicles, this responsibility can quietly grow into a full-time operational burden.",
    "Vehicle availability has to be planned around shifting business needs. Maintenance has to be tracked so breakdowns don't disrupt operations. Drivers have to be coordinated across schedules, locations, and routes. Fuel costs need monitoring to prevent waste. Documentation — insurance, permits, registration, compliance records — has to stay current and accessible. None of this happens automatically, and when it's managed informally or reactively, it tends to consume far more time, money, and attention than businesses expect.",
    "This is where professional fleet management services come in. Instead of internal teams juggling vehicle logistics alongside their core responsibilities, a dedicated fleet management company takes on the day-to-day coordination, so vehicles stay organised, costs stay controlled, and transportation runs smoothly in the background of business operations.",
  ],
  introImage:
    "https://images.pexels.com/photos/6870582/pexels-photo-6870582.jpeg?auto=compress&cs=tinysrgb&w=1200",
  offerEyebrow: "Core Functions",
  offerHeadingMain: "What Fleet Management",
  offerHeadingAccent: "Actually Involves.",
  offerParagraphs: [
    "Fleet management is not a single task — it's an ongoing set of coordinated activities that keep a vehicle fleet functional and cost-effective. At its core, it covers:",
    "When these functions are handled together, in a coordinated way, a fleet stops being a collection of individual vehicle problems and starts operating as a single, manageable system.",
  ],
  offerCards: [
    {
      icon: "ClipboardList",
      title: "Vehicle Scheduling",
      text: "Ensuring the right vehicle is available at the right time for the right purpose, without gaps or overlaps in usage.",
    },
    {
      icon: "Users",
      title: "Driver Coordination",
      text: "Matching drivers to vehicles and routes, managing availability, and keeping communication clear between drivers and the business.",
    },
    {
      icon: "Wrench",
      title: "Preventive Maintenance",
      text: "Servicing vehicles on a planned schedule rather than waiting for problems to surface, which reduces breakdowns and extends vehicle life.",
    },
    {
      icon: "Route",
      title: "Route Planning",
      text: "Organising routes to reduce travel time, avoid unnecessary mileage, and keep operations predictable.",
    },
    {
      icon: "Radar",
      title: "Vehicle Tracking",
      text: "Maintaining visibility over where vehicles are and how they're being used, which supports both accountability and planning.",
    },
    {
      icon: "Fuel",
      title: "Fuel Monitoring",
      text: "Keeping track of fuel consumption patterns to identify inefficiencies and control one of the largest recurring costs in fleet operations.",
    },
    {
      icon: "FileText",
      title: "Documentation Management",
      text: "Keeping insurance, permits, registration, and compliance paperwork organised and up to date, so nothing lapses unnoticed.",
    },
    {
      icon: "Cog",
      title: "Fleet Operations Support",
      text: "General day-to-day coordination that ties all of the above together, so the business doesn't have to manage each piece separately.",
    },
  ],
  routeEyebrow: "Common Challenges",
  routeHeadingMain: "Why Businesses Struggle to",
  routeHeadingAccent: "Manage Fleets Internally.",
  routeParagraphs: [
    "Most businesses don't set out to build a transportation department — vehicles are usually added incrementally as operational needs grow. A company might start with two or three vehicles and, over time, find itself managing a dozen or more, each with its own maintenance history, driver assignments, and documentation requirements.",
    "Without a structured approach, several problems tend to surface:",
  ],
  routeIssues: [
    { icon: "Wrench", text: "Maintenance gets delayed until a vehicle actually breaks down, leading to unplanned downtime." },
    { icon: "Gauge", text: "Vehicle usage becomes uneven, with some vehicles overused and others underutilised." },
    { icon: "Users", text: "Driver schedules conflict with business needs, causing delays." },
    { icon: "Fuel", text: "Fuel costs rise without a clear explanation, because consumption isn't being tracked systematically." },
    { icon: "FileText", text: "Documentation is scattered across departments or individuals, increasing the risk of compliance issues." },
    { icon: "Clock", text: "Internal staff spend time on vehicle logistics instead of their primary responsibilities." },
  ],
  routeClosing:
    "Individually, these issues might seem minor. Together, they add up to real operational and financial inefficiency — and they tend to worsen as a fleet grows.",
  routeSteps: [
    { step: "01", title: "Delayed Maintenance", icon: "Wrench" },
    { step: "02", title: "Uneven Vehicle Usage", icon: "Gauge" },
    { step: "03", title: "Driver Schedule Conflicts", icon: "Users" },
    { step: "04", title: "Rising Fuel Costs", icon: "Fuel" },
    { step: "05", title: "Scattered Documentation", icon: "FileText" },
    { step: "06", title: "Diverted Staff Time", icon: "Clock" },
  ],
  safetyEyebrow: "Why It Matters",
  safetyHeadingMain: "The Business Case for",
  safetyHeadingAccent: "Corporate Fleet Management.",
  safetyDescription:
    "Corporate fleet management addresses these issues by centralising responsibility for fleet operations under a structured, ongoing process rather than leaving it to ad hoc internal handling. The benefits extend across several areas of the business:",
  safetyCards: [
    {
      icon: "Users",
      title: "Reduced Operational Workload",
      text: "When vehicle scheduling, maintenance tracking, and driver coordination are handled externally, internal teams are freed up to focus on their actual roles instead of managing transportation logistics.",
    },
    {
      icon: "Wallet",
      title: "Better Cost Control",
      text: "Preventive maintenance reduces the likelihood of expensive emergency repairs. Fuel monitoring highlights inefficient usage patterns. Organised scheduling reduces idle time and unnecessary vehicle deployment — all of which contribute to more predictable, controlled costs.",
    },
    {
      icon: "Gauge",
      title: "Improved Vehicle Utilisation",
      text: "With clear visibility into which vehicles are being used, how often, and for what purpose, businesses can make informed decisions about fleet size and allocation, rather than over- or under-investing in vehicles.",
    },
    {
      icon: "ShieldCheck",
      title: "Fewer Disruptions",
      text: "Vehicles that are properly maintained and scheduled are less likely to cause delays. This matters particularly for businesses where transportation directly supports operations — logistics companies moving goods, hospitals transporting patients or supplies, and corporates managing employee transport.",
    },
    {
      icon: "FileCheck2",
      title: "Stronger Compliance and Documentation",
      text: "Keeping permits, insurance, and registration up to date across an entire fleet is easy to overlook when handled informally. A structured approach keeps this information organised and accessible.",
    },
  ],
  techEyebrow: "Daily Operations",
  techHeadingMain: "How Fleet Management Solutions",
  techHeadingAccent: "Fit Into Daily Operations.",
  techParagraphs: [
    "A practical fleet management solution works alongside a business's existing operations rather than requiring it to restructure how it works. Vehicle scheduling is planned around actual business requirements. Drivers are coordinated based on availability and route needs. Maintenance is scheduled proactively, based on usage and service intervals, rather than left until a vehicle needs urgent repair. Route planning is adjusted based on operational priorities, whether that's minimising delay, reducing distance, or accommodating multiple stops.",
    "Vehicle tracking and fuel monitoring provide ongoing visibility, giving businesses a clearer picture of how their fleet is actually being used — information that's difficult to gather consistently through informal, in-house tracking. Documentation is maintained on an ongoing basis, so compliance doesn't become a periodic scramble.",
    "The result is a fleet that functions predictably: vehicles are available when needed, maintenance doesn't cause unexpected disruptions, and the business has clear oversight of its transportation operations without having to manage each element separately.",
  ],
  techFeatures: [
    { icon: "ClipboardList", label: "Vehicle Scheduling" },
    { icon: "Wrench", label: "Proactive Maintenance" },
    { icon: "Route", label: "Route Planning" },
    { icon: "Radar", label: "Tracking & Fuel Monitoring" },
    { icon: "FileText", label: "Ongoing Documentation" },
  ],
  techImage:
    "https://vitalglowgps.com/cdn/shop/articles/node-n_412b4s6n_17cb7cce-2db8-48bd-99f7-0ee28b502dd4.png?v=1780563505&width=1200",
  benefitsEyebrow: "Who We Serve",
  benefitsHeadingMain: "Who Needs",
  benefitsHeadingAccent: "Fleet Management Services.",
  benefitsDescription:
    "Fleet management services are relevant to any organisation operating more than a handful of vehicles, but the need becomes particularly pronounced in certain sectors:",
  benefits: [
    {
      icon: "Building2",
      title: "IT Companies and Corporates",
      text: "IT companies and corporates often manage employee transport, shuttle services, or executive vehicles across multiple shifts and locations. Coordinating this internally, alongside core business functions, is rarely an efficient use of internal resources.",
    },
    {
      icon: "Truck",
      title: "Logistics Companies",
      text: "Logistics companies depend on vehicle availability and route efficiency as a direct extension of their service quality. Downtime or poor route planning has immediate operational consequences.",
    },
    {
      icon: "HeartPulse",
      title: "Hospitals and Healthcare Institutions",
      text: "Hospitals and healthcare institutions rely on vehicles for patient transport, staff movement, and supply logistics, where reliability and scheduling accuracy are not optional.",
    },
    {
      icon: "GraduationCap",
      title: "Educational and Other Institutions",
      text: "Educational and other institutions managing transport for staff, students, or operations benefit from having vehicle scheduling and maintenance handled by a team focused specifically on that responsibility.",
    },
  ],
  benefitsClosing:
    "Across all of these sectors, the common thread is the same: transportation supports the core business, but it isn't the core business. Handing over fleet operations to a dedicated provider allows organisations to keep transportation reliable without diverting attention from what they actually do.",
  whyEyebrow: "Partnering Up",
  whyHeadingMain: "Working With a",
  whyHeadingAccent: "Fleet Management Company.",
  whyParagraphs: [
    "Partnering with a fleet management company means shifting the day-to-day responsibility of fleet operations to a team that focuses on exactly that. Rather than distributing vehicle-related tasks across administrative staff, operations teams, or individual departments, businesses gain a single point of coordination for scheduling, maintenance, driver management, and documentation.",
    "This structure is particularly valuable for organisations managing multiple vehicles across different locations or use cases, where informal coordination becomes increasingly difficult to sustain as the fleet grows.",
  ],
  whyHighlight:
    "A dedicated fleet management partner brings consistency to these processes, helping businesses avoid the gradual accumulation of small inefficiencies that come with managing vehicles reactively.",
  whyImage:
    "https://media.istockphoto.com/id/182913362/photo/travel-coaches-at-tourist-destination-parked-in-a-row.jpg?s=612x612&w=0&k=20&c=WydkBjrqbYQKAITmQ9oEWzwzsQbQhp15OCOiSTgqj-g=",
  talkEyebrow: "",
  talkHeadingMain: "Get Organised Fleet Support",
  talkHeadingAccent: "With Acciva Travels",
  talkParagraphs: [
    "Managing a fleet involves far more than keeping vehicles on the road — it requires consistent scheduling, proactive maintenance, coordinated drivers, and organised documentation to keep operations running without disruption. For businesses, corporates, logistics providers, hospitals, and institutions managing multiple vehicles, professional fleet management support can reduce operational strain and bring structure to day-to-day transportation.",
    "If your organisation is looking to bring more organisation and control to its vehicle fleet, get in touch with Acciva Travels to discuss your fleet management requirements and find an approach that fits your operational needs.",
  ],
  talkButtonText: "Talk to Acciva Travels",
  talkButtonLink: "/contact",
};

// 3D tilt card — same motif used across Services/About pages.
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
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none origin-top-right"
        style={{ background: glowColor }}
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-0.5 origin-top pointer-events-none"
        style={{ background: accentGlow }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      {children}
    </motion.div>
  );
};

// Section heading — description accepts a string or an array of paragraphs
// (rendered verbatim, one <p> per source paragraph) and can span the full
// container width via `descriptionClassName`.
const SectionHeading = ({
  eyebrow,
  title,
  italicTitle,
  description,
  center,
  descriptionClassName = "max-w-3xl",
}) => {
  const paragraphs = Array.isArray(description) ? description : description ? [description] : [];
  return (
    <div className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}
      >
        {eyebrow && <span className="eyebrow text-teal">{eyebrow}</span>}
        <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
          {title}{" "}
          {italicTitle && <span className="italic text-teal font-normal">{italicTitle}</span>}
        </h2>
      </motion.div>
      {paragraphs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`mt-5 space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed ${
            center ? "mx-auto" : ""
          } ${descriptionClassName}`}
        >
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Horizontal timeline — same motif and layout as the Technology page's "How
// It Works" process timeline (connecting line with a traveling comet,
// numbered icon tiles arranged in a responsive row). Generalized to any
// step count so it can also carry a longer list of items.
const RouteStepsTimeline = ({ steps }) => {
  const [active, setActive] = useState(0);
  const total = steps.length;
  const inset = `${50 / total}%`;

  return (
    <div className="relative">
      <div
        className="hidden lg:block absolute top-9 h-px bg-navy/10 overflow-visible"
        style={{ left: inset, right: inset }}
      >
        <motion.div
          className="h-full bg-linear-to-r from-teal via-sand to-teal origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(59,141,196,0.55)]"
          animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          onUpdate={(latest) => {
            const pct = parseFloat(latest.left);
            if (Number.isNaN(pct)) return;
            const step = Math.min(total - 1, Math.max(0, Math.round((pct / 100) * (total - 1))));
            setActive((prev) => (prev === step ? prev : step));
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: "easeInOut",
            times: [0, 0.1, 0.9, 1],
          }}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
        {steps.map((s, idx) => {
          const StepIcon = resolveIcon(s.icon);
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-start lg:items-center lg:text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: idx * 0.15 + 0.1,
                }}
                className={`w-[72px] h-[72px] rounded-2xl border-2 shadow-md flex items-center justify-center relative z-10 mb-5 transition-colors duration-500 ${
                  active === idx ? "bg-sand/25 border-sand text-navy" : "bg-white border-teal/30 text-teal"
                }`}
              >
                <motion.span
                  className="absolute inset-0 rounded-2xl border-2 border-teal/40"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.3,
                  }}
                />
                <StepIcon size={26} />
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 12,
                    delay: idx * 0.15 + 0.35,
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-ivory text-[10px] font-mono font-bold flex items-center justify-center"
                >
                  {s.step}
                </motion.span>
              </motion.div>
              <h4 className="font-display text-lg font-bold text-navy">{s.title}</h4>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Safety-style cards — same stair-step card, gradient path, and
// traveling-ball motif as the Services page's "Trust & Compliance" section.
// Tones/offsets cycle via modulo so the row also reads well with more than
// three cards.
const SAFETY_TONES = ["teal", "sand", "teal"];
const SAFETY_OFFSETS = ["lg:mt-0", "lg:mt-18", "lg:mt-36"];

const SafetyCard = ({ card, isActive, iconRef }) => {
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
          ref={iconRef}
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
          {(() => {
            const CardIcon = resolveIcon(card.icon);
            return <CardIcon size={24} className="stroke-[1.75] relative z-10" />;
          })()}
        </div>
        <h3 className="font-display text-navy text-lg font-bold leading-snug">{card.title}</h3>
        <p className="text-slate-600 text-[13px] leading-relaxed mt-2">{card.text}</p>
      </div>
    </motion.div>
  );
};

// Builds a smooth S-curve path through a set of real pixel points (one per
// card), so consecutive cards are joined by the same "C midX,y0 midX,y1 x1,y1"
// motif used elsewhere on the site.
function buildSmoothPath(pts) {
  if (!pts.length) return "";
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const midX = (p0.x + p1.x) / 2;
    d += ` C ${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;
  }
  return d;
}

// The connecting line and traveling ball are measured live from each card's
// icon badge (via ResizeObserver) rather than a fixed formula, so they stay
// aligned with the actual cards regardless of card count, wrapped rows, or
// text-driven height changes.
const SafetyCardsRow = ({ cards }) => {
  const [active, setActive] = useState(-1);
  const [points, setPoints] = useState([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const measure = () => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const nextPoints = iconRefs.current
      .filter(Boolean)
      .map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      });
    setPoints(nextPoints);
    setSize({ width: containerRect.width, height: containerRect.height });
  };

  useLayoutEffect(() => {
    measure();
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => measure());
    observer.observe(container);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length]);

  const pathD = buildSmoothPath(points);

  return (
    <div ref={containerRef} className="relative pb-6">
      {points.length === cards.length && size.width > 0 && (
        <svg
          viewBox={`0 0 ${size.width} ${size.height}`}
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          <defs>
            <linearGradient id="fmsSafetyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b8dc4" />
              <stop offset="50%" stopColor="#e1c59d" />
              <stop offset="100%" stopColor="#3b8dc4" />
            </linearGradient>
          </defs>
          <motion.path
            key={pathD}
            d={pathD}
            fill="none"
            stroke="url(#fmsSafetyLineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2 + cards.length * 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            key={`ball-${pathD}`}
            r="6"
            fill="#3b8dc4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            animate={{ cx: points.map((p) => p.x), cy: points.map((p) => p.y) }}
            onUpdate={(latest) => {
              const curX = typeof latest.cx === "number" ? latest.cx : parseFloat(latest.cx);
              const curY = typeof latest.cy === "number" ? latest.cy : parseFloat(latest.cy);
              let bestIdx = 0;
              let bestDist = Infinity;
              points.forEach((p, idx) => {
                const dist = (p.x - curX) ** 2 + (p.y - curY) ** 2;
                if (dist < bestDist) {
                  bestDist = dist;
                  bestIdx = idx;
                }
              });
              setActive((prev) => (prev === bestIdx ? prev : bestIdx));
            }}
            transition={{
              duration: Math.max(3.2, cards.length * 1.2),
              repeat: Infinity,
              repeatDelay: 0.8,
              delay: 1.1,
              ease: "easeInOut",
            }}
            style={{ filter: "drop-shadow(0 0 8px rgba(59,141,196,0.7))" }}
          />
        </svg>
      )}

      <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            onAnimationComplete={measure}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={SAFETY_OFFSETS[i % SAFETY_OFFSETS.length]}
          >
            <SafetyCard
              card={{ ...card, tone: SAFETY_TONES[i % SAFETY_TONES.length] }}
              isActive={active === i}
              iconRef={(el) => {
                iconRefs.current[i] = el;
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// GPS Tracking & Technology-style feature chips.
const TECH_TONES = ["teal", "sand", "teal"];

const TechFeatureRow = ({ features, center = false }) => {
  const [active, setActive] = useState(-1);
  const total = features.length;
  const inset = `${50 / total}%`;

  return (
    <div className="relative pt-4">
      <div
        className="hidden sm:block absolute top-8 h-px bg-navy/10 overflow-visible pointer-events-none z-0"
        style={{ left: inset, right: inset }}
      >
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
          whileInView={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
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

      <div className={`flex flex-wrap gap-3 relative z-10 ${center ? "justify-center" : ""}`}>
        {features.map((item, i) => {
          const ItemIcon = resolveIcon(item.icon);
          const isActive = active === i;
          const isSand = TECH_TONES[i % TECH_TONES.length] === "sand";
          const glow = isSand ? "rgba(225,197,157,0.6)" : "rgba(59,141,196,0.4)";
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
                <ItemIcon size={15} className="relative z-10" />
              </span>
              <span
                className={`text-[13px] font-semibold ${isSand ? "text-[#a3843f]" : "text-navy"}`}
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

const FleetManagementServices = () => {
  const { data: content } = usePageContent(
    "fleet-management-services",
    FMS_DEFAULTS
  );

  return (
    <div className="bg-soft text-navy overflow-hidden">
      <Seo
        title="Fleet Management Services"
        description="Professional fleet management services for businesses — vehicle scheduling, driver coordination, preventive maintenance, route planning, tracking, and documentation support."
        canonical="https://www.accivatravels.com/services/fleet-management-services"
      />

      {/* ========================================================================= */}
      {/* SUBPAGE HEADER — SAME HERO TREATMENT AS THE SERVICES PAGE            */}
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
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        <div className="container-px relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider">
            <NavLink
              to="/"
              className="hover:text-teal transition-colors text-navy/70 font-bold"
            >
              Home
            </NavLink>
            <ChevronRight size={12} />
            <NavLink
              to="/services"
              className="hover:text-teal transition-colors text-navy/70 font-bold"
            >
              Services
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">
              Fleet Management Service
            </span>
          </div>

          <div className="gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl"
            >
              <span className="eyebrow text-teal">{content.heroEyebrow}</span>
              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.08] mt-6 tracking-tight">
                {content.heroTitleMain}{" "}
                <span className="italic text-teal font-normal">
                  {content.heroTitleAccent}
                </span>{" "}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTRODUCTION                                                          */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/10 rounded-bl-full pointer-events-none" />
        <div className="container-px relative z-10 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="eyebrow text-teal">
              {content.introEyebrow}
            </span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
              {content.introHeadingMain}{" "}
              <span className="italic text-teal font-normal">
                {content.introHeadingAccent}
              </span>
            </h2>
          </motion.div>

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
                  alt="Acciva Travels fleet management service"
                  effect="zoom-out"
                  eager
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
              {content.introParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHAT FLEET MANAGEMENT ACTUALLY INVOLVES                              */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-10"
          >
            <span className="eyebrow text-teal">{content.offerEyebrow}</span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
              {content.offerHeadingMain}{" "}
              <span className="italic text-teal font-normal">{content.offerHeadingAccent}</span>
            </h2>
            {content.offerParagraphs?.[0] && (
              <p className="mt-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                {content.offerParagraphs[0]}
              </p>
            )}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {content.offerCards.map((card, i) => {
              const CardIcon = resolveIcon(card.icon);
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (i % 4) * 0.1,
                  }}
                  style={{ transformPerspective: 1200 }}
                >
                  <TiltCard
                    glowColor={
                      i % 2 === 0 ? "rgba(59,141,196,0.25)" : "rgba(225,197,157,0.3)"
                    }
                    accentGlow={
                      i % 2 === 0 ? "rgba(59,141,196,0.4)" : "rgba(225,197,157,0.6)"
                    }
                    className={`p-5 sm:p-6 rounded-3xl bg-white border-2 shadow-lg cursor-default h-full overflow-hidden ${
                      i % 2 === 0 ? "border-teal/25" : "border-sand/30"
                    }`}
                  >
                    <div
                      style={{
                        transform: "translateZ(25px)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner mb-4 ${
                          i % 2 === 0
                            ? "bg-teal/10 text-teal"
                            : "bg-sand/20 text-navy"
                        }`}
                      >
                        <CardIcon size={22} />
                      </div>
                      <h3 className="font-display text-base sm:text-lg text-navy font-bold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[14px] text-slate-700 leading-relaxed font-normal">
                        {card.text}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          {content.offerParagraphs?.[1] && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-none w-full text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              {content.offerParagraphs[1]}
            </motion.p>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY BUSINESSES STRUGGLE TO MANAGE FLEETS INTERNALLY (TIMELINE)       */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/10 rounded-tr-full pointer-events-none" />
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.routeEyebrow}
            title={content.routeHeadingMain}
            italicTitle={content.routeHeadingAccent}
            description={content.routeParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {content.routeIssues.map((issue, i) => {
              const IssueIcon = resolveIcon(issue.icon);
              return (
                <motion.div
                  key={issue.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-navy/10 shadow-[0_10px_25px_rgba(38,55,74,0.05)]"
                >
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                    <IssueIcon size={17} />
                  </span>
                  <p className="text-slate-700 text-[14px] leading-relaxed font-normal pt-1.5">
                    {issue.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {content.routeClosing && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-none w-full text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              {content.routeClosing}
            </motion.p>
          )}

          <div className="mt-10">
            <RouteStepsTimeline steps={content.routeSteps} />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* THE BUSINESS CASE FOR CORPORATE FLEET MANAGEMENT                     */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-px">
          <SectionHeading
            eyebrow={content.safetyEyebrow}
            title={content.safetyHeadingMain}
            italicTitle={content.safetyHeadingAccent}
            description={content.safetyDescription}
            descriptionClassName="max-w-none w-full"
          />
          <SafetyCardsRow cards={content.safetyCards} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOW FLEET MANAGEMENT SOLUTIONS FIT INTO DAILY OPERATIONS             */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
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
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-5"
            >
              <span className="eyebrow text-teal">{content.techEyebrow}</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
                {content.techHeadingMain}{" "}
                <span className="italic text-teal font-normal">
                  {content.techHeadingAccent}
                </span>
              </h2>
              <div className="space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed">
                {content.techParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="lg:col-span-5"
            >
              <div className="relative h-full min-h-[240px] rounded-3xl bg-white border border-navy/10 shadow-2xl overflow-hidden group">
                <AnimatedImage
                  src={content.techImage}
                  alt="Fleet tracking and documentation dashboard"
                  effect="zoom-out"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
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
                    Live Fleet Visibility
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-10 w-full p-6 sm:p-8 rounded-3xl bg-white border border-navy/10 shadow-xl"
          >
            <TechFeatureRow features={content.techFeatures} center />
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHO NEEDS FLEET MANAGEMENT SERVICES                                  */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-px">
          <SectionHeading
            eyebrow={content.benefitsEyebrow}
            title={content.benefitsHeadingMain}
            italicTitle={content.benefitsHeadingAccent}
            description={content.benefitsDescription}
            descriptionClassName="max-w-none w-full"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {content.benefits.map((item, i) => {
              const ItemIcon = resolveIcon(item.icon);
              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (i % 3) * 0.1,
                }}
                style={{ transformPerspective: 1200 }}
              >
                <TiltCard
                  glowColor={
                    i % 2 === 0 ? "rgba(59,141,196,0.25)" : "rgba(225,197,157,0.3)"
                  }
                  accentGlow={
                    i % 2 === 0 ? "rgba(59,141,196,0.4)" : "rgba(225,197,157,0.6)"
                  }
                  className={`p-6 sm:p-8 rounded-3xl bg-white border-2 shadow-lg cursor-default h-full overflow-hidden ${
                    i % 2 === 0 ? "border-teal/25" : "border-sand/30"
                  }`}
                >
                  <div
                    style={{
                      transform: "translateZ(25px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner mb-6 ${
                        i % 2 === 0
                          ? "bg-teal/10 text-teal"
                          : "bg-sand/20 text-navy"
                      }`}
                    >
                      <ItemIcon size={26} />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-navy font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-slate-700 leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
              );
            })}
          </div>

          {content.benefitsClosing && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-none w-full text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              {content.benefitsClosing}
            </motion.p>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WORKING WITH A FLEET MANAGEMENT COMPANY                              */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
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

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              {content.whyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
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

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="lg:col-span-5 lg:-mt-20"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-full min-h-[260px] rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group"
              >
                <AnimatedImage
                  src={content.whyImage}
                  alt="Acciva Travels fleet management partner"
                  effect="zoom-out"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <Landmark size={16} />
                  <span className="text-[12px] font-mono uppercase tracking-wider font-semibold">
                    Organised Fleet Operations
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* GET ORGANISED FLEET SUPPORT WITH ACCIVA TRAVELS                      */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-soft">
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
              {content.talkEyebrow && (
                <span className="eyebrow text-teal block mb-3">{content.talkEyebrow}</span>
              )}
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
                {content.talkHeadingMain}{" "}
                <span className="italic text-teal font-normal">
                  {content.talkHeadingAccent}
                </span>
              </h2>
              <div className="mt-5 space-y-3 text-slate-700 text-[15px] font-normal leading-relaxed max-w-2xl mx-auto">
                {content.talkParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
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
    </div>
  );
};

export default FleetManagementServices;
