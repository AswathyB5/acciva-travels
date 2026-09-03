import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Cpu,
  ShieldCheck,
  Zap,
  Smartphone,
  Navigation,
  Server,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  FileCode2,
  Layers,
  Sparkles,
  Gauge,
} from "lucide-react";
import Magnetic from "../components/Magnetic";
import AnimatedImage from "../components/AnimatedImage";

const techPillars = [
  {
    id: "safety-security",
    title: "Safety and Security",
    tag: "24/7 Protection & Monitoring",
    icon: ShieldCheck,
    badge: "Protected",
    description:
      "Acciva's software provides real time monitoring, centralised to security operations, an automated safe drop confirmation through IVR call and assures response time of less than 60 seconds in any panic situations.",
    metrics: [
      { label: "Panic Response Time", val: "< 60s" },
      { label: "Monitoring", val: "Real-Time" },
      { label: "Drop Confirmation", val: "IVR Call" },
    ],
    features: [
      "Real-time monitoring centralised to security operations",
      "Automated safe-drop confirmation via IVR call",
      "Guaranteed panic-response time of under 60 seconds",
    ],
    image:
      "https://images.unsplash.com/photo-1634743556192-d19f0c69ff3a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "efficient-cost-effective",
    title: "Efficient and Cost Effective",
    tag: "Optimised Operations",
    icon: Gauge,
    badge: "Economical",
    description:
      "It increases transport efficiency by utilising the latest technologies and reduces operation cost by utilising manpower and fleet optimally.",
    metrics: [
      { label: "Efficiency", val: "Optimized" },
      { label: "Operation Cost", val: "Reduced" },
      { label: "Fleet Usage", val: "Optimal" },
    ],
    features: [
      "Increases transport efficiency using the latest technologies",
      "Reduces operational cost through optimal manpower utilisation",
      "Optimal fleet utilisation across every shift",
    ],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "paperless-documentation",
    title: "Paperless Documentation",
    tag: "Eco-Friendly Transport",
    icon: FileCode2,
    badge: "Paper Is Eliminated",
    description:
      "Acciva's automated billing and e-trip sheet eliminates the use of paper to adopt an eco-friendly approach towards transportation.",
    metrics: [
      { label: "Paper Usage", val: "Zero" },
      { label: "Billing", val: "Automated" },
      { label: "Trip Sheets", val: "Digital" },
    ],
    features: [
      "Automated billing removes manual paperwork",
      "Digital e-trip sheets replace paper trip records",
      "Eco-friendly approach to transportation documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "vehicle-tracking",
    title: "Vehicle Tracking",
    tag: "Live GPS Visibility",
    icon: Navigation,
    badge: "Automatic Vehicle Location",
    description:
      "Acciva provides real time information about the ride, easy rostering, live vehicle tracking, and instant trip feedback for employees.",
    metrics: [
      { label: "Tracking", val: "Live GPS" },
      { label: "Rostering", val: "Simplified" },
      { label: "Trip Feedback", val: "Instant" },
    ],
    features: [
      "Real-time ride information for every trip",
      "Easy rostering with live vehicle tracking",
      "Instant trip feedback for employees",
    ],
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "analytics-report",
    title: "Analytics Report",
    tag: "Dashboard Insights",
    icon: Layers,
    badge: "Custom Reports",
    description:
      "Provides analytics reports on the application dashboard, which brings you better insights on various metrics that matter most to your business.",
    metrics: [
      { label: "Reports", val: "Custom" },
      { label: "Dashboard", val: "Built-In" },
      { label: "Insights", val: "Data-Driven" },
    ],
    features: [
      "Analytics reports built directly into the dashboard",
      "Better insight into the metrics that matter most",
      "Custom reporting for business decision-making",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "robust-technology",
    title: "Robust Technology",
    tag: "Scalable & Reliable",
    icon: Cpu,
    badge: "Computer Science",
    description:
      "Acciva's technology stack ensures high scalability and reliability, so you get the right route every time.",
    metrics: [
      { label: "Scalability", val: "High" },
      { label: "Reliability", val: "Assured" },
      { label: "Routing", val: "Optimal" },
    ],
    features: [
      "Technology stack built for high scalability",
      "Reliable performance you can depend on",
      "The right route calculated every time",
    ],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  },
];

const techSolutions = [
  {
    name: "Employee App",
    tag: "For Corporate Employees",
    icon: Smartphone,
    desc: "Ensures a seamless commute experience for corporate employees with on-time, comfortable, safe travel. Acciva's self-rostering app captures real-time GPS coordinates of employees for more accurate supervision. Employees are notified with relevant trip details such as driver profile, pickup and drop points, and vehicle details. Live vehicle tracking shows the assigned vehicle on a map with accurate ETA information, and timely notifications keep employees aware of important events like cab arrival, shift change, or a change of vehicle. Safety is our priority — employees can raise an alarm from the app itself during an emergency.",
  },
  {
    name: "Driver App",
    tag: "For Drivers",
    icon: Navigation,
    desc: "Drivers can keep track of trips assigned to them, along with the list of employees and their pickup/drop details, for seamless service. Guided navigation helps drivers reach each employee's pickup point on time and accurately. Drivers can also view their trip incomes, track fuel reimbursements, and see other useful stats.",
  },
  {
    name: "Web Application",
    tag: "For Transport Managers",
    icon: Server,
    desc: "The transport manager can easily manage all employee transportation activities centrally — rostering, booking, ongoing trips, real-time tracking, analysis, and MIS reports. Using the web platform, admins can view the list of all drivers with their current status, maintain the employee database with trip details and other records, and manage every vehicle in the transportation fleet.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -50 : 50 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Technology = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* 01 — SUBPAGE HEADER: TECH SHOWCASE HERO                                   */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-36 pb-10 md:pb-12 bg-soft relative">
        {/* Subtle Ambient Tech Grid Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs font-mono text-navy/40 mb-6 uppercase tracking-wider"
          >
            <NavLink to="/" className="hover:text-teal transition-colors">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Technology</span>
          </motion.div>

          {/* Title & Intro Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">01 — Employee Management Solutions</span>

              <h1 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.08] mt-6 tracking-tight">
                Automate Every Mile Of <br />
                Employee <span className="italic text-teal font-normal">Transportation.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-md text-navy/75 text-base sm:text-lg font-light leading-relaxed pb-2"
            >
              Acciva's state of the art technology is an automation platform for employee transportation that automates everything — rostering, routing, deployment, live tracking, paperless automated billing, and e-trip sheets.
            </motion.p>
          </div>

          {/* Prominent Header Showcase Image Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 mb-12 group bg-navy/5">
            <AnimatedImage
              src="https://i.pinimg.com/originals/41/72/0b/41720bc2a498f13a0b1056fea62e8777.jpg"
              alt="Acciva Central Command Center and AI Telematics"
              effect="zoom-in"
              eager
              duration={0.9}
              className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Quick Technology Metrics Strip */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: ShieldCheck, val: "< 60s", label: "Panic Response Time", color: "text-navy", grad: "from-teal/20 to-teal/5" },
              { icon: Clock, val: "Real-Time", label: "Security Monitoring", color: "text-teal", grad: "from-sand/25 to-sand/5" },
              { icon: Zap, val: "Optimized", label: "Transport Efficiency", color: "text-navy", grad: "from-teal/20 to-teal/5" },
              { icon: Server, val: "Paperless", label: "Billing & E-Trip Sheet", color: "text-teal", grad: "from-sand/25 to-sand/5" },
            ].map((m, i) => {
              const IconComp = m.icon;
              return (
                <motion.div
                  key={m.label}
                  custom={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4 group relative overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-bl ${m.grad} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`} />
                  <div className="w-11 h-11 rounded-xl bg-teal/10 group-hover:bg-teal group-hover:text-ivory transition-colors flex items-center justify-center text-teal shrink-0 relative z-10">
                    <IconComp size={22} />
                  </div>
                  <div className="relative z-10">
                    <p className={`font-display text-xl sm:text-2xl font-bold ${m.color}`}>
                      {m.val}
                    </p>
                    <p className="text-[11px] font-mono text-navy/50 uppercase mt-0.5">
                      {m.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — THE 4 PILLARS OF ACCIVA TECHNOLOGY (INTERACTIVE EXPLORER)            */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft relative">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <span className="eyebrow text-teal">02 — Our Features</span>
              <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                Our <span className="italic text-teal font-normal">Features.</span>
              </h2>
            </div>
            <p className="text-navy/60 text-sm sm:text-base max-w-md font-light">
              Six pillars of Acciva's automation platform for employee transportation — from rostering and routing to live tracking and paperless billing.
            </p>
          </motion.div>

          {/* Pillar Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
          >
            {techPillars.map((p, idx) => {
              const IconComp = p.icon;
              const isActive = idx === activePillar;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-navy text-ivory border-navy shadow-xl scale-[1.02]"
                      : "bg-white text-navy border-navy/10 hover:border-teal/40 hover:bg-teal/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute top-0 left-0 right-0 h-1 bg-sand"
                    />
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? "bg-sand text-navy" : "bg-navy/5 text-teal"
                      }`}
                    >
                      <IconComp size={18} />
                    </span>
                    <span
                      className={`text-[10px] font-mono tracking-wider uppercase font-semibold ${
                        isActive ? "text-sand" : "text-navy/40"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold line-clamp-1">
                    {p.title.split("&")[0]}
                  </h4>
                  <p
                    className={`text-xs mt-1 ${
                      isActive ? "text-ivory/60" : "text-navy/50"
                    }`}
                  >
                    {p.tag}
                  </p>
                </button>
              );
            })}
          </motion.div>

          {/* Active Pillar Detailed Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white rounded-3xl border border-navy/10 overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-12">
                {/* Left Content Side */}
                <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-0.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-[11px] font-mono uppercase tracking-wider font-semibold">
                        {techPillars[activePillar].badge}
                      </span>
                      <span className="text-xs font-mono text-navy/40 uppercase">
                        {techPillars[activePillar].tag}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-4xl text-navy leading-tight mb-4">
                      {techPillars[activePillar].title}
                    </h3>

                    <p className="text-navy/75 text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {techPillars[activePillar].description}
                    </p>

                    {/* Metrics in active pillar */}
                    <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-soft border border-navy/5 mb-6">
                      {techPillars[activePillar].metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-display text-lg sm:text-2xl text-teal font-bold">
                            {m.val}
                          </p>
                          <p className="text-[11px] font-mono text-navy/50 uppercase mt-0.5">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-3">
                      {techPillars[activePillar].features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3 text-sm text-navy/80">
                          <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                          <span className="font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-navy/10 flex items-center justify-between">
                    <NavLink
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-ivory hover:bg-teal transition-all text-xs font-mono tracking-wider uppercase font-semibold group/btn"
                    >
                      <span>Book Now</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </NavLink>
                  </div>
                </div>

                {/* Right Image Side */}
                <div className="lg:col-span-5 h-full min-h-[340px] bg-navy/5 flex items-center p-6 lg:p-8">
                  <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden group">
                    <motion.img
                      key={activePillar}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 0.85, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      src={techPillars[activePillar].image}
                      alt={techPillars[activePillar].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — SAFE TRANSPORTATION CTA BANNER                                       */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft">
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
              <div className="w-12 h-12 rounded-2xl bg-sand/20 text-sand flex items-center justify-center shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="font-display text-lg text-navy font-bold">
                  Safety Transportation Made Easy
                </h4>
                <p className="text-xs sm:text-sm text-navy/70 font-light mt-0.5">
                  Feel free to touch with us.
                </p>
              </div>
            </div>

            <NavLink
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand text-navy hover:bg-navy hover:text-ivory transition-colors text-xs font-mono uppercase tracking-wider font-semibold relative z-10 shadow-sm"
            >
              <span>Book Now</span>
              <ArrowUpRight size={14} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — TECHNOLOGY SOLUTIONS                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <span className="eyebrow text-teal">04 — Technology Solutions</span>
              <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                One Platform. <span className="italic text-teal font-normal">Three Seamless Experiences.</span>
              </h2>
              <p className="text-navy/75 text-sm sm:text-base mt-4 font-light leading-relaxed">
                Purpose-built apps for employees, drivers, and transport managers — connected in real time to deliver a smooth, on-time, and safe commute for every enterprise shift.
              </p>

              <div className="mt-8">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy/30 text-navy hover:bg-navy hover:text-ivory transition-colors text-xs font-mono uppercase tracking-widest font-semibold"
                >
                  <span>Book Now</span>
                  <ArrowUpRight size={14} />
                </NavLink>
              </div>
            </motion.div>

            <div className="lg:col-span-8 space-y-4">
              {techSolutions.map((item, idx) => {
                const ItemIcon = item.icon;
                const grad = idx % 2 === 0 ? "from-teal/20 to-teal/5" : "from-sand/25 to-sand/5";
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-white border border-navy/10 shadow-xs hover:shadow-lg transition-shadow relative overflow-hidden group"
                  >
                    {/* Decorative signature corner quarter-circle gradient */}
                    <div className={`absolute top-0 right-0 w-28 h-28 bg-linear-to-bl ${grad} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`} />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                          <ItemIcon size={20} />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy/5 text-navy/60 font-semibold uppercase">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold text-navy mb-2">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-navy/65 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — CINEMATIC CLOSING CTA                                                */}
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
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        {/* Corner quarter-circle accents — same motif as the About page's cards */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-4xl mx-auto">
          <span className="eyebrow text-teal inline-block mb-6">
            05 — Schedule a Demo
          </span>

          <h2 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight mb-6">
            {[
              { text: "Ready to Upgrade to Intelligent", cls: "" },
              { text: "Corporate Mobility?", cls: "italic text-teal font-normal" },
            ].map((line, i) => (
              <span className="line-mask block" key={line.text}>
                <motion.span
                  initial={{ y: "40%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                  className={`block ${line.cls}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          <p className="text-navy/75 text-sm sm:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Let our technical mobility consultants audit your current route logistics, calculate potential cost savings, and set up a live Command Tower trial.
          </p>

          <Magnetic>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sand text-navy hover:bg-navy hover:text-ivory transition-all font-bold text-xs tracking-widest uppercase shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Book an Enterprise Platform Demo &rarr;</span>
            </NavLink>
          </Magnetic>
        </div>
      </section>
    </div>
  );
};

export default Technology;
