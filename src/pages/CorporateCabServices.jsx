import { useState } from "react";
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

const CCS_DEFAULTS = {
  heroEyebrow: "Corporate Mobility",
  heroTitleMain: "Acciva Travels: Corporate Employee Transportation Services",
  heroTitleAccent: "Tailored to Your Business Needs",
  heroBackgroundImage:
    "https://images.pexels.com/photos/34985962/pexels-photo-34985962.jpeg?auto=compress&cs=tinysrgb&w=1920",
  introEyebrow: "Introduction",
  introHeadingMain: "Keeping Everyday Operations",
  introHeadingAccent: "On Track.",
  introParagraphs: [
    "For businesses operating across multiple shifts and locations, employee transportation is an important part of keeping everyday operations on track. Late pickups, poorly planned routes, or inconsistent transport arrangements can affect employee punctuality, productivity, and overall work experience.",
    "Acciva Travels provides corporate employee transportation services for companies, IT firms, institutions, and other organizations that need a dependable way to manage staff travel. We work with HR, administration, and operations teams to understand their requirements and put practical transportation arrangements in place based on employee locations, work schedules, and shift timings.",
    "Our role goes beyond arranging vehicles. We help businesses coordinate the day-to-day transportation process so that employees can get to and from work without adding unnecessary pressure to internal teams.",
  ],
  introImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3X_Wak1PB2CWrLV-HNNlB9sU84cQOvJi36YLZfHJnXnVGp8Rxn815_s&s=10",
  offerEyebrow: "What We Offer",
  offerHeadingMain: "Employee Transportation",
  offerHeadingAccent: "Services.",
  offerParagraphs: [
    "Acciva Travels provides employee transportation solutions for organizations with regular or shift-based travel requirements. Services can include daily employee pickup and drop-off, transportation for different work shifts, and arrangements covering multiple employee pickup and drop-off points.",
    "Every organization has a different workforce structure. Some may have employees travelling from several areas, while others may operate early morning, evening, or night shifts. Transportation requirements can also change as employees join, leave, relocate, or change their working hours.",
    "We take these factors into account when planning transportation arrangements, helping businesses maintain a practical system that can adapt to their changing requirements.",
  ],
  offerImage: "https://amazelogistics.com/img/employee-transport-hero.webp",
  routeEyebrow: "Planning & Coordination",
  routeHeadingMain: "Route Planning and",
  routeHeadingAccent: "Transportation Management.",
  routeParagraphs: [
    "An effective employee transportation system starts with understanding where employees live and when they need to travel.",
    "We coordinate with the relevant teams to understand employee locations, shift schedules, pickup requirements, and operational preferences. Based on this information, transportation routes can be planned around the distribution of employees and their working hours.",
    "Well-planned routes can help avoid unnecessary detours, reduce travel time, and make daily pickups more manageable. When employee locations or shift timings change, the transportation plan can also be adjusted accordingly.",
    "This approach allows HR and administration teams to have a more organized transportation system without having to coordinate every individual trip themselves.",
  ],
  routeSteps: [
    { step: "01", title: "Understand Employee Locations", icon: "MapPin" },
    { step: "02", title: "Plan Practical Routes", icon: "Route" },
    { step: "03", title: "Reduce Travel Time", icon: "Gauge" },
    { step: "04", title: "Adjust As Needed", icon: "RefreshCcw" },
  ],
  safetyEyebrow: "Trust & Compliance",
  safetyHeadingMain: "Drivers and",
  safetyHeadingAccent: "Vehicles.",
  safetyDescription:
    "The quality of employee transportation depends on both the vehicles being used and the people operating them.",
  safetyCards: [
    {
      icon: "UserCheck",
      title: "Experienced Drivers & Vehicles",
      text: "Acciva Travels works with experienced drivers and vehicles suitable for corporate transportation requirements. Regular attention to vehicle condition helps ensure that employees have a comfortable and dependable commute.",
    },
    {
      icon: "ShieldCheck",
      title: "Professional Conduct",
      text: "Drivers are expected to maintain professional conduct while transporting employees and follow the agreed routes and schedules.",
    },
    {
      icon: "Wrench",
      title: "Consistent Arrangements",
      text: "For businesses, having a consistent transportation arrangement also means fewer day-to-day uncertainties around employee travel.",
    },
  ],
  techEyebrow: "Smarter Visibility",
  techHeadingMain: "GPS Tracking",
  techHeadingAccent: "& Technology.",
  techParagraphs: [
    "Technology can make corporate transportation easier to monitor and coordinate.",
    "Where GPS-enabled transportation is used, vehicle locations can be monitored during trips, giving the concerned teams better visibility of ongoing journeys. This can also make it easier to communicate with drivers and respond when there are changes or delays.",
    "For HR and administration teams, having access to transportation information can simplify coordination and provide greater visibility into daily employee travel.",
  ],
  techFeatures: [
    { icon: "Radar", label: "GPS Vehicle Tracking" },
    { icon: "Smartphone", label: "Driver Communication" },
    { icon: "Bell", label: "Change & Delay Updates" },
  ],
  techImage:
    "https://vitalglowgps.com/cdn/shop/articles/node-n_412b4s6n_17cb7cce-2db8-48bd-99f7-0ee28b502dd4.png?v=1780563505&width=1200",
  benefitsEyebrow: "Why It Matters",
  benefitsHeadingMain: "Benefits for",
  benefitsHeadingAccent: "Businesses.",
  benefitsDescription:
    "A professionally managed employee transportation system can make a noticeable difference to the way a company handles its daily operations.",
  benefits: [
    {
      icon: "Users",
      title: "Reduced Workload for HR and Administration Teams",
      text: "Managing employee transportation involves more than booking vehicles. Routes, schedules, employee locations, driver coordination, and last-minute changes all require attention. Working with a transportation provider can reduce the amount of daily coordination handled internally.",
    },
    {
      icon: "Clock",
      title: "Better Management of Shift Transportation",
      text: "Companies operating across multiple shifts often have transportation requirements outside conventional office hours. Having a planned system in place makes it easier to coordinate employee travel around different reporting and departure times.",
    },
    {
      icon: "Sparkles",
      title: "Greater Convenience for Employees",
      text: "Reliable pickup and drop arrangements can make the daily commute easier for employees, particularly those working long or irregular shifts.",
    },
    {
      icon: "Layers",
      title: "More Organised Transportation Operations",
      text: "With routes, schedules, and vehicle arrangements planned in advance, companies can have a clearer system for managing employee travel instead of handling transportation requirements on an ad-hoc basis.",
    },
    {
      icon: "RefreshCcw",
      title: "Support for Changing Business Requirements",
      text: "Employee numbers, work locations, and shift patterns can change over time. A flexible transportation arrangement allows companies to make adjustments when their workforce requirements change.",
    },
  ],
  industriesEyebrow: "Who We Serve",
  industriesHeadingMain: "Corporate Transportation for",
  industriesHeadingAccent: "Different Industries.",
  industriesParagraphs: [
    "Employee transportation can be useful across a wide range of businesses and institutions.",
    "Acciva Travels can support transportation requirements for:",
  ],
  industriesChips: [
    { icon: "Cpu", label: "IT & Technology Companies" },
    { icon: "Headset", label: "BPO & KPO Companies" },
    { icon: "Building2", label: "Corporate Offices" },
    { icon: "Factory", label: "Manufacturing & Industrial Businesses" },
    { icon: "HeartPulse", label: "Hospitals & Healthcare Organizations" },
    { icon: "GraduationCap", label: "Educational Institutions" },
    { icon: "ShoppingCart", label: "Retail & Commercial Businesses" },
    { icon: "Clock", label: "Organizations with Shift-Based Employees" },
  ],
  industriesClosing:
    "Whether a company requires regular office transportation or arrangements for employees working at different times, the transportation plan can be developed around its specific operational requirements.",
  whyEyebrow: "Distinct Advantage",
  whyHeadingMain: "Why Choose",
  whyHeadingAccent: "Acciva Travels?",
  whyParagraphs: [
    "Choosing a corporate transportation provider is ultimately about finding a service that fits the way your business operates.",
    "Acciva Travels focuses on understanding the transportation requirements of each organization before putting a service arrangement in place. From employee locations and shift timings to route planning and vehicle coordination, the different parts of the process can be managed as one system.",
    "For businesses, this means having a transportation partner they can work with as their requirements evolve, rather than having to manage every transportation need independently.",
  ],
  whyHighlight:
    "Our approach is centred on clear communication and practical planning. We work with the teams responsible for employee transportation to help keep daily travel organised while reducing the amount of coordination required from within the company.",
  whyImage:
    "https://media.istockphoto.com/id/182913362/photo/travel-coaches-at-tourist-destination-parked-in-a-row.jpg?s=612x612&w=0&k=20&c=WydkBjrqbYQKAITmQ9oEWzwzsQbQhp15OCOiSTgqj-g=",
  talkEyebrow: "",
  talkHeadingMain: "A Corporate Transportation Partner",
  talkHeadingAccent: "You Can Rely On",
  talkParagraphs: [
    "Employee transportation may seem like a small part of business operations, but when hundreds of employees depend on it every day, the way it is managed matters.",
    "A well-organised transportation system can help businesses manage shift schedules, reduce administrative work, and provide employees with a more convenient way to travel to and from work.",
    "Acciva Travels works with businesses to develop employee transportation arrangements that fit their workforce, schedules, and operational needs.",
    "If your company is looking for a corporate transportation partner, get in touch with Acciva Travels to discuss your employee pickup and drop requirements and explore a transportation plan that works for your business.",
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

// Horizontal route-planning timeline — same motif and layout as the
// Technology page's "How It Works" process timeline (connecting line with a
// traveling comet, numbered icon tiles arranged in a responsive row).
const RouteStepsTimeline = ({ steps }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-navy/10 overflow-visible">
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
            const step = Math.min(3, Math.max(0, Math.round((pct / 100) * 3)));
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
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

// Safety cards — same stair-step card, gradient path, and traveling-ball
// motif as the Services page's "Trust & Compliance" section.
const SAFETY_TONES = ["teal", "sand", "teal"];
const SAFETY_OFFSETS = ["lg:mt-0", "lg:mt-18", "lg:mt-36"];

const SafetyCard = ({ card, isActive }) => {
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

const SafetyCardsRow = ({ cards }) => {
  const [active, setActive] = useState(-1);
  const cx = [150, 225, 300, 375, 450, 525, 600, 675, 750];
  const cy = [56, 56, 56, 92, 128, 128, 128, 162, 196];
  const minCx = cx[0];
  const maxCx = cx[cx.length - 1];

  return (
    <div className="relative pb-6">
      <svg
        viewBox="0 0 900 220"
        preserveAspectRatio="none"
        className="hidden lg:block absolute left-0 right-0 top-0 w-full h-[220px] pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="ccsSafetyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b8dc4" />
            <stop offset="50%" stopColor="#e1c59d" />
            <stop offset="100%" stopColor="#3b8dc4" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 150,56 C 300,56 300,128 450,128 C 600,128 600,196 750,196"
          fill="none"
          stroke="url(#ccsSafetyLineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
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
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={SAFETY_OFFSETS[i % SAFETY_OFFSETS.length]}
          >
            <SafetyCard
              card={{ ...card, tone: SAFETY_TONES[i % SAFETY_TONES.length] }}
              isActive={active === i}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// GPS Tracking & Technology feature chips.
const TECH_TONES = ["teal", "sand", "teal"];

const TechFeatureRow = ({ features }) => {
  const [active, setActive] = useState(-1);
  const total = features.length;

  return (
    <div className="relative pt-4">
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

      <div className="flex flex-wrap lg:flex-nowrap gap-3 relative z-10">
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
              className={`relative inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-white border-2 transition-colors duration-300 overflow-hidden shrink-0 lg:whitespace-nowrap ${
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

// Industry chips — same rounded-pill badge motif as the tech feature row,
// scrolling as an infinite marquee (same `animate-marquee-left` motif used
// by the Industries and LiveTicker sections elsewhere on the site) since the
// list represents parallel options rather than sequential steps.
const IndustryChipsRow = ({ chips }) => {
  const loopChips = [...chips, ...chips];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-linear-to-r from-soft to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-linear-to-l from-soft to-transparent z-10 pointer-events-none" />

      <div className="flex gap-3 whitespace-nowrap will-change-transform animate-marquee-left">
        {loopChips.map((item, i) => {
          const ItemIcon = resolveIcon(item.icon);
          const isSand = i % 2 === 1;
          return (
            <div
              key={i}
              className={`inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-white border-2 shadow-[0_10px_25px_rgba(38,55,74,0.05)] transition-colors duration-300 shrink-0 ${
                isSand ? "border-sand/40 hover:border-sand/70" : "border-teal/25 hover:border-teal/50"
              }`}
            >
              <span
                className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                  isSand ? "bg-sand/25 text-navy" : "bg-teal/10 text-teal"
                }`}
              >
                <ItemIcon size={15} />
              </span>
              <span className={`text-[13px] font-semibold ${isSand ? "text-[#a3843f]" : "text-navy"}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CorporateCabServices = () => {
  const { data: content } = usePageContent("corporate-cab-services", CCS_DEFAULTS);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      <Seo
        title="Corporate Cab Services"
        description="Corporate cab and employee transportation services tailored to your business needs — shift-based scheduling, route planning, GPS tracking, and verified drivers."
        canonical="https://www.accivatravels.com/services/corporate-cab-services"
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
              Corporate Cab Services
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
                  alt="Acciva Travels corporate cab service"
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
      {/* EMPLOYEE TRANSPORTATION SERVICES (OFFERINGS)                         */}
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
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              {content.offerParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-[260px] sm:h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group"
              >
                <AnimatedImage
                  src={content.offerImage}
                  alt="Employee transportation services"
                  effect="zoom-out"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ROUTE PLANNING AND TRANSPORTATION MANAGEMENT (HORIZONTAL TIMELINE)   */}
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

          <div className="mt-4">
            <RouteStepsTimeline steps={content.routeSteps} />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DRIVERS AND VEHICLES                                                 */}
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
      {/* GPS TRACKING AND TECHNOLOGY                                          */}
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
                <span className="italic text-teal font-normal">
                  {content.techHeadingAccent}
                </span>
              </h2>
              <div className="space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed">
                {content.techParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <TechFeatureRow features={content.techFeatures} />
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
              className="lg:col-span-6"
            >
              <div className="relative h-[240px] sm:h-[280px] rounded-3xl bg-white border border-navy/10 shadow-2xl overflow-hidden group">
                <AnimatedImage
                  src={content.techImage}
                  alt="GPS tracking for corporate cab services"
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
                    Live Tracking
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BENEFITS FOR BUSINESSES                                              */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-px">
          <SectionHeading
            eyebrow={content.benefitsEyebrow}
            title={content.benefitsHeadingMain}
            italicTitle={content.benefitsHeadingAccent}
            description={content.benefitsDescription}
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
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CORPORATE TRANSPORTATION FOR DIFFERENT INDUSTRIES                    */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-sand/10 rounded-br-full pointer-events-none" />
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.industriesEyebrow}
            title={content.industriesHeadingMain}
            italicTitle={content.industriesHeadingAccent}
            description={content.industriesParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <IndustryChipsRow chips={content.industriesChips} />

          {content.industriesClosing && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-none w-full text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              {content.industriesClosing}
            </motion.p>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY CHOOSE ACCIVA TRAVELS?                                           */}
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
                  alt="Acciva Travels corporate cab fleet"
                  effect="zoom-out"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <Landmark size={16} />
                  <span className="text-[12px] font-mono uppercase tracking-wider font-semibold">
                    Enterprise-Grade Transportation
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* A CORPORATE TRANSPORTATION PARTNER YOU CAN RELY ON                   */}
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

export default CorporateCabServices;
