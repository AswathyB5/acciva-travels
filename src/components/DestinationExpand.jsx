import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const DestinationExpand = ({ destinations }) => {
  const [active, setActive] = useState(0);
  const count = destinations.length;

  const widthFor = (i) => (i === active ? 42 : (100 - 42) / (count - 1));

  return (
    <div className="container-px">
      <p className="eyebrow text-navy/40 mb-8 hidden md:block">Hover to Explore</p>

      {/* Desktop: expanding accordion */}
      <div className="hidden md:flex h-[75vh] gap-3">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            onMouseEnter={() => setActive(i)}
            animate={{ width: `${widthFor(i)}%` }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden cursor-pointer"
          >
            <NavLink to="/services" className="absolute inset-0 block">
              <motion.img
                src={d.image}
                alt={`${d.name}, ${d.country}`}
                loading="lazy"
                animate={{ scale: i === active ? 1.06 : 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="h-full w-full object-cover"
              />
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  i === active ? "bg-navy/25" : "bg-navy/55"
                }`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight/90 via-midnight/10 to-transparent" />

              {/* Collapsed label: index + vertical name */}
              <div
                className={`absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-300 ${
                  i === active ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <span className="eyebrow text-ivory/60">{String(i + 1).padStart(2, "0")}</span>
                <span className="vertical-label font-display text-ivory text-xl tracking-wide">
                  {d.name}
                </span>
              </div>

              {/* Expanded content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-7 transition-all duration-500 ${
                  i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <span className="eyebrow text-sand mb-3">
                  {String(i + 1).padStart(2, "0")} &mdash; {d.country}
                </span>
                <h3 className="font-display text-ivory text-4xl lg:text-5xl leading-none">
                  {d.name}
                </h3>
                <p className="text-ivory/70 text-sm mt-4 max-w-xs leading-relaxed">
                  {d.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-ivory eyebrow">
                  Explore <ArrowUpRight size={15} />
                </span>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>

      {/* Mobile: simple stacked list */}
      <div className="md:hidden space-y-5">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
          >
            <NavLink to="/services" className="group relative block h-[42vh] overflow-hidden">
              <img
                src={d.image}
                alt={`${d.name}, ${d.country}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight/85 via-midnight/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="eyebrow text-sand">
                  {String(i + 1).padStart(2, "0")} &mdash; {d.country}
                </span>
                <h3 className="font-display text-ivory text-3xl mt-2">{d.name}</h3>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DestinationExpand;
