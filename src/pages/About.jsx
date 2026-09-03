import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  Compass,
  Award,
  ArrowUpRight,
  ChevronRight,
  UserCheck,
  Ban,
  PhoneCall,
  HeartHandshake,
} from "lucide-react";
import Magnetic from "../components/Magnetic";
import AnimatedImage from "../components/AnimatedImage";

// Dramatic 3D Tilt Card wrapper with multi-layered depth, spotlight, and shimmer sweep
const TiltCard = ({ children, className, glowColor = "rgba(59,141,196,0.22)", accentGlow = "rgba(59,141,196,0.4)" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), { stiffness: 350, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 350, damping: 24 });
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

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
        scale: 1.05,
        y: -8,
        boxShadow: `0 20px 35px -10px ${glowColor}`,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`${className} relative transition-all duration-500 group`}
    >
      {/* Animated Top Glow Bar on Hover (matches Home's Featured Services card pattern) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Corner quarter-circle round accent (matches Home "Next Chapter" pattern), pops in when the card scrolls into view */}
      <motion.div
        className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 rounded-bl-full pointer-events-none origin-top-right"
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

      {/* Animated top accent line: a scrollbar-style thumb slides once from start to end when the card scrolls into view */}
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


const About = () => {
  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* SUBPAGE HEADER: CLEAN WHITE/SOFT SECTION WITH HERO SHOWCASE IMAGE    */}
      {/* ========================================================================= */}
      <section
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=2000&q=85')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
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
            <span className="text-teal font-semibold">About Us</span>
          </div>

          {/* Title & Intro Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <div className="max-w-3xl">
              <span className="eyebrow text-teal">
                About Acciva Travels
              </span>
              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                Our Story, Ethos & <br />
                <span className="italic text-teal font-normal">
                  Decades of Trust.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-navy/90 text-[15px] font-medium leading-relaxed pb-2">
              Tracing our journey from boutique employee transit in Bengaluru in
              2007 to powering over 50,000+ monthly corporate commutes across
              India.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACCIVA HISTORY                                                       */}
      {/* ========================================================================= */}
      <section className="py-8 md:py-10 bg-soft">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="eyebrow text-teal">Our Heritage</span>

              <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.1] mt-4 tracking-tight">
                Acciva{" "}
                <span className="italic text-teal font-normal">History</span>
              </h2>

              <div className="space-y-5 text-slate-700 leading-relaxed text-[15px] font-normal">
                <p>
                  Acciva Travels was founded in 2016 as a Private Limited
                  Company, building on a strong foundation established in 2007
                  as Gettz Travel Solutions. Initially, the company started on a
                  smaller scale providing reliable employee transportation
                  services to businesses.
                </p>
                <p>
                  Over the years, Acciva expanded its operations to meet the
                  growing corporate travel and employee transportation needs of
                  businesses across different locations. With continuous growth,
                  professional expertise and a commitment to quality service.
                  Acciva has developed into a trusted employee transportation
                  and fleet management service provider.
                </p>
                <p>
                  Today, Acciva Travels has a large and dedicated workforce
                  supported by a sophisticated fleet of vehicles and efficient
                  transportation solutions. The company continues to focus on
                  safe, reliable and technology-driven transportation services,
                  strengthening the Acciva brand and working towards delivering
                  greater value to its customers.
                </p>
              </div>
            </motion.div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group"
              >
                <AnimatedImage
                  src="https://images2.alphacoders.com/710/thumb-1920-710409.jpg"
                  alt="Acciva Travels fleet operations"
                  effect="zoom-out"
                  className="h-[420px] sm:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR VISION & MISSION (DRAMATIC MOVING LASER LINES & ANIMATED ICONS)   */}
      {/* ========================================================================= */}
      <section className="py-8 md:py-10 bg-soft relative overflow-hidden">
        {/* Dynamic Animated Background Laser Lines & Traveling Energy Photons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-75">
          <svg
            className="w-full h-full absolute inset-0"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Upper flowing transit laser line */}
            <motion.path
              d="M -100,100 Q 450,40 900,130 T 1900,80"
              fill="none"
              stroke="url(#tealLaserGradient)"
              strokeWidth="2.5"
              strokeDasharray="14 10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            {/* Lower flowing transit laser line */}
            <motion.path
              d="M -100,360 Q 550,430 1000,340 T 1950,400"
              fill="none"
              stroke="url(#sandLaserGradient)"
              strokeWidth="2.5"
              strokeDasharray="14 10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.8, delay: 0.25, ease: "easeOut" }}
            />
            {/* Central connecting laser wave bridging Vision & Mission */}
            <motion.path
              d="M 150,240 C 550,170 850,310 1450,240"
              fill="none"
              stroke="url(#connectingLaserGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.85 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="tealLaserGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b8dc4" stopOpacity="0" />
                <stop offset="30%" stopColor="#3b8dc4" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#3b8dc4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3b8dc4" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="sandLaserGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#e1c59d" stopOpacity="0" />
                <stop offset="30%" stopColor="#e1c59d" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#e1c59d" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e1c59d" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="connectingLaserGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b8dc4" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#e1c59d" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b8dc4" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Removed moving photon pulses */}
        </div>

        <div className="container-px relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="eyebrow text-teal">Strategic Compass</span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl mt-3 leading-[1.08] tracking-tight">
              Our Vision &{" "}
              <span className="italic text-teal font-normal">Mission</span>
            </h2>

            {/* Expanding Neon Laser Line Beneath Title */}
            <div className="relative flex justify-center items-center mt-3">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="h-0.5 w-24 rounded-full"
              />
              {/* Removed moving dot animation */}
            </div>
          </div>

          {/* Vision & Mission Split Cards Grid - Dramatic Left/Right 3D Entrance */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {/* OUR VISION CARD (Slide in from Left with 3D tilt & rotating compass) */}
              <motion.div
                initial={{ opacity: 0, x: -75, rotateY: 18, scale: 0.92 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 1200 }}
              >
                <TiltCard
                  glowColor="rgba(59,141,196,0.25)"
                  className="p-5 sm:p-7 rounded-3xl bg-white border-2 border-teal/20 shadow-xl flex flex-col justify-between overflow-hidden h-full cursor-default relative"
                >
                  <div
                    style={{
                      transform: "translateZ(20px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-5">
                      {/* Animated Moving Compass Icon with Radar Sonar Waves & Orbiting Particle */}
                      <div
                        className="relative"
                        style={{ transform: "translateZ(32px)" }}
                      >
                        {/* Radar Sonar Wave Rings */}
                        {/* Removed radar sonar wave rings */}

                        {/* Orbiting satellite particle */}
                        {/* Removed orbiting particle animation */}

                        {/* Icon Container with Load-in Flip, Hover Flip and Needle Oscillation */}
                        <motion.div
                          className="relative w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-xs z-10"
                          initial={{ rotateY: -180, opacity: 0 }}
                          whileInView={{ rotateY: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.4 }}
                          whileHover={{ scale: 1.15, rotate: 180 }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}
                        >
                          {/* Moving Compass Needle Animation */}
                          <motion.div
                            animate={{ rotate: [0, 25, -20, 15, 0] }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Compass
                              size={24}
                              className="transition-transform duration-500 group-hover:scale-110"
                            />
                          </motion.div>
                        </motion.div>
                      </div>

                      <span
                        style={{ transform: "translateZ(20px)" }}
                        className="px-3.5 py-1 rounded-full bg-teal/10 border border-teal/25 text-teal text-[10px] font-mono tracking-widest uppercase font-semibold"
                      >
                        Future Horizon
                      </span>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-widest text-teal font-bold block mb-1.5">
                      Strategic Direction
                    </span>

                    <motion.h3
                      style={{ transform: "translateZ(25px)" }}
                      className="font-display text-xl sm:text-2xl text-navy font-bold mb-4"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      OUR VISION
                    </motion.h3>

                    <motion.p
                      className="text-slate-700 text-[15px] font-normal leading-relaxed"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Our vision is to deliver superior travel and
                      transportation services through a proactive approach
                      focused on hospitality, integrity, reliability and
                      customer satisfaction. We strive to set high standards in
                      corporate transportation by providing efficient and
                      dependable mobility solutions that meet the evolving needs
                      of our customers.
                    </motion.p>
                  </div>
                </TiltCard>
              </motion.div>

              {/* OUR MISSION CARD (Slide in from Right with 3D tilt & pulsating shield) */}
              <motion.div
                initial={{ opacity: 0, x: 75, rotateY: -18, scale: 0.92 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.12,
                }}
                style={{ transformPerspective: 1200 }}
              >
                <TiltCard
                  glowColor="rgba(225,197,157,0.3)"
                  className="p-5 sm:p-7 rounded-3xl bg-white border-2 border-sand/30 shadow-xl flex flex-col justify-between overflow-hidden h-full cursor-default relative"
                >
                  <div
                    style={{
                      transform: "translateZ(20px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-5">
                      {/* Animated Moving Shield Icon with Forcefield Waves & Orbiting Particle */}
                      <div
                        className="relative"
                        style={{ transform: "translateZ(32px)" }}
                      >
                        {/* Sonar wave rings removed */}

                        {/* Icon Container with Load-in Flip, Hover Flip and Gentle Breathing Pulse */}
                        <motion.div
                          className="relative w-12 h-12 rounded-2xl bg-sand/20 flex items-center justify-center text-navy shadow-xs z-10"
                          initial={{ rotateY: 180, opacity: 0 }}
                          whileInView={{ rotateY: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.4 }}
                          whileHover={{ scale: 1.15, rotate: -180 }}
                          transition={{
                            duration: 0.7,
                            ease: "easeInOut",
                            delay: 0.1,
                          }}
                        >
                          {/* Moving Shield Pulse Animation */}
                          <motion.div
                            animate={{ scale: [1, 1.12, 1], y: [0, -2, 0] }}
                            transition={{
                              duration: 3.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <ShieldCheck
                              size={24}
                              className="transition-transform duration-500 group-hover:scale-110"
                            />
                          </motion.div>
                        </motion.div>
                      </div>

                      <span
                        style={{ transform: "translateZ(20px)" }}
                        className="px-3.5 py-1 rounded-full bg-sand/20 border border-sand/40 text-navy text-[10px] font-mono tracking-widest uppercase font-semibold"
                      >
                        Core Commitment
                      </span>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-widest text-sand font-bold block mb-1.5">
                      Customer &amp; Safety Focus
                    </span>

                    <motion.h3
                      style={{ transform: "translateZ(25px)" }}
                      className="font-display text-xl sm:text-2xl text-navy font-bold mb-4"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      OUR MISSION
                    </motion.h3>

                    <motion.p
                      className="text-slate-700 text-[15px] font-normal leading-relaxed"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Our mission is to provide safe, reliable and comfortable
                      transportation services with customer security and
                      satisfaction at the heart of everything we do. We are
                      committed to maintaining the highest standards of safety,
                      service quality and operational excellence, while
                      delivering a seamless and comfortable travel experience
                      for every customer.
                    </motion.p>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY CHOOSE ACCIVA? (DRAMATIC INTERACTIVE 3D FEATURE CARDS)           */}
      {/* ========================================================================= */}
      <section className="py-8 md:py-10 bg-soft text-navy relative overflow-hidden">
        {/* Ambient atmospheric backdrop */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          {/* Section Header */}
          <div className="mb-8">
            <span className="eyebrow text-teal">Distinct Advantage</span>
            <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.08] mt-4">
              Why Choose{" "}
              <span className="italic text-teal font-normal">Acciva?</span>
            </h2>

            <div className="mt-6 space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed">
              <p>
                At Acciva Travels, we combine experience, knowledge, confidence
                and courteous service to deliver reliable travel and
                transportation solutions. We understand that every customer
                deserves a safe, comfortable and hassle-free travel experience.
              </p>
              <p>
                With years of industry experience, we have built our reputation
                by maintaining a strong focus on customer satisfaction, service
                quality, safety and reliability. Our dedicated team works
                proactively to understand customer needs and provide
                transportation solutions that consistently meet high standards.
              </p>
              <p className="font-medium text-navy">
                Choose Acciva Travels for professional service, experienced
                support, dependable transportation and a customer-first approach
                you can trust.
              </p>
            </div>
          </div>

          {/* 4 Feature Cards Grid with Staggered 3D Motion */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.16 } },
            }}
          >
            {/* 1. Qualified Staff Members */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -70, y: 30, scale: 0.9, rotateX: 18 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              style={{ transformPerspective: 1200 }}
            >
              <TiltCard
                glowColor="rgba(59,141,196,0.25)"
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-teal/25 flex flex-col justify-between overflow-hidden shadow-lg cursor-default h-full"
              >
                <div
                  style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* 3D Elevated Icon with Ambient Bloom */}
                    <div
                      className="relative"
                      style={{ transform: "translateZ(38px)" }}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-inner"
                        initial={{ rotateY: -180, opacity: 0 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        whileHover={{ scale: 1.15, rotate: -8 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                      >
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <UserCheck
                            size={26}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <span
                      style={{ transform: "translateZ(25px)" }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-[11px] font-mono tracking-wider uppercase text-navy/90 font-semibold"
                    >
                      <ShieldCheck size={12} className="text-teal" />
                      Professional Team
                    </span>
                  </div>

                  <motion.h3
                    style={{ transform: "translateZ(30px)" }}
                    className="font-display text-xl sm:text-2xl text-navy font-bold mb-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Qualified Staff Members
                  </motion.h3>

                  <motion.div
                    className="space-y-3 text-[15px] text-slate-700 leading-relaxed font-normal"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p>
                      At Acciva Travels, our experienced and professionally
                      trained staff members are committed to delivering safe,
                      reliable and efficient employee transportation services.
                      Our team is well-equipped to understand the needs of
                      corporate clients and ensure a smooth and comfortable
                      travel experience.
                    </p>
                    <p>
                      From trained drivers to dedicated transportation support
                      staff we maintain high standards of professionalism,
                      safety, customer service and operational efficiency. Our
                      qualified team plays an important role in providing
                      dependable corporate transportation solutions and
                      maintaining the quality that Acciva Travels is known for.
                    </p>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>

            {/* 2. 24/7 Emergency Response Team */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 70, y: 30, scale: 0.9, rotateX: 18 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              style={{ transformPerspective: 1200 }}
            >
              <TiltCard
                glowColor="rgba(225,197,157,0.3)"
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-sand/30 flex flex-col justify-between overflow-hidden shadow-lg cursor-default h-full"
              >
                <div
                  style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* 3D Elevated Icon with Ambient Bloom */}
                    <div
                      className="relative"
                      style={{ transform: "translateZ(38px)" }}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-sand/20 flex items-center justify-center text-navy shadow-inner"
                        initial={{ rotateY: 180, opacity: 0 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                          delay: 0.1,
                        }}
                      >
                        <motion.div
                          animate={{ rotate: [0, -12, 12, -8, 0] }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <PhoneCall
                            size={26}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div
                      style={{ transform: "translateZ(25px)" }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-[11px] font-mono tracking-wider uppercase text-navy/90 font-semibold"
                    >
                      {/* Active live radar ping beacon */}
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
                      </span>
                      <span>Round-the-Clock</span>
                    </div>
                  </div>

                  <motion.h3
                    style={{ transform: "translateZ(30px)" }}
                    className="font-display text-xl sm:text-2xl text-navy font-bold mb-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    24/7 Emergency Response Team
                  </motion.h3>

                  <motion.div
                    className="space-y-3 text-[15px] text-slate-700 leading-relaxed font-normal"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p>
                      At Acciva Travels, we understand that reliable
                      transportation requires support around the clock. Our 24/7
                      Emergency Response Team is available to promptly address
                      unexpected travel and transportation-related issues and
                      help ensure uninterrupted service.
                    </p>
                    <p>
                      With a proactive approach and dedicated support, our team
                      works to provide quick assistance, enhanced passenger
                      safety and reliable transportation solutions whenever
                      needed. Our round-the-clock response system helps
                      corporate clients and passengers travel with greater
                      confidence, comfort and peace of mind.
                    </p>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>

            {/* 3. No Unauthorized Stops During Travel */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -70, y: 30, scale: 0.9, rotateX: 18 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              style={{ transformPerspective: 1200 }}
            >
              <TiltCard
                glowColor="rgba(59,141,196,0.25)"
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-teal/25 flex flex-col justify-between overflow-hidden shadow-lg cursor-default h-full"
              >
                <div
                  style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* 3D Elevated Icon with Ambient Bloom */}
                    <div
                      className="relative"
                      style={{ transform: "translateZ(38px)" }}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-inner"
                        initial={{ rotateY: -180, opacity: 0 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        whileHover={{ scale: 1.15, rotate: -8 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Ban
                            size={26}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <span
                      style={{ transform: "translateZ(25px)" }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-[11px] font-mono tracking-wider uppercase text-navy/90 font-semibold"
                    >
                      <Compass size={12} className="text-teal" />
                      Strict Route Discipline
                    </span>
                  </div>

                  <motion.h3
                    style={{ transform: "translateZ(30px)" }}
                    className="font-display text-xl sm:text-2xl text-navy font-bold mb-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    No Unauthorized Stops During Travel
                  </motion.h3>

                  <motion.div
                    className="space-y-3 text-[15px] text-slate-700 leading-relaxed font-normal"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p>
                      At Acciva Travels, passenger safety, punctuality and
                      travel efficiency are our top priorities. Our professional
                      transportation team follows planned routes and approved
                      travel schedules, helping ensure a smooth and
                      uninterrupted journey for every passenger.
                    </p>
                    <p>
                      We maintain strict guidelines to prevent unauthorized
                      stops during travel, reducing unnecessary delays and
                      supporting a safe, comfortable and timely transportation
                      experience. This disciplined approach helps corporate
                      clients manage their employee transportation services
                      efficiently while giving passengers greater confidence and
                      peace of mind.
                    </p>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>

            {/* 4. Minimum Attrition – With Minimal Changes */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 70, y: 30, scale: 0.9, rotateX: 18 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              style={{ transformPerspective: 1200 }}
            >
              <TiltCard
                glowColor="rgba(225,197,157,0.3)"
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-sand/30 flex flex-col justify-between overflow-hidden shadow-lg cursor-default h-full"
              >
                <div
                  style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* 3D Elevated Icon with Ambient Bloom */}
                    <div
                      className="relative"
                      style={{ transform: "translateZ(38px)" }}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-sand/20 flex items-center justify-center text-navy shadow-inner"
                        initial={{ rotateY: 180, opacity: 0 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                          delay: 0.3,
                        }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.12, 1] }}
                          transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <HeartHandshake
                            size={26}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <span
                      style={{ transform: "translateZ(25px)" }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-[11px] font-mono tracking-wider uppercase text-navy/90 font-semibold"
                    >
                      <Award size={12} className="text-sand" />
                      Stable Team
                    </span>
                  </div>

                  <motion.h3
                    style={{ transform: "translateZ(30px)" }}
                    className="font-display text-xl sm:text-2xl text-navy font-bold mb-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Minimum Attrition – With Minimal Changes
                  </motion.h3>

                  <motion.div
                    className="space-y-3 text-[15px] text-slate-700 leading-relaxed font-normal"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p>
                      At Acciva Travels, we focus on maintaining a stable and
                      reliable transportation team to ensure consistent service
                      quality. Our minimum staff attrition helps us maintain
                      operational continuity, strong team coordination and a
                      better understanding of client requirements.
                    </p>
                    <p>
                      By making minimal changes to our trained staff and
                      transportation operations, we provide corporate clients
                      with a dependable and seamless employee transportation
                      service. This stability helps ensure consistent
                      performance, better passenger experiences and reliable
                      day-to-day transportation management.
                    </p>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SAFE JOURNEYS. SMARTER MOBILITY. STRONGER CONNECTIONS.               */}
      {/* ========================================================================= */}
      <section className="py-8 md:py-10 bg-soft text-navy relative overflow-hidden">
        <div className="container-px relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column — Description, slides in from the left */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="eyebrow text-teal">Our Purpose</span>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy tracking-tight leading-[1.12]">
                Safe Journeys. Smarter Mobility. <br />
                <span className="italic text-teal font-normal">
                  Stronger Connections.
                </span>
              </h2>

              <p className="font-display text-xl sm:text-2xl text-navy/90 font-medium">
                We Move What Matters Most - Your People.
              </p>

              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  Every journey carries a responsibility. At Acciva Travels, we
                  take that responsibility seriously.
                </p>
                <p>
                  With a strong focus on safety, reliability, punctuality and
                  service excellence, we create transportation experiences that
                  help businesses keep their people moving with confidence. From
                  everyday employee commutes to comprehensive corporate mobility
                  requirements, our team is committed to making every journey
                  seamless.
                </p>
              </div>

              {/* Highlighted Quote Box with Dramatic 3D Tilt, single round accent (inherited from TiltCard) */}
              <TiltCard
                glowColor="rgba(225,197,157,0.35)"
                accentGlow="rgba(59,141,196,0.45)"
                className="p-6 sm:p-8 rounded-3xl bg-white border border-teal/30 shadow-xl hover:shadow-[0_25px_60px_-10px_rgba(59,141,196,0.25)] cursor-default overflow-hidden"
              >
                <motion.p
                  style={{ transform: "translateZ(20px)" }}
                  className="font-display text-lg sm:text-2xl text-navy font-medium italic leading-snug relative"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  &ldquo;Because great transportation isn&apos;t just about
                  reaching a destination.
                </motion.p>
                <motion.p
                  style={{ transform: "translateZ(30px)" }}
                  className="font-display text-lg sm:text-2xl text-sand font-medium italic mt-2 relative"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  It&apos;s about making every journey count.&rdquo;
                </motion.p>
              </TiltCard>
            </motion.div>

            {/* Right Column — Car Image, slides in from the right */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group"
              >
                <AnimatedImage
                  src="https://images.pexels.com/photos/4520924/pexels-photo-4520924.jpeg?cs=srgb&dl=pexels-introspectivedsgn-4520924.jpg&fm=jpg"
                  alt="Acciva Travels car fleet"
                  effect="zoom-out"
                  className="h-[420px] sm:h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SAFE AND RELIABLE TRANSPORTATION MADE EASY                            */}
      {/* ========================================================================= */}
      <section className="relative bg-soft py-8 md:py-10 overflow-hidden">
        {/* Background Video & Overlays (matches Home "Next Chapter" section) */}
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
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        {/* Corner quarter-circle accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="eyebrow text-teal">Corporate Mobility</span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy tracking-tight leading-[1.1]">
              Safe and Reliable{" "}
              <span className="italic text-teal font-normal">
                Transportation Made Easy
              </span>
            </h2>

            <p className="text-slate-700 text-[15px] font-normal leading-relaxed max-w-3xl mx-auto">
              Experience safe, reliable and comfortable employee transportation
              services with Acciva Travels. Our dedicated team is committed to
              providing efficient transportation solutions designed around
              passenger safety, punctuality and customer satisfaction.
            </p>

            <p className="text-slate-600 text-[15px] font-normal max-w-2xl mx-auto">
              Have questions or need a reliable transportation solution for your
              business? Get in touch with us today and discover how Acciva
              Travels can support your corporate transportation needs.
            </p>

            <div className="pt-6">
              <Magnetic strength={20}>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-sand text-navy font-bold text-sm sm:text-base hover:bg-navy hover:text-ivory hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
                >
                  <span>Book Your Transportation Service Today</span>
                  <ArrowUpRight size={18} />
                </NavLink>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* READY TO MOVE WITH ACCIVA? (CLOSING CTA)                             */}
      {/* ========================================================================= */}
      <section className="relative py-8 md:py-10 overflow-hidden">
        {/* Background Image & Overlays (matches Home's Final CTA section) */}
        <img
          src="https://www.bmw-infinitycars.in/sites/default/files/2026-02/1280_610_new%202.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_55%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-neutral-300/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_45%_at_50%_50%,rgba(212,212,212,0.88)_0%,rgba(212,212,212,0.55)_45%,rgba(212,212,212,0)_75%)]" />

        <div className="container-px relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-mono uppercase tracking-widest">
            <Award size={14} />
            <span>Get Started Today</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy leading-[1.08]">
            Ready to Move With{" "}
            <span className="italic text-teal font-normal">Acciva?</span>
          </h2>

          <p className="text-slate-700 text-[15px] font-normal leading-relaxed">
            Let&apos;s create a safer, smarter, and more dependable
            transportation experience for your organization.
          </p>

          <div className="pt-4 flex justify-center">
            <Magnetic strength={20}>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-navy text-ivory font-bold text-base hover:bg-teal hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span>Get Started With Acciva →</span>
              </NavLink>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;








