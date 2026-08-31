import { NavLink } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../data/content";

const FeaturedServices = () => {
  // Select the top 3 flagship solutions for the homepage
  const featured = services.slice(0, 3);

  return (
    <div>
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="eyebrow text-teal">04 — Our Services</span>
          <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
            Our Transport <span className="italic text-teal font-normal">Services.</span>
          </h2>
        </div>

        <NavLink
          to="/services"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-navy text-ivory text-xs font-mono font-semibold hover:bg-teal transition-all shadow-md shrink-0 group self-start md:self-end"
        >
          <span>Explore All 6+ Services</span>
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NavLink>
      </div>

      {/* 3 Flagship Featured Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-4 rounded-3xl bg-white border border-navy/10 hover:border-teal/40 hover:shadow-[0_25px_60px_rgba(38,55,74,0.12)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-[0_10px_35px_rgba(38,55,74,0.05)]"
            >
              {/* Top Image Showcase - Completely Clean Without Cards/Overlays */}
              <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden bg-navy/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-5">
                <div>
                  {/* Tag and Index Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[11px] font-mono uppercase font-bold tracking-wider">
                      <Icon size={12} className="text-teal" />
                      {service.tag}
                    </span>
                    <span className="text-xs font-mono text-navy/40 font-bold">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-navy font-bold leading-snug group-hover:text-teal transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-navy/70 leading-relaxed font-light mt-3">
                    {service.description}
                  </p>
                </div>

                {/* Feature Chips */}
                <div className="space-y-2 pt-2">
                  {service.features.slice(0, 2).map((feat) => (
                    <div
                      key={feat}
                      className="p-2.5 rounded-xl bg-soft/80 border border-navy/5 flex items-center gap-2.5 transition-colors group-hover:bg-soft"
                    >
                      <div className="w-4 h-4 rounded-full bg-teal/15 text-teal flex items-center justify-center shrink-0">
                        <CheckCircle2 size={11} />
                      </div>
                      <span className="text-xs text-navy/85 font-medium truncate">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Action Bar */}
                <div className="pt-3 border-t border-navy/10">
                  <NavLink
                    to="/services"
                    className="flex items-center justify-between w-full p-3 rounded-2xl bg-soft group-hover:bg-navy group-hover:text-ivory text-navy transition-all duration-300 font-mono text-xs font-semibold shadow-xs"
                  >
                    <span>View Specifications</span>
                    <div className="w-6 h-6 rounded-full bg-white group-hover:bg-teal text-navy group-hover:text-ivory flex items-center justify-center transition-colors shadow-xs">
                      <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </NavLink>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Service Capability Strip */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-teal/10 via-soft to-sand/15 border border-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal/20 text-teal flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles size={22} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-teal font-bold">
              Full Spectrum Fleet Management
            </p>
            <p className="text-xs sm:text-sm text-navy/70 mt-0.5 font-light">
              Also providing Dedicated Staff Bus Shuttles, Corporate VIP Delegations & Inter-City Business Transit.
            </p>
          </div>
        </div>

        <NavLink
          to="/services"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-navy text-ivory text-xs font-mono font-semibold hover:bg-teal transition-all shrink-0 shadow-sm"
        >
          <span>View All Capabilities</span>
          <ArrowUpRight size={14} />
        </NavLink>
      </div>
    </div>
  );
};

export default FeaturedServices;
