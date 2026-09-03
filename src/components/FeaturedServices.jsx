import { NavLink } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../data/content";
import AnimatedImage from "./AnimatedImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const cardVariants = {
  hidden: (i) =>
    i === 1
      ? { opacity: 0, y: 60 }
      : { opacity: 0, x: i === 0 ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.18, delayChildren: 0.4 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const FeaturedServices = () => {
  // Select the top 3 flagship solutions for the homepage
  const featured = services.slice(0, 3);

  return (
    <div>
      {/* Header Row with Entry Animation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
        <div>
          <span className="eyebrow text-teal">Our Services</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
            Our Transport <span className="italic text-teal font-normal">Services.</span>
          </h2>
        </div>

        <NavLink
          to="/services"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-sand text-navy text-xs font-mono font-semibold transition-all duration-300 shadow-md shrink-0 group self-start md:self-end"
        >
          <span>Explore All Services</span>
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NavLink>
      </motion.div>

      {/* 3 Flagship Featured Cards Grid with Stagger & Micro-animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {featured.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.slug}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.015 }}
              className="p-4 rounded-3xl bg-white border border-navy/10 hover:border-teal/50 hover:shadow-[0_30px_70px_rgba(7,26,36,0.14)] transition-[border-color,box-shadow] duration-500 flex flex-col justify-between group relative overflow-hidden shadow-[0_10px_35px_rgba(38,55,74,0.05)]"
            >
              {/* Animated Top Glow Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Image Showcase */}
              <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden bg-navy/5">
                <AnimatedImage
                  src={service.image}
                  alt={service.title}
                  effect="zoom-in"
                  delay={i * 0.1}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-5">
                <div>
                  {/* Tag and Index Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[11px] font-mono uppercase font-bold tracking-wider group-hover:bg-teal/20 transition-colors">
                      <Icon size={12} className="text-teal group-hover:scale-110 transition-transform duration-300" />
                      {service.tag}
                    </span>
                    <span className="text-xs font-mono text-navy/40 font-bold group-hover:text-teal transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-navy font-bold leading-snug group-hover:text-teal transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[15px] text-slate-700 leading-relaxed font-normal mt-3">
                    {service.description}
                  </p>
                </div>

                {/* Feature Chips */}
                <div className="space-y-2 pt-2">
                  {service.features.slice(0, 2).map((feat) => (
                    <motion.div
                      key={feat}
                      variants={chipVariants}
                      className="p-2.5 rounded-xl bg-soft/80 border border-navy/5 flex items-center gap-2.5 transition-all duration-300 group-hover:bg-soft group-hover:border-teal/20"
                    >
                      <div className="w-4 h-4 rounded-full bg-teal/15 text-teal flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                        <CheckCircle2 size={11} />
                      </div>
                      <span className="text-xs text-navy/85 font-medium truncate">
                        {feat}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Action Bar */}
                <div className="pt-3 border-t border-navy/10">
                  <NavLink
                    to="/services"
                    className="flex items-center justify-between w-full p-3 rounded-2xl bg-soft group-hover:bg-sand text-navy transition-all duration-300 font-mono text-xs font-semibold shadow-xs"
                  >
                    <span>View Specifications</span>
                    <div className="w-6 h-6 rounded-full bg-white text-navy flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </NavLink>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Service Capability Strip with Subtle Animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-teal/10 via-soft to-sand/15 border border-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs group"
      >
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-12 h-12 rounded-2xl bg-teal/20 text-teal flex items-center justify-center shrink-0 shadow-xs"
          >
            <Sparkles size={22} />
          </motion.div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-teal font-bold">
              Full Spectrum Fleet Management
            </p>
            <p className="text-xs sm:text-sm text-navy/70 mt-0.5 font-light">
              Also providing Dedicated Staff Bus Shuttles, Corporate VIP Delegations &amp; Inter-City Business Transit.
            </p>
          </div>
        </div>

        <NavLink
          to="/services"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-sand text-navy text-xs font-mono font-semibold transition-all duration-300 shrink-0 shadow-sm group-hover:shadow-md"
        >
          <span>View All Capabilities</span>
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default FeaturedServices;
