import { motion } from "framer-motion";
import { ShieldCheck, Activity, Zap, Cpu, Clock, CheckCircle2 } from "lucide-react";

const tickerItems = [
  { icon: Activity, text: "99.8% On-Time SLA Benchmark", tag: "Live Telemetry" },
  { icon: ShieldCheck, text: "100% Background Verified Drivers", tag: "Safety First" },
  { icon: Zap, text: "Proprietary AI Roster & Shift Routing", tag: "Smart Logistics" },
  { icon: Clock, text: "24/7 Central Command & ERT Tower", tag: "Zero Delays" },
  { icon: Cpu, text: "Real-Time GPS SOS & Telematics", tag: "Active Monitoring" },
  { icon: CheckCircle2, text: "50,000+ Monthly Executive Commutes", tag: "Scale & Trust" },
];

const LiveTicker = () => {
  return (
    <div className="relative w-full overflow-hidden py-4 bg-navy text-ivory border-y border-sand/20">
      {/* Subtle edge fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-linear-to-r from-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-linear-to-l from-navy to-transparent z-10 pointer-events-none" />

      {/* Infinite loop marquee */}
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 28,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3.5 px-5 py-2 rounded-full bg-soft/5 border border-white/10 hover:border-teal/50 hover:bg-soft/10 transition-all duration-300 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="w-6 h-6 rounded-lg bg-teal/20 text-teal flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon size={13} />
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-ivory/90 group-hover:text-sand transition-colors">
                {item.text}
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-ivory/60">
                {item.tag}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LiveTicker;
