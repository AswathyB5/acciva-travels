import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import AnimatedImage from "./AnimatedImage";

const DestinationExpand = ({ destinations }) => {
  const [active, setActive] = useState(0);
  const count = destinations.length;

  const widthFor = (i) => (i === active ? 46 : (100 - 46) / (count - 1));

  return (
    <div className="container-px">
      <div className="flex items-center justify-between mb-8">
        <p className="eyebrow text-teal/80 flex items-center gap-2">
          <Sparkles size={14} className="animate-spin text-teal" style={{ animationDuration: "6s" }} />
          <span>Luxury Fleet Showcase &mdash; Hover to Expand</span>
        </p>

        {/* Dynamic active index indicator */}
        <div className="hidden md:flex items-center gap-2">
          {destinations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === active ? "w-8 bg-teal" : "w-2 bg-navy/20 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: expanding accordion */}
      <div className="hidden md:flex h-[75vh] gap-3">
        {destinations.map((d, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={d.name}
              onMouseEnter={() => setActive(i)}
              animate={{ width: `${widthFor(i)}%` }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden cursor-pointer rounded-3xl transition-shadow duration-500 ${
                isActive ? "shadow-2xl border-2 border-teal/40" : "shadow-md border border-navy/10"
              }`}
            >
              <NavLink to="/services" className="absolute inset-0 block">
                <motion.img
                  src={d.image}
                  alt={`${d.name}, ${d.country}`}
                  loading="lazy"
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-midnight/25" : "bg-navy/50"
                  }`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/40 to-transparent" />

                {/* Collapsed label: index + vertical name */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span className="eyebrow text-ivory/80 font-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="vertical-label font-display text-ivory text-xl tracking-wide font-normal">
                    {d.name}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-teal/20 backdrop-blur-md border border-teal/30 text-teal text-[11px] font-mono tracking-wider uppercase mb-3">
                      {String(i + 1).padStart(2, "0")} &mdash; {d.country}
                    </span>
                    <h3 className="font-display text-ivory text-3xl lg:text-5xl leading-tight font-normal">
                      {d.name}
                    </h3>
                    <p className="text-ivory/85 text-[15px] mt-3 max-w-sm leading-relaxed font-normal">
                      {d.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-sand text-navy text-xs font-mono font-bold hover:bg-white transition-all shadow-md">
                      <span>Book This Fleet</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </motion.div>
                </div>
              </NavLink>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: simple stacked list */}
      <div className="md:hidden space-y-5">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <NavLink to="/services" className="group relative block h-[42vh] rounded-3xl overflow-hidden shadow-xl border border-navy/10">
              <AnimatedImage
                src={d.image}
                alt={`${d.name}, ${d.country}`}
                effect="zoom-in"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="eyebrow text-sand font-mono">
                  {String(i + 1).padStart(2, "0")} &mdash; {d.country}
                </span>
                <h3 className="font-display text-ivory text-2xl mt-1">{d.name}</h3>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DestinationExpand;
