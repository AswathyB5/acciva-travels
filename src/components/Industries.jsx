import { motion } from "framer-motion";
import {
  Cpu,
  Headset,
  Landmark,
  Factory,
  HeartPulse,
  Pill,
  Briefcase,
  Cog,
  Car,
  CircuitBoard,
  ShoppingCart,
  Truck,
  Store,
  Globe2,
  Rocket,
  Building2,
  Building,
} from "lucide-react";

const industries = [
  { name: "IT & Technology", icon: Cpu },
  { name: "ITES", icon: Headset },
  { name: "BFSI", icon: Landmark },
  { name: "Manufacturing", icon: Factory },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Pharmaceuticals", icon: Pill },
  { name: "Consulting", icon: Briefcase },
  { name: "Engineering", icon: Cog },
  { name: "Automotive", icon: Car },
  { name: "Electronics", icon: CircuitBoard },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Logistics", icon: Truck },
  { name: "Retail", icon: Store },
  { name: "Global Capability Centres", icon: Globe2 },
  { name: "Startups", icon: Rocket },
  { name: "MNCs", icon: Building2 },
  { name: "Industrial Companies", icon: Factory },
  { name: "Corporate Offices", icon: Building },
];

const colorStyles = {
  teal: {
    badge: "bg-teal/10 border-teal/30 text-teal group-hover:bg-teal group-hover:text-white group-hover:border-teal group-hover:shadow-teal/15",
    label: "group-hover:text-teal",
  },
  sand: {
    badge: "bg-sand/15 border-sand/30 text-sand group-hover:bg-sand group-hover:text-navy group-hover:border-sand group-hover:shadow-sand/15",
    label: "group-hover:text-sand",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const ROW_SIZE = 6;

const cardVariants = {
  hidden: (direction) => ({ opacity: 0, x: direction * 70, y: 24, scale: 0.96 }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Industries = () => {
  return (
    <section className="relative bg-soft py-16 md:py-24 overflow-hidden">
      {/* Ambient background accents matching site language */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <div className="absolute top-0 left-0 w-72 h-72 bg-sand/15 rounded-br-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal/15 rounded-tl-full pointer-events-none" />

      <div className="container-px relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow text-teal">Industries We Serve</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
            Trusted Across <span className="italic text-teal font-normal">Every Sector.</span>
          </h2>
          <p className="mt-5 text-slate-700 text-[15px] font-normal leading-relaxed">
            From fast-scaling startups to established multinationals, Acciva powers corporate mobility for organisations across every industry vertical, PAN India.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 md:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {industries.map(({ name, icon: Icon }, i) => {
            const color = i % 2 === 0 ? "teal" : "sand";
            const row = Math.floor(i / ROW_SIZE);
            const direction = row % 2 === 0 ? -1 : 1;
            return (
            <motion.div
              key={name}
              custom={direction}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group relative flex flex-col items-center justify-center text-center gap-3 px-4 py-6 sm:py-7 rounded-2xl bg-white border border-navy/10 shadow-[0_10px_35px_rgba(38,55,74,0.05)] hover:border-teal/50 hover:shadow-[0_20px_50px_rgba(7,26,36,0.12)] transition-[border-color,box-shadow] duration-500 overflow-hidden"
            >
              {/* Top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal transition-opacity duration-500" />

              <motion.div
                whileHover={{ rotate: 8 }}
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:shadow-[0_0_0_6px] transition-all duration-300 ${colorStyles[color].badge}`}
              >
                <Icon size={20} />
              </motion.div>

              <span className={`text-[13px] sm:text-sm text-navy font-semibold leading-snug transition-colors duration-300 ${colorStyles[color].label}`}>
                {name}
              </span>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
