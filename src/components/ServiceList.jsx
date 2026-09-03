import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles, Filter } from "lucide-react";
import AnimatedImage from "./AnimatedImage";

const ServiceList = ({ services }) => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Fleet Capabilities" },
    { id: "daily", label: "Daily Employee Transit" },
    { id: "executive", label: "Executive & VIP" },
    { id: "group", label: "Shuttle & Tech Parks" },
  ];

  const filteredServices = services.filter((s) => {
    if (filter === "all") return true;
    if (filter === "daily") return s.tag?.toLowerCase().includes("shift") || s.tag?.toLowerCase().includes("daily");
    if (filter === "executive") return s.tag?.toLowerCase().includes("vip") || s.tag?.toLowerCase().includes("airport");
    if (filter === "group") return s.tag?.toLowerCase().includes("bus") || s.tag?.toLowerCase().includes("shuttle") || s.tag?.toLowerCase().includes("event");
    return true;
  });

  return (
    <div>
      {/* Interactive Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-12 pb-6 border-b border-navy/10">
        <div className="flex items-center gap-2 text-xs font-mono text-teal mr-2">
          <Filter size={14} className="text-teal" />
          <span className="uppercase tracking-wider">Filter Fleet by:</span>
        </div>
        {categories.map((cat) => {
          const isActive = filter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-navy text-ivory font-bold shadow-md scale-105"
                  : "bg-white border border-navy/10 text-navy/70 hover:border-teal/40 hover:text-teal"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Services Grid with Layout Animations */}
      <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-10">
        <AnimatePresence>
          {filteredServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-navy/10 hover:border-teal/40 hover:shadow-[0_25px_60px_rgba(38,55,74,0.12)] transition-[border-color,box-shadow] duration-500 flex flex-col justify-between overflow-hidden group shadow-[0_10px_35px_rgba(38,55,74,0.05)] relative"
              >
                {/* Subtle top shimmer sweep on card hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Image Showcase */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-navy/5 mb-6">
                  <AnimatedImage
                    src={service.image}
                    alt={service.title}
                    effect={i % 2 === 0 ? "zoom-out" : "zoom-in"}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Bottom Content & Features */}
                <div className="flex flex-col justify-between flex-1 space-y-6">
                  <div>
                    {/* Header Tag and Number */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-mono uppercase font-bold tracking-wider">
                        <Icon size={14} className="text-teal" />
                        {service.tag}
                      </span>
                      <span className="text-xs font-mono text-navy/40 font-bold">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-navy/75 leading-relaxed font-light mt-3">
                      {service.description}
                    </p>
                  </div>

                  {/* 4 Feature Cards Grid */}
                  {service.features && (
                    <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                      {service.features.map((feat) => (
                        <div
                          key={feat}
                          className="p-3 rounded-2xl bg-soft/80 border border-navy/5 flex items-center gap-2.5 transition-colors group-hover:bg-soft"
                        >
                          <div className="w-5 h-5 rounded-full bg-teal/15 text-teal flex items-center justify-center shrink-0">
                            <CheckCircle2 size={13} />
                          </div>
                          <span className="text-xs text-navy/85 font-medium leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Footer */}
                  <div className="pt-4 border-t border-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <NavLink
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-navy text-ivory text-xs font-mono font-semibold hover:bg-teal transition-all group/btn shadow-md shrink-0"
                    >
                      <span>Book / Inquire Fleet</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </NavLink>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-navy/50 uppercase">
                      <ShieldCheck size={14} className="text-teal" />
                      <span>99.8% SLA Backed • Pan-India</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ServiceList;
