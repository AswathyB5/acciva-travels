import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  Compass,
  Building2,
  CheckCircle2,
  Award,
  ArrowUpRight,
  ChevronRight,
  UserCheck,
  Ban,
  PhoneCall,
  HeartHandshake,
} from "lucide-react";
import Magnetic from "../components/Magnetic";

const whyChooseFeatures = [
  {
    icon: UserCheck,
    title: "Qualified Staff Members",
    badge: "100% Verified",
    desc: "Experienced, knowledgeable, confident, and courteous chauffeurs. Each driver undergoes rigorous background vetting, defensive driving training, and corporate etiquette certification.",
    stats: "7-Step Background Check",
    color: "from-teal/20 to-teal/5",
    accentColor: "text-teal",
    borderColor: "border-teal/30",
  },
  {
    icon: Ban,
    title: "No Unauthorized Stops During Travel",
    badge: "Geofenced Routes",
    desc: "Strict point-to-point transit discipline. Real-time GPS geofencing and automated route deviation alarms ensure zero unscheduled stops throughout the commute.",
    stats: "100% Route Compliance",
    color: "from-sand/20 to-sand/5",
    accentColor: "text-sand",
    borderColor: "border-sand/30",
  },
  {
    icon: PhoneCall,
    title: "24/7 Emergency Response Team",
    badge: "Rapid ERT Dispatch",
    desc: "Dedicated centralized control tower monitoring every shift live. On-ground emergency response units ready to deploy across city corridors in under 3 minutes.",
    stats: "< 180s ERT Response Time",
    color: "from-teal/20 to-teal/5",
    accentColor: "text-teal",
    borderColor: "border-teal/30",
  },
  {
    icon: HeartHandshake,
    title: "Minimum Attrition – With Minimal Changes",
    badge: "Familiar Chauffeurs",
    desc: "Industry-leading driver retention ensuring consistent, familiar chauffeurs on fixed employee routes for maximum trust, passenger comfort, and zero transit friction.",
    stats: "< 4% Driver Turnover",
    color: "from-sand/20 to-sand/5",
    accentColor: "text-sand",
    borderColor: "border-sand/30",
  },
];

