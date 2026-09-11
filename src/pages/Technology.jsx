import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Magnetic from "../components/Magnetic";
import AnimatedImage from "../components/AnimatedImage";
import SmartLink from "../components/SmartLink";
import { usePageContent } from "../data/useContent";
import { resolveIcon } from "../data/iconMap";

const TECHNOLOGY_DEFAULTS = {
  heroEyebrow: "Employee Management Solutions",
  heroTitleMain: "Automate Every Mile Of Employee",
  heroTitleAccent: "Transportation.",
  heroIntro:
    "Acciva's state of the art technology is an automation platform for employee transportation that automates everything: rostering, routing, deployment, live tracking, paperless automated billing, and e-trip sheets.",
  heroBackgroundImage:
    "https://static.vecteezy.com/system/resources/thumbnails/036/470/491/small/ai-generated-circuit-board-background-electronic-computer-hardware-technology-ai-generative-photo.jpg",
  featuresEyebrow: "Our Features",
  featuresHeadingMain: "Corporate Transportation &",
  featuresHeadingAccent: "Mobility Solutions",
  featuresParagraphs: [
    "Acciva Travels is a professionally managed corporate transportation and mobility company providing dependable, safe and efficient transportation solutions for businesses. We go beyond simply providing vehicles by managing the complete transportation process-from vehicle and driver coordination to trip management, technology, safety, reporting and customer support.",
    "Our integrated approach helps businesses simplify their employee transportation and corporate mobility operations, improve efficiency and deliver a smoother travel experience for employees and organizations. With a strong focus on reliability, safety, operational efficiency and customer satisfaction, Acciva Travels supports businesses with transportation solutions designed to meet their evolving mobility requirements.",
  ],
  featuresClosingParagraph:
    "At Acciva Travels, we combine people, vehicles, technology and transportation expertise to create reliable corporate mobility solutions that businesses can depend on every day.",
  featuresButtonText: "Book Now",
  featuresButtonLink: "/contact",
  serviceMarquee: [
    { icon: "Smartphone", label: "Corporate employee transportation" },
    { icon: "Server", label: "Fleet and vehicle management" },
    { icon: "Navigation", label: "Professional driver coordination" },
    { icon: "Layers", label: "Employee trip and route management" },
    { icon: "Cpu", label: "Transportation technology solutions" },
    { icon: "ShieldCheck", label: "Safety and compliance management" },
    { icon: "Gauge", label: "Transportation reporting and monitoring" },
    { icon: "Sparkles", label: "Dedicated customer support" },
  ],
  pillarsEyebrow: "Technology Pillars",
  pillarsHeadingMain: "Six Pillars Powering",
  pillarsHeadingAccent: "Every Trip.",
  pillarsParagraph:
    "Safety, cost efficiency, paperless workflows, live tracking, analytics and platform reliability — six interlocking systems working together behind every trip you book.",
  pillars: [
    {
      category: "Safety & Security",
      title: "Your Safety, Our Priority",
      tag: "Real-time protection. Rapid response.",
      icon: "ShieldCheck",
      badge: "Real-Time Protection",
      description:
        "Acciva combines real-time monitoring, centralized security and automated safe-drop confirmation to ensure a safer journey. In emergency situations, our system enables a rapid response within 60 seconds.",
      keywords: ["Real-Time Monitoring", "Safe-Drop Confirmation", "Emergency Response"],
      image:
        "https://driveclick.cy/images/cache/blogfull/89654/BVOM07avum0KkEhg.png",
    },
    {
      category: "Efficient & Cost-Effective",
      title: "More Efficiency. Lower Costs.",
      tag: "Smarter operations. Greater value.",
      icon: "Gauge",
      badge: "Smarter Operations",
      description:
        "Acciva optimizes fleet and manpower utilization through smart technology, helping businesses reduce operational costs, improve efficiency and get more value from their transportation operations.",
      keywords: ["Fleet Optimization", "Resource Utilization", "Cost Efficiency"],
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Paperless Documentation",
      title: "Go Digital. Go Paperless.",
      tag: "Less paperwork. More efficiency.",
      icon: "FileCode2",
      badge: "Paperless",
      description:
        "Acciva's automated billing and e-trip sheets eliminate paper-based processes, simplifying transportation management while reducing administrative effort and supporting a more sustainable operation.",
      keywords: ["Automated Billing", "E-Trip Sheets", "Reduced Paperwork"],
      image:
        "https://www.certum.eu/en/wp-content/uploads/2022/05/GettyImages-1349390515-1-1024x683.jpg",
    },
    {
      category: "Vehicle Tracking",
      title: "Know Where Every Ride Is",
      tag: "Real-time visibility. Better control.",
      icon: "Navigation",
      badge: "Live Visibility",
      description:
        "Acciva's live vehicle tracking provides complete visibility of every journey, helping businesses monitor trips, improve coordination and respond quickly to delays or unexpected situations.",
      keywords: ["Live Tracking", "Smart Rostering", "Trip Feedback"],
      image:
        "https://v3smarttech.com/wp-content/uploads/2022/10/Improve-your-fuel-efficiency-with-a-GPS-tracking-system.png",
    },
    {
      category: "Analytics & Reporting",
      title: "Turn Data Into Decisions",
      tag: "Clear insights. Smarter operations.",
      icon: "Layers",
      badge: "Clear Insights",
      description:
        "Acciva transforms transportation data into actionable insights through customized reports and intuitive dashboards, helping businesses monitor performance, control costs and optimize operations.",
      keywords: ["Custom Reports", "Performance Insights", "Data-Driven Decisions"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Robust Technology",
      title: "Technology That Moves Business",
      tag: "Smarter technology. Stronger operations.",
      icon: "Cpu",
      badge: "Smart Technology",
      description:
        "Acciva's scalable technology platform simplifies transportation management through intelligent routing, automation and real-time data—helping businesses improve efficiency and maintain greater operational control.",
      keywords: ["Intelligent Routing", "Automation", "Operational Control"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  processHeadingMain: "From Onboarding To",
  processHeadingAccent: "Every Mile Tracked.",
  processSteps: [
    { step: "01", title: "Onboard & Configure", icon: "Layers" },
    { step: "02", title: "Roster & Route", icon: "Navigation" },
    { step: "03", title: "Track Live", icon: "ShieldCheck" },
    { step: "04", title: "Report & Bill", icon: "Gauge" },
  ],
  bannerHeading: "Safety Transportation Made Easy",
  bannerText: "Feel free to touch with us.",
  bannerButtonText: "Book Now",
  bannerButtonLink: "/contact",
  solutionsEyebrow: "Technology Solutions",
  solutionsHeadingMain: "One Platform.",
  solutionsHeadingAccent: "Three Seamless Experiences.",
  solutionsParagraph:
    "Purpose-built apps for employees, drivers, and transport managers, connected in real time to deliver a smooth, on-time, and safe commute for every enterprise shift.",
  techSolutions: [
    {
      name: "Employee App",
      tag: "For Corporate Employees",
      icon: "Smartphone",
      desc: "Ensures a seamless commute experience for corporate employees with on-time, comfortable, safe travel. Acciva's self-rostering app captures real-time GPS coordinates of employees for more accurate supervision. Employees are notified with relevant trip details such as driver profile, pickup and drop points, and vehicle details.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Driver App",
      tag: "For Drivers",
      icon: "Navigation",
      desc: "Drivers can keep track of trips assigned to them, along with the list of employees and their pickup/drop details, for seamless service. Guided navigation helps drivers reach each employee's pickup point on time and accurately. Drivers can also view their trip incomes, track fuel reimbursements, and see other useful stats.",
      image:
        "https://img.magnific.com/free-photo/young-uber-driver-car-interior_23-2149149653.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Web Application",
      tag: "For Transport Managers",
      icon: "Server",
      desc: "The transport manager can easily manage all employee transportation activities centrally: rostering, booking, ongoing trips, real-time tracking, analysis, and MIS reports. Using the web platform, admins can view the list of all drivers with their current status and other records, and manage every vehicle in the transportation fleet.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    },
  ],
  solutionsButtonText: "Book Now",
  solutionsButtonLink: "/contact",
  ctaEyebrow: "Schedule a Demo",
  ctaHeadingMain: "Ready to Upgrade to Intelligent",
  ctaHeadingAccent: "Corporate Mobility?",
  ctaParagraph:
    "Let our technical mobility consultants audit your current route logistics, calculate potential cost savings, and set up a live Command Tower trial.",
  ctaButtonText: "Book an Enterprise Platform",
  ctaButtonLink: "/contact",
};

const Technology = () => {
  const { data: content } = usePageContent("technology", TECHNOLOGY_DEFAULTS);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroFade = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const [cometStep, setCometStep] = useState(0);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* SUBPAGE HEADER: TECH SHOWCASE HERO (PARALLAX)                        */}
      {/* ========================================================================= */}
      <section
        ref={heroRef}
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            y: heroBgY,
            opacity: heroFade,
            backgroundImage: `url('${content.heroBackgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        {/* Light overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        {/* Floating animated gradient blobs */}
        <motion.div
          className="absolute -top-16 -right-10 w-72 h-72 bg-teal/25 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-sand/25 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        <div className="container-px relative z-10">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider"
          >
            <NavLink
              to="/"
              className="hover:text-teal transition-colors text-navy/70 font-bold"
            >
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Technology</span>
          </motion.div>

          {/* Title & Intro Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">{content.heroEyebrow}</span>

              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                {content.heroTitleMain}{" "}
                <span className="italic text-teal font-normal">{content.heroTitleAccent}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-md text-navy/90 text-[15px] font-medium leading-relaxed pb-2"
            >
              {content.heroIntro}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR FEATURES: CENTERED INTRO + DUAL MARQUEE SHOWCASE                 */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="eyebrow text-teal">{content.featuresEyebrow}</span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
              {content.featuresHeadingMain}{" "}
              <span className="italic text-teal font-normal">
                {content.featuresHeadingAccent}
              </span>
            </h2>
            <div className="text-slate-600 text-[15px] font-normal leading-relaxed mt-5 space-y-4">
              {content.featuresParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <p className="text-navy font-display font-semibold text-lg text-center mt-10 mb-6">
          Our Corporate Transportation Services
        </p>

        {/* Dual-Row Infinite Marquee: Our Corporate Transportation Services */}
        <div className="relative py-8 bg-white border-y border-navy/10">
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          {[0, 1].map((row) => {
            const serviceList = content.serviceMarquee;
            const items =
              row === 0
                ? serviceList
                : [...serviceList.slice(3), ...serviceList.slice(0, 3)];
            return (
              <div
                key={row}
                className={`flex items-center gap-4 whitespace-nowrap will-change-transform mb-4 last:mb-0 ${
                  row === 0 ? "animate-marquee-left" : "animate-marquee-right"
                }`}
              >
                {[...items, ...items].map((item, idx) => {
                  const ItemIcon = resolveIcon(item.icon);
                  const isSand = idx % 2 === 1;
                  return (
                    <div
                      key={idx}
                      style={{ animationDelay: `${(idx % 6) * 0.4}s` }}
                      className={`inline-flex items-center gap-3 px-5 py-3 rounded-full border cursor-default ${
                        isSand
                          ? "animate-pill-glow-sand bg-sand/10 border-sand/60"
                          : "animate-pill-glow bg-teal/5 border-teal/50"
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isSand ? "bg-sand text-navy" : "bg-teal text-white"
                        }`}
                      >
                        <ItemIcon size={14} />
                      </span>
                      <span
                        className={`text-sm font-medium tracking-wide ${
                          isSand ? "text-navy/80" : "text-teal"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-10"
          >
            <p className="text-slate-600 text-[15px] font-normal leading-relaxed">
              {content.featuresClosingParagraph}
            </p>
            <SmartLink
              to={content.featuresButtonLink}
              className="inline-flex items-center gap-3 mt-7 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
            >
              <span>{content.featuresButtonText}</span>
              <ArrowUpRight size={16} />
            </SmartLink>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* THE 6 PILLARS OF ACCIVA TECHNOLOGY (INTERACTIVE EXPLORER)            */}
      {/* ========================================================================= */}
      <section className="pt-8 md:pt-10 pb-16 md:pb-20 bg-soft relative overflow-hidden">
        {/* Ambient background accents */}
        <motion.div
          className="absolute top-1/3 -left-24 w-72 h-72 bg-teal/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-24 w-80 h-80 bg-sand/15 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        <div className="container-px relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="eyebrow text-teal">{content.pillarsEyebrow}</span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
              {content.pillarsHeadingMain}{" "}
              <span className="italic text-teal font-normal">{content.pillarsHeadingAccent}</span>
            </h2>
            <p className="text-slate-700 text-[15px] font-normal mt-4 leading-relaxed">
              {content.pillarsParagraph}
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-7">
            {content.pillars.map((p, idx) => {
              const IconComp = resolveIcon(p.icon);
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white border border-navy/10 shadow-xs hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group grid sm:grid-cols-5"
                >
                  <div
                    className={`sm:col-span-2 relative h-64 sm:h-80 lg:h-88 overflow-hidden ${
                      idx % 2 === 1 ? "sm:order-2" : "sm:order-1"
                    }`}
                  >
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/50 sm:bg-linear-to-r sm:from-navy/20 sm:via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur text-teal flex items-center justify-center shadow-md">
                      <IconComp size={20} />
                    </div>
                    <span className="absolute top-4 right-4 px-3 py-0.5 rounded-full bg-sand/90 text-navy text-[10px] font-mono uppercase tracking-wider font-semibold">
                      {p.badge}
                    </span>
                  </div>

                  <div
                    className={`sm:col-span-3 p-7 sm:p-8 flex flex-col justify-center ${
                      idx % 2 === 1 ? "sm:order-1" : "sm:order-2"
                    }`}
                  >
                    <span className="font-display text-xl sm:text-2xl font-bold text-teal tracking-tight">
                      {p.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy/5 text-navy/60 font-semibold uppercase w-fit mt-3">
                      {p.tag}
                    </span>
                    <h4 className="font-mono text-sm text-navy font-black uppercase tracking-wide mt-3 mb-3">
                      {p.title}
                    </h4>
                    <p className="text-slate-600 text-[15px] font-normal leading-relaxed">
                      {p.description}
                    </p>

                    {/* Keyword strip */}
                    <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-navy/10">
                      {p.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/20 border border-sand/40 text-slate-600 text-[11px] font-mono font-semibold uppercase tracking-wide"
                        >
                          <CheckCircle2 size={12} className="text-sand shrink-0" />
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOW IT WORKS: ANIMATED PROCESS TIMELINE                              */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft relative">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 max-w-2xl"
          >
            <span className="eyebrow text-teal">How It Works</span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
              {content.processHeadingMain}{" "}
              <span className="italic text-teal font-normal">
                {content.processHeadingAccent}
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-navy/10 overflow-visible">
              <motion.div
                className="h-full bg-linear-to-r from-teal via-sand to-teal origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Traveling comet pulse */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(59,141,196,0.55)]"
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                onUpdate={(latest) => {
                  const pct = parseFloat(latest.left);
                  if (Number.isNaN(pct)) return;
                  const step = Math.min(
                    3,
                    Math.max(0, Math.round((pct / 100) * 3)),
                  );
                  setCometStep((prev) => (prev === step ? prev : step));
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
              {content.processSteps.map((s, idx) => {
                const StepIcon = resolveIcon(s.icon);
                return (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
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
                        cometStep === idx
                          ? "bg-sand/25 border-sand text-navy"
                          : "bg-white border-teal/30 text-teal"
                      }`}
                    >
                      <motion.span
                        className="absolute inset-0 rounded-2xl border-2 border-teal/40"
                        animate={{
                          scale: [1, 1.35, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
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
                    <h4 className="font-display text-lg font-bold text-navy mb-2">
                      {s.title}
                    </h4>
                    <p className="text-slate-600 text-[13px] font-normal leading-relaxed lg:max-w-[220px]">
                      {s.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SAFE TRANSPORTATION CTA BANNER                                       */}
      {/* ========================================================================= */}
      <section className="bg-soft py-6 md:py-8">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-sand/40 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-linear-to-bl from-sand/20 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

            <div className="flex items-center gap-4 relative z-10">
              <motion.div
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 rounded-2xl bg-sand/20 text-sand flex items-center justify-center shrink-0"
              >
                <Sparkles size={24} />
              </motion.div>
              <div>
                <h4 className="font-display text-xl sm:text-2xl text-navy font-bold">
                  {content.bannerHeading}
                </h4>
                <p className="text-slate-600 text-[15px] font-normal leading-relaxed mt-0.5">
                  {content.bannerText}
                </p>
              </div>
            </div>

            <Magnetic>
              <SmartLink
                to={content.bannerButtonLink}
                className="shrink-0 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl relative z-10"
              >
                <span>{content.bannerButtonText}</span>
                <ArrowUpRight size={16} />
              </SmartLink>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TECHNOLOGY SOLUTIONS                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft relative overflow-hidden">
        {/* Ambient background accents */}
        <motion.div
          className="absolute top-1/3 -left-24 w-72 h-72 bg-teal/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-24 w-80 h-80 bg-sand/15 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        <div className="container-px relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-2xl"
          >
            <span className="eyebrow text-teal">{content.solutionsEyebrow}</span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
              {content.solutionsHeadingMain}{" "}
              <span className="italic text-teal font-normal">
                {content.solutionsHeadingAccent}
              </span>
            </h2>
            <p className="text-slate-700 text-[15px] font-normal mt-4 leading-relaxed">
              {content.solutionsParagraph}
            </p>
          </motion.div>

          {/* Always-Visible Solution Card Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7"
          >
            {content.techSolutions.map((item, idx) => {
              const ItemIcon = resolveIcon(item.icon);
              return (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl bg-white border border-navy/10 hover:border-teal/40 hover:shadow-[0_30px_70px_rgba(7,26,36,0.12)] transition-[border-color,box-shadow] duration-500 overflow-hidden group relative flex flex-col"
                >
                  {/* Top Glow Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-navy/5">
                    <AnimatedImage
                      src={item.image}
                      alt={item.name}
                      effect="zoom-in"
                      delay={idx * 0.06}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-navy/5 to-transparent" />

                    <span className="absolute top-4 left-4 px-3 py-0.5 rounded-full bg-sand/90 text-navy text-[10px] font-mono uppercase tracking-wider font-semibold">
                      {item.tag}
                    </span>
                    <span className="absolute top-4 right-4 text-xs font-mono text-white/70 font-bold">
                      0{idx + 1}
                    </span>

                    <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur text-teal flex items-center justify-center shadow-md group-hover:bg-navy group-hover:text-sand transition-colors duration-300">
                      <ItemIcon size={19} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="font-display text-lg font-bold text-navy group-hover:text-teal transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-slate-600 text-[13px] leading-relaxed mt-3">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-10 text-center">
            <SmartLink
              to={content.solutionsButtonLink}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
            >
              <span>{content.solutionsButtonText}</span>
              <ArrowUpRight size={16} />
            </SmartLink>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CINEMATIC CLOSING CTA                                                */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-soft text-navy relative overflow-hidden">
        {/* Background Video & Overlays */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-mountains.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-soft/95 via-soft/85 to-soft/95 pointer-events-none" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        {/* Corner quarter-circle accents — same motif as the About page's cards */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-4xl mx-auto">
          <span className="eyebrow text-teal inline-block mb-6">
            {content.ctaEyebrow}
          </span>

          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight mb-6">
            {[
              { text: content.ctaHeadingMain, cls: "" },
              {
                text: content.ctaHeadingAccent,
                cls: "italic text-teal font-normal",
              },
            ].map((line, i) => (
              <span className="line-mask block" key={line.text}>
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

          <p className="text-slate-700 text-[15px] font-normal max-w-xl mx-auto mb-10 leading-relaxed">
            {content.ctaParagraph}
          </p>

          <Magnetic>
            <SmartLink
              to={content.ctaButtonLink}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
            >
              <span>{content.ctaButtonText}</span>
              <ArrowUpRight size={16} />
            </SmartLink>
          </Magnetic>
        </div>
      </section>
    </div>
  );
};

export default Technology;
