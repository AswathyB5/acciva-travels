import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Smartphone,
  Navigation,
  Server,
  Lock,
  Radio,
  Clock,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  Network,
  FileCode2,
  Layers,
  Sparkles,
  Gauge,
} from "lucide-react";
import Magnetic from "../components/Magnetic";
import TechCommandSimulator from "../components/TechCommandSimulator";

const techPillars = [
  {
    id: "command-tower",
    title: "24/7 Command Tower & Telematics",
    tag: "Real-Time Telemetry",
    icon: Activity,
    badge: "Active Operations",
    description:
      "A centralized high-security monitoring facility tracking thousands of active trips with sub-second latency across 6 major Indian metros.",
    metrics: [
      { label: "GPS Refresh Rate", val: "500ms" },
      { label: "SOS Response Time", val: "< 15s" },
      { label: "Geofence Accuracy", val: "± 3 meters" },
    ],
    features: [
      "Sub-second continuous telemetry tracking speed, heading, and battery/fuel",
      "Dynamic geofencing triggering automatic alerts upon route deviation",
      "Over-speeding, harsh acceleration, and unauthorized stop detection",
      "Live audio and emergency team dispatch tie-up with local law enforcement",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai-routing",
    title: "AI Route Optimization & Dispatch",
    tag: "Algorithmic Precision",
    icon: Cpu,
    badge: "Smart Clustering",
    description:
      "Proprietary clustering algorithms that analyze live traffic bottlenecks, employee shift times, and pickup clusters to generate optimized routes.",
    metrics: [
      { label: "Transit Time Cut", val: "28%" },
      { label: "Fleet Mileage Saved", val: "1.4M km/yr" },
      { label: "On-Time Arrival", val: "99.8%" },
    ],
    features: [
      "Automated roster ingestion syncing directly with enterprise HRMS systems",
      "Predictive traffic models factoring monsoon waterlogging and peak metro bottlenecks",
      "Dynamic passenger clustering for maximum vehicle occupancy and comfort",
      "Zero-deadhead scheduling reducing unnecessary empty-kilometer runs",
    ],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mobile-suite",
    title: "Enterprise Passenger & Chauffeur Apps",
    tag: "End-to-End Mobility Suite",
    icon: Smartphone,
    badge: "iOS & Android",
    description:
      "Native mobile applications offering transparent visibility for corporate employees and intuitive, paperless workflow tools for drivers.",
    metrics: [
      { label: "Store App Rating", val: "4.9 ★" },
      { label: "OTP Boarding Speed", val: "2.1s" },
      { label: "Daily Active Users", val: "45,000+" },
    ],
    features: [
      "Live vehicle countdown ETA and chauffeur contact masking for privacy",
      "Biometric & Digital OTP verification ensuring zero unauthorized boarding",
      "One-tap Emergency SOS triggering immediate Command Tower live escalation",
      "Turn-by-turn navigation for drivers with multilingual voice prompts",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "green-mobility",
    title: "EV Fleet Telematics & Carbon Analytics",
    tag: "Sustainable Mobility",
    icon: Zap,
    badge: "Eco Tech",
    description:
      "Integrated EV state-of-charge tracking, intelligent charging slot reservations, and corporate Scope-3 ESG sustainability reporting.",
    metrics: [
      { label: "CO₂ Avoided / Mo", val: "180+ Tons" },
      { label: "EV Fleet Share", val: "35% Active" },
      { label: "Battery Health SLA", val: "> 92%" },
    ],
    features: [
      "Live State-of-Charge (SoC) tracking preventing en-route battery depletion",
      "Smart charging terminal scheduling synced with off-peak electrical tariffs",
      "Automated corporate ESG reports for carbon offset compliance and audits",
      "Regenerative braking telemetry and driver eco-driving performance scoring",
    ],
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
  },
];

const safetySteps = [
  {
    num: "01",
    title: "In-Cabin & In-App Alert",
    desc: "Passenger presses the in-app panic button or in-vehicle physical SOS switch.",
    detail: "Dual redundancy ensures instant transmission even in low-reception zones.",
    badge: "T-0s Trigger",
    icon: AlertTriangle,
  },
  {
    num: "02",
    title: "Command Tower Escalation",
    desc: "High-priority audible alarm flashes across dispatch consoles with live GPS coords.",
    detail: "Dedicated safety dispatcher assigned within 15 seconds to triage the emergency.",
    badge: "<15s Triage",
    icon: Radio,
  },
  {
    num: "03",
    title: "Real-Time Telemetry Lock",
    desc: "Vehicle telemetry locks into high-frequency tracking with live two-way cabin comms.",
    detail: "Continuous sub-second tracking with automated trip path deviation recording.",
    badge: "Sub-Second",
    icon: Navigation,
  },
  {
    num: "04",
    title: "ERT & Police Coordination",
    desc: "Nearest on-ground Emergency Response Vehicle (ERT) and local police dispatched.",
    detail: "On-ground security personnel arrive while HR and transport leads receive instant updates.",
    badge: "On-Ground ERT",
    icon: ShieldCheck,
  },
];

const integrationStack = [
  {
    name: "Enterprise HRMS & ERP",
    desc: "Seamless two-way roster synchronization with SAP, Workday, Darwinbox, and Oracle.",
    tag: "Automated Rosters",
    icon: Server,
  },
  {
    name: "Access Control & RFID",
    desc: "Campus gate barrier automation and RFID employee card tap integration.",
    tag: "Gate Pass Automation",
    icon: Lock,
  },
  {
    name: "Real-Time Telematics API",
    desc: "Webhook and REST endpoints streaming fleet GPS telemetry to corporate dashboards.",
    tag: "REST & Webhooks",
    icon: Network,
  },
  {
    name: "Automated Billing Engine",
    desc: "Transparent trip sheet audits, toll fee validation, and paperless electronic invoicing.",
    tag: "ERP Invoicing",
    icon: FileCode2,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Technology = () => {
  const [activePillar, setActivePillar] = useState(0);
  const [activeSafetyStep, setActiveSafetyStep] = useState(0);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* 01 — SUBPAGE HEADER: TECH SHOWCASE HERO                                   */}
      {/* ========================================================================= */}
      <section className="pt-36 sm:pt-44 pb-14 md:pb-20 bg-soft border-b border-navy/10 relative">
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
              <span className="eyebrow text-teal">01 — Acciva Mobility Stack 4.0</span>

              <h1 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.08] mt-6 tracking-tight">
                Intelligent Logistics. <br />
                Engineered For <span className="italic text-teal font-normal">Punctual Scale.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-md text-navy/70 text-base sm:text-lg font-light leading-relaxed pb-2"
            >
              From automated AI roster routing to 24/7 command tower surveillance, our proprietary technology platform powers over 50,000+ seamless enterprise commutes monthly.
            </motion.p>
          </div>

          {/* Prominent Header Showcase Image Banner */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 mb-12 group bg-navy/5"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80"
              alt="Acciva Central Command Center and AI Telematics"
              className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Quick Technology Metrics Strip */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Activity, val: "500 ms", label: "GPS Ping Latency", color: "text-navy", grad: "from-teal/20 to-teal/5" },
              { icon: Clock, val: "< 15s", label: "SOS Triage SLA", color: "text-teal", grad: "from-sand/25 to-sand/5" },
              { icon: Zap, val: "28% Cut", label: "Avg Transit Time", color: "text-navy", grad: "from-teal/20 to-teal/5" },
              { icon: Server, val: "100% API", label: "HRMS Integration", color: "text-teal", grad: "from-sand/25 to-sand/5" },
            ].map((m, i) => {
              const IconComp = m.icon;
              return (
                <motion.div
                  key={m.label}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4 group relative overflow-hidden hover:shadow-md transition-all"
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
      <section className="py-20 md:py-32 bg-soft border-b border-navy/10 relative">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-navy/10 gap-6"
          >
            <div>
              <span className="eyebrow text-teal">02 — Core Architecture</span>
              <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                The Acciva <span className="italic text-teal font-normal">Technology Stack.</span>
              </h2>
            </div>
            <p className="text-navy/60 text-sm sm:text-base max-w-md font-light">
              Explore the four interconnected systems that streamline every corporate shift commute from roster upload to final drop-off.
            </p>
          </motion.div>

          {/* Pillar Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
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
                <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between">
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

                    <p className="text-navy/70 text-sm sm:text-base leading-relaxed mb-8 font-light">
                      {techPillars[activePillar].description}
                    </p>

                    {/* Metrics in active pillar */}
                    <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-soft border border-navy/5 mb-8">
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

                  <div className="mt-10 pt-6 border-t border-navy/10 flex items-center justify-between">
                    <NavLink
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-ivory hover:bg-teal transition-all text-xs font-mono tracking-wider uppercase font-semibold group/btn"
                    >
                      <span>Request Live Platform Walkthrough</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </NavLink>
                  </div>
                </div>

                {/* Right Image Side */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-navy/5 overflow-hidden group">
                  <img
                    src={techPillars[activePillar].image}
                    alt={techPillars[activePillar].title}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/30 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — INTERACTIVE SAFETY & SOS ESCALATION PIPELINE                         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-32 bg-soft text-navy relative overflow-hidden border-b border-navy/10">
        {/* Background Grid Accent */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,26,36,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(7,26,36,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-px relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <span className="eyebrow text-teal">03 — Zero-Compromise Security</span>
            <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
              Automated SOS & <span className="italic text-teal font-normal">Incident Response.</span>
            </h2>
            <p className="text-navy/70 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Every vehicle in the Acciva network is outfitted with dual in-cabin panic switches and connected to our 24/7 Command Tower for rapid on-ground intervention. Click each stage to simulate the response chain.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {safetySteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = idx === activeSafetyStep;
              const grad = idx % 2 === 0 ? "from-teal/20 to-teal/5" : "from-sand/25 to-sand/5";

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveSafetyStep(idx)}
                  className={`p-6 rounded-2xl border relative flex flex-col justify-between cursor-pointer transition-all duration-300 overflow-hidden group ${
                    isSelected
                      ? "bg-sand/10 border-sand shadow-[0_0_25px_rgba(216,199,165,0.35)]"
                      : "bg-white border-navy/10 hover:border-navy/30 shadow-xs"
                  }`}
                >
                  {/* Decorative signature corner quarter-circle gradient */}
                  <div className={`absolute top-0 right-0 w-28 h-28 bg-linear-to-bl ${grad} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? "bg-sand text-navy font-bold" : "bg-sand/15 text-sand"
                        }`}
                      >
                        <StepIcon size={20} />
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-navy/5 text-navy/70 font-semibold">
                        {step.badge}
                      </span>
                    </div>

                    <span className="text-2xl font-mono font-bold text-sand/70">
                      {step.num}
                    </span>

                    <h4 className="font-display text-lg text-navy font-bold mt-2 mb-2">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-navy/65 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy/10 flex items-center gap-2 text-[10px] font-mono uppercase relative z-10">
                    <span className={isSelected ? "text-sand font-bold" : "text-navy/40"}>
                      Stage {idx + 1} of 4
                    </span>
                    <span
                      className={`h-px flex-1 transition-all ${
                        isSelected ? "bg-sand" : "bg-navy/10"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Protocol Deep Dive Box */}
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
                  Stage 0{activeSafetyStep + 1}: {safetySteps[activeSafetyStep].title}
                </h4>
                <p className="text-xs sm:text-sm text-navy/70 font-light mt-0.5">
                  {safetySteps[activeSafetyStep].detail}
                </p>
              </div>
            </div>

            <NavLink
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand text-navy hover:bg-navy hover:text-ivory transition-colors text-xs font-mono uppercase tracking-wider font-semibold relative z-10 shadow-sm"
            >
              <span>Download Safety SLA Audit</span>
              <ArrowUpRight size={14} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — ENTERPRISE API & ECOSYSTEM INTEGRATION                               */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-32 bg-soft border-b border-navy/10">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <span className="eyebrow text-teal">04 — Plug-and-Play Ecosystem</span>
              <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                Built To Integrate Seamlessly With <span className="italic text-teal font-normal">Your IT Stack.</span>
              </h2>
              <p className="text-navy/70 text-sm sm:text-base mt-4 font-light leading-relaxed">
                No painful manual roster uploads. Our automated connectors ingest shift schedules, employee geo-locations, and approval workflows directly from your existing enterprise HR and ERP software.
              </p>

              <div className="mt-8">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy/30 text-navy hover:bg-navy hover:text-ivory transition-colors text-xs font-mono uppercase tracking-widest font-semibold"
                >
                  <span>Request API Documentation</span>
                  <ArrowUpRight size={14} />
                </NavLink>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {integrationStack.map((item, idx) => {
                const ItemIcon = item.icon;
                const grad = idx % 2 === 0 ? "from-teal/20 to-teal/5" : "from-sand/25 to-sand/5";
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-white border border-navy/10 shadow-xs hover:shadow-lg transition-all relative overflow-hidden group"
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
      <section className="py-14 md:py-20 bg-soft text-navy relative overflow-hidden">
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

        {/* Oversized faint numeral watermark — Mobility Stack 4.0 */}
        <span
          aria-hidden="true"
          className="absolute -top-6 sm:-top-10 right-2 sm:right-10 font-display text-[9rem] sm:text-[14rem] leading-none text-navy/5 select-none pointer-events-none"
        >
          4.0
        </span>

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

          <p className="text-navy/70 text-sm sm:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
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