const About = () => {
  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* 01 — SUBPAGE HEADER: CLEAN WHITE/SOFT SECTION WITH HERO SHOWCASE IMAGE    */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-36 pb-10 md:pb-12 bg-soft">
        <div className="container-px">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-navy/40 mb-6 uppercase tracking-wider">
            <NavLink to="/" className="hover:text-teal transition-colors">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">About Us</span>
          </div>

          {/* Title & Intro Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <span className="eyebrow text-teal">01 — About Acciva Travels</span>
              <h1 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.08] mt-6 tracking-tight">
                Our Story, Ethos & <br />
                <span className="italic text-teal font-normal">Decades of Trust.</span>
              </h1>
            </div>

            <p className="max-w-md text-navy/70 text-base sm:text-lg font-light leading-relaxed pb-2">
              Tracing our journey from boutique employee transit in Bengaluru in 2007 to powering over 50,000+ monthly corporate commutes across India.
            </p>
          </div>

          {/* Prominent Header Showcase Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 mb-12 group">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
              alt="Acciva Corporate Tech Park Transit Network"
              className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs hover:border-teal/40 transition-all">
              <p className="font-display text-2xl sm:text-3xl text-teal font-bold">15+ Yrs</p>
              <p className="text-xs font-mono text-navy/50 mt-1 uppercase">Mobility Heritage</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs hover:border-teal/40 transition-all">
              <p className="font-display text-2xl sm:text-3xl text-navy font-bold">50,000+</p>
              <p className="text-xs font-mono text-navy/50 mt-1 uppercase">Monthly Commutes</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs hover:border-teal/40 transition-all">
              <p className="font-display text-2xl sm:text-3xl text-teal font-bold">99.8%</p>
              <p className="text-xs font-mono text-navy/50 mt-1 uppercase">On-Time SLA</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs hover:border-teal/40 transition-all">
              <p className="font-display text-2xl sm:text-3xl text-navy font-bold">10+ Cities</p>
              <p className="text-xs font-mono text-navy/50 mt-1 uppercase">Pan-India Network</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — WHO WE ARE: BRAND STORYTELLING & PHILOSOPHY                          */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="eyebrow text-teal">02 — Who We Are</span>

              <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.1] mt-4 tracking-tight">
                Built To Be <span className="italic text-teal font-normal">Active</span> And Driven To <span className="italic text-teal font-normal">Achieve</span>.
              </h2>

              <div className="space-y-4 text-navy/70 leading-relaxed text-base sm:text-lg font-light">
                <p>
                  <strong>Acciva Travels</strong> is a premier corporate employee transportation solutions provider. We partner with multinational technology firms, global capability centers (GCCs), and enterprise corporations to manage end-to-end employee transit.
                </p>
                <p>
                  The name <strong className="text-navy font-semibold">Acciva</strong> reflects our foundational ethos &mdash; staying proactively <em className="text-teal font-normal">Active</em> with real-time fleet operations, and empowering enterprises to <em className="text-teal font-normal">Achieve</em> their employee safety, punctuality, and sustainability goals.
                </p>
                <p>
                  From round-the-clock shift logistics to executive airport and delegation transit, our operations are underpinned by proprietary GPS telematics, speed monitoring, and a dedicated 24/7 command center.
                </p>
              </div>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div whileHover={{ y: -3 }} className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-teal shrink-0" />
                  <span className="text-xs font-semibold text-navy">24/7 ERT & Command Tower</span>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-teal shrink-0" />
                  <span className="text-xs font-semibold text-navy">Zero Unauthorized Stops</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Visual Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern executive corporate fleet"
                  className="h-[380px] sm:h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — WHY CHOOSE ACCIVA? (EXPERIENCE, SAFETY & CUSTOMER FOCUS)             */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft text-navy relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sand/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container-px relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <span className="eyebrow text-teal">03 — Why Choose Acciva?</span>
              <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[1.08] mt-6">
                Experienced, Knowledgeable, <br />
                <span className="italic text-teal font-normal">Confident & Courteous.</span>
              </h2>
            </div>
            <p className="text-navy/70 text-base max-w-md font-light leading-relaxed">
              To Acciva, customer experience is incredibly valuable. We have succeeded for over many years by staying strong on our approach to customer service.
            </p>
          </div>

          {/* 4 Feature Cards Grid with Stagger Animation */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {whyChooseFeatures.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`p-7 sm:p-9 rounded-3xl bg-white border ${f.borderColor} hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl`}
                >
                  <div className={`absolute top-0 right-0 w-36 h-36 bg-linear-to-bl ${f.color} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`} />

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center text-sand shadow-inner group-hover:scale-110 transition-transform">
                        <Icon size={24} className={f.accentColor} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-navy/5 border border-navy/15 text-[11px] font-mono tracking-wider uppercase text-navy/70">
                        {f.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl text-navy font-bold mb-3 group-hover:text-sand transition-colors">
                      {f.title}
                    </h3>

                    <p className="text-sm text-navy/70 leading-relaxed font-light mb-6">
                      {f.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-navy/10 flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold ${f.accentColor}`}>
                      {f.stats}
                    </span>
                    <NavLink
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-navy/60 group-hover:text-sand transition-colors"
                    >
                      <span>Explore Standard</span>
                      <ArrowUpRight size={14} />
                    </NavLink>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — OUR VISION & OUR MISSION                                             */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft relative">
        <div className="container-px">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-teal">04 — Purpose & Philosophy</span>
            <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl mt-6 leading-[1.08] tracking-tight">
              Our Vision & <span className="italic text-teal font-normal">Mission.</span>
            </h2>
            <p className="text-navy/60 text-base sm:text-lg mt-4 font-light leading-relaxed">
              The foundational compass that guides our hospitality, operations, and commitment to corporate travelers.
            </p>
          </div>

          {/* Vision & Mission Split Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* OUR VISION CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-navy/10 shadow-xl hover:shadow-2xl hover:border-teal/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-teal/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-xs group-hover:rotate-6 transition-transform">
                    <Compass size={28} />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[11px] font-mono tracking-widest uppercase font-semibold">
                    North Star
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-teal font-bold block mb-2">
                  Purpose & Standard
                </span>

                <h3 className="font-display text-3xl sm:text-4xl text-navy font-bold mb-6">
                  OUR VISION
                </h3>

                <blockquote className="text-navy/80 text-base sm:text-xl font-light leading-relaxed italic border-l-2 border-teal pl-5 py-1">
                  &ldquo;We strive to deliver superior travel and transportation services with a proactive approach in ensuring hospitality, integrity and reliability.&rdquo;
                </blockquote>
              </div>

              {/* Supporting Value Badges */}
              <div className="grid grid-cols-3 gap-3 pt-8 mt-8 border-t border-navy/10 text-center">
                <div className="p-3 rounded-xl bg-navy/5">
                  <p className="text-[11px] font-mono font-bold text-navy">Proactive</p>
                  <p className="text-[9px] text-navy/50 uppercase mt-0.5">Approach</p>
                </div>
                <div className="p-3 rounded-xl bg-navy/5">
                  <p className="text-[11px] font-mono font-bold text-teal">Hospitality</p>
                  <p className="text-[9px] text-navy/50 uppercase mt-0.5">& Integrity</p>
                </div>
                <div className="p-3 rounded-xl bg-navy/5">
                  <p className="text-[11px] font-mono font-bold text-navy">Reliability</p>
                  <p className="text-[9px] text-navy/50 uppercase mt-0.5">Assured</p>
                </div>
              </div>
            </motion.div>

            {/* OUR MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-navy/10 shadow-xl hover:shadow-2xl hover:border-sand/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-sand/15 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-sand/20 flex items-center justify-center text-navy shadow-xs group-hover:rotate-6 transition-transform">
                    <ShieldCheck size={28} className="text-teal" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-sand/20 border border-sand/40 text-navy text-[11px] font-mono tracking-widest uppercase font-semibold">
                    Core Commitment
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-teal font-bold block mb-2">
                  Customer & Safety Focus
                </span>

                <h3 className="font-display text-3xl sm:text-4xl text-navy font-bold mb-6">
                  OUR MISSION
                </h3>

                <blockquote className="text-navy/80 text-base sm:text-xl font-light leading-relaxed italic border-l-2 border-sand pl-5 py-1">
                  &ldquo;Our goal is to ensure utmost dedication to safety with customer security and comfort at the center of our corporate philosophy.&rdquo;
                </blockquote>
              </div>

              {/* Supporting Value Badges */}
              <div className="grid grid-cols-3 gap-3 pt-8 mt-8 border-t border-navy/10 text-center">
                <div className="p-3 rounded-xl bg-navy/5">
                  <p className="text-[11px] font-mono font-bold text-navy">Utmost Safety</p>
                  <p className="text-[9px] text-navy/50 uppercase mt-0.5">Dedication</p>
                </div>
                <div className="p-3 rounded-xl bg-navy/5">
                  <p className="text-[11px] font-mono font-bold text-teal">Security</p>
                  <p className="text-[9px] text-navy/50 uppercase mt-0.5">100% Assured</p>
                </div>
                <div className="p-3 rounded-xl bg-navy/5">
                  <p className="text-[11px] font-mono font-bold text-navy">Comfort</p>
                  <p className="text-[9px] text-navy/50 uppercase mt-0.5">Priority</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — CINEMATIC MAGNETIC ENTERPRISE CLOSING CTA WITH BACKGROUND VIDEO      */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-soft text-navy relative overflow-hidden">
        {/* Background Video & Overlays */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-desert.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-soft/95 via-soft/85 to-soft/95 pointer-events-none" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        {/* Corner quarter-circle accents — same motif as the About page's cards */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-mono uppercase tracking-widest mb-6">
            <Award size={14} />
            <span>Trusted Corporate Partner</span>
          </div>

          <motion.div
            className="mx-auto mb-6 h-px w-16 bg-teal/50"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-navy leading-[1.08]">
            {[
              { text: "Elevate Your Corporate Transit.", cls: "" },
              { text: "Partner with Acciva.", cls: "italic text-teal font-normal" },
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

          <p className="mt-6 text-navy/70 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Discover why Fortune 500 enterprises and leading Indian corporations trust Acciva for punctual, transparent, and technology-driven mobility.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Magnetic strength={20}>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-sand text-navy font-bold text-sm sm:text-base hover:bg-navy hover:text-ivory hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span>Request Enterprise Proposal</span>
                <ArrowUpRight size={18} />
              </NavLink>
            </Magnetic>

            <Magnetic strength={15}>
              <NavLink
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-navy/20 bg-white text-navy hover:bg-navy/5 hover:border-navy/40 transition-all text-sm font-medium"
              >
                <span>Explore Fleet Solutions</span>
              </NavLink>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
