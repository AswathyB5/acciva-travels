import { NavLink } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { services as fallbackServices } from "../data/content";
import { useCollection } from "../data/useContent";
import { resolveIcon } from "../data/iconMap";
import AnimatedImage from "./AnimatedImage";

const ACCENTS = ["teal", "sand", "teal"];

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const FeaturedServices = () => {
  const { items: services } = useCollection("services", fallbackServices);
  const featured = services.slice(0, 1);

  return (
    <div>
      {/* Header Row with Entry Animation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
      >
        <div>
          <span className="eyebrow text-teal">Our Services</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
            Our Transport <span className="italic text-teal font-normal">Services.</span>
          </h2>
        </div>

        <NavLink
          to="/services"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl shrink-0 group self-start md:self-end"
        >
          <span>Explore All Services</span>
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NavLink>
      </motion.div>

      {/* Alternating editorial rows, each its own card */}
      <div className="max-w-272 mx-auto space-y-5 sm:space-y-6">
        {featured.map((service, i) => {
          const Icon = typeof service.icon === "string" ? resolveIcon(service.icon) : service.icon;
          const reversed = i % 2 === 1;
          const accent = ACCENTS[i % ACCENTS.length];
          const accentClass = accent === "teal" ? "bg-teal/15" : "bg-sand/40";
          const ctaAccent = i === 1 ? "teal" : "sand";
          const ctaContainerClass =
            ctaAccent === "teal"
              ? "bg-teal/15 border-teal/30 text-teal"
              : "bg-sand/25 border-sand/50 text-navy";

          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, x: reversed ? 120 : -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl bg-white border border-teal/40 hover:border-teal/70 hover:shadow-lg transition-[border-color,box-shadow] duration-300 p-3 sm:p-4 overflow-hidden group/card"
            >
              {/* Decorative corner accent, matching the site's rounded quarter-circle motif */}
              <motion.div
                className={`absolute top-0 ${
                  reversed ? "left-0 rounded-br-full" : "right-0 rounded-bl-full"
                } w-28 h-28 sm:w-36 sm:h-36 ${accentClass} pointer-events-none`}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              />

              <div className="relative grid sm:grid-cols-5 gap-4 sm:gap-6 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative h-52 sm:h-60 sm:col-span-2 rounded-2xl overflow-hidden group ${
                    reversed ? "sm:order-2" : "sm:order-1"
                  }`}
                >
                  <AnimatedImage
                    src={service.image}
                    alt={service.title}
                    effect="zoom-in"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </motion.div>

                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className={`px-2 sm:px-1 py-1 sm:col-span-3 ${reversed ? "sm:order-1" : "sm:order-2"}`}
                >
                  <motion.span
                    variants={itemVariants}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[10px] font-mono uppercase font-bold tracking-wider"
                  >
                    {Icon && <Icon size={11} />}
                    {service.tag}
                  </motion.span>
                  <motion.h3
                    variants={itemVariants}
                    className="font-display text-lg font-bold leading-snug mt-1.5 text-navy"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="text-[14px] text-slate-700 leading-relaxed font-normal mt-1.5 line-clamp-4"
                  >
                    {service.description}
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <NavLink
                      to="/services"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm text-xs font-mono font-semibold mt-3 w-fit transition-colors duration-300 group/link ${ctaContainerClass}`}
                    >
                      <span>View Specifications</span>
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </NavLink>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Service Capability Strip with Subtle Animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-teal/10 via-soft to-sand/15 border border-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs group"
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
            <p className="text-[13px] text-slate-600 leading-relaxed mt-0.5">
              Also providing Dedicated Staff Bus Shuttles, Corporate VIP Delegations &amp; Inter-City Business Transit.
            </p>
          </div>
        </div>

        <NavLink
          to="/services"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl shrink-0"
        >
          <span>View All Capabilities</span>
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default FeaturedServices;
