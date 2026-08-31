import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Radio,
  Navigation,
  BatteryCharging,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Car,
  Wifi,
  Compass,
} from "lucide-react";

const initialVehicles = [
  {
    id: "AC-BLR-108",
    city: "Bengaluru (Outer Ring Rd)",
    model: "Tata Tigor EV",
    speed: "44 km/h",
    eta: "4 mins",
    status: "On Route",
    geofence: "Locked",
    battery: "82%",
    occupancy: "3 / 4 Seats",
    driver: "Karthik R. (4.9 ★)",
    nextStop: "Manyata Tech Park Gate 2",
    x: "28%",
    y: "36%",
    color: "var(--color-teal)",
  },
  {
    id: "AC-HYD-402",
    city: "Hyderabad (HITEC City)",
    model: "Maruti Ertiga Hybrid",
    speed: "38 km/h",
    eta: "7 mins",
    status: "Boarding OTP",
    geofence: "Locked",
    battery: "94%",
    occupancy: "4 / 6 Seats",
    driver: "Venkatesh M. (5.0 ★)",
    nextStop: "Mindspace Cyberabad Hub",
    x: "62%",
    y: "48%",
    color: "var(--color-sand)",
  },
  {
    id: "AC-PNQ-714",
    city: "Pune (Hinjawadi Ph-1)",
    model: "MG ZS EV",
    speed: "51 km/h",
    eta: "11 mins",
    status: "AI Optimized",
    geofence: "Locked",
    battery: "68%",
    occupancy: "2 / 4 Seats",
    driver: "Suresh P. (4.9 ★)",
    nextStop: "EON Free Zone Cluster",
    x: "42%",
    y: "68%",
    color: "var(--color-teal)",
  },
  {
    id: "AC-DEL-920",
    city: "Delhi NCR (CyberCity)",
    model: "Toyota Innova Crysta",
    speed: "46 km/h",
    eta: "2 mins",
    status: "Arriving",
    geofence: "Locked",
    battery: "88%",
    occupancy: "5 / 6 Seats",
    driver: "Amitabh S. (4.8 ★)",
    nextStop: "DLF CyberHub Tower B",
    x: "78%",
    y: "26%",
    color: "var(--color-sand)",
  },
];

const liveLogsData = [
  { id: 1, time: "18:14:02", tag: "AI_ROUTING", text: "Shift roster #482 dynamically clustered (-8 mins avg delay)", type: "teal" },
  { id: 2, time: "18:14:08", tag: "GEOFENCE_OK", text: "AC-BLR-108 verified safe corridor passage on ORR Express", type: "sand" },
  { id: 3, time: "18:14:15", tag: "OTP_AUTH", text: "Digital passenger token validated for AC-HYD-402 (Zero delay)", type: "teal" },
  { id: 4, time: "18:14:22", tag: "EV_TELEMETRY", text: "AC-PNQ-714 fast-charge reserve confirmed at Hub 3 (88% SoC)", type: "sand" },
  { id: 5, time: "18:14:31", tag: "COMMAND_TOWER", text: "All 1,240 active evening shift transit units operating at 99.8% SLA", type: "teal" },
];

const TechCommandSimulator = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(initialVehicles[0]);
  const [activeTab, setActiveTab] = useState("telematics");
  const [logs, setLogs] = useState(liveLogsData);

  // Auto-scroll / rotate live event logs
  useEffect(() => {
    const timer = setInterval(() => {
      setLogs((prev) => {
        const nextId = prev.length + 1;
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(
          now.getMinutes()
        ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

        const sampleEvents = [
          { tag: "SPEED_AUDIT", text: "Fleet speed compliance 100% (Zero harsh acceleration triggers)", type: "teal" },
          { tag: "GEOFENCE_SYNC", text: `Vehicle ${initialVehicles[Math.floor(Math.random() * initialVehicles.length)].id} entered campus geofence`, type: "sand" },
          { tag: "COMMAND_HEARTBEAT", text: "500ms sub-second telematics ping verified across 6 metros", type: "teal" },
          { tag: "ESG_TRACKER", text: "EV Fleet avoided +14.2 kg carbon emissions in last 30 mins", type: "sand" },
        ];
        const randomEvt = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];

        return [
          { id: nextId, time: timeStr, tag: randomEvt.tag, text: randomEvt.text, type: randomEvt.type },
          ...prev.slice(0, 4),
        ];
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden bg-soft border border-navy/10 shadow-2xl">
      {/* Top HUD Header Bar */}
      <div className="p-4 sm:p-6 border-b border-navy/10 flex flex-wrap items-center justify-between gap-4 bg-white/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-3.5 h-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-navy tracking-wider uppercase">
                Acciva Command Tower Telemetry OS
              </span>
              <span className="px-2 py-0.5 rounded bg-teal/20 border border-teal/40 text-teal text-[10px] font-mono uppercase">
                v4.8 Live
              </span>
            </div>
            <p className="text-[11px] font-mono text-navy/50">
              Active Network: 5,000+ Vehicles • SLA: 99.8% • Latency: 480ms
            </p>
          </div>
        </div>

        {/* View Mode Filters */}
        <div className="flex items-center gap-1.5 bg-navy/5 p-1 rounded-xl border border-navy/10 text-xs font-mono">
          {[
            { id: "telematics", label: "Fleet Radar" },
            { id: "ai", label: "AI Routing" },
            { id: "ev", label: "EV Battery" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-sand text-navy font-bold shadow-xs"
                  : "text-navy/60 hover:text-navy hover:bg-navy/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid lg:grid-cols-12 min-h-[460px]">
        {/* Left Simulated Radar / GPS Map Canvas */}
        <div className="lg:col-span-8 relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal/10 via-soft to-soft">
          {/* Subtle Grid Lines Background */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(7,26,36,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(7,26,36,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Animated Radar Scanning Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-teal/20 pointer-events-none flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full border border-teal/20" />
            <div className="w-1/2 h-1/2 rounded-full border border-sand/20" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-teal/40 opacity-40"
            />
          </div>

          {/* SVG Animated Route Corridors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 120,180 Q 260,120 420,240 T 700,160"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -60 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
            <motion.path
              d="M 180,320 Q 380,380 560,280 T 760,340"
              fill="none"
              stroke="var(--color-sand)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 60 }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            />
          </svg>

          {/* Interactive Vehicle Nodes */}
          <div className="relative z-10 w-full h-full min-h-[300px]">
            {initialVehicles.map((v) => {
              const isSelected = selectedVehicle.id === v.id;
              return (
                <motion.div
                  key={v.id}
                  style={{ left: v.x, top: v.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setSelectedVehicle(v)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing halo */}
                    <span
                      className="animate-ping absolute inline-flex h-8 w-8 rounded-full opacity-60"
                      style={{ backgroundColor: v.color }}
                    />
                    {/* Node Core */}
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                        isSelected
                          ? "bg-sand text-navy border-white shadow-[0_0_15px_rgba(216,199,165,0.8)] scale-110"
                          : "bg-navy text-ivory border-teal hover:border-sand"
                      }`}
                    >
                      <Car size={14} />
                    </div>

                    {/* Floating Label */}
                    <div
                      className={`absolute top-9 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap border pointer-events-none transition-all ${
                        isSelected
                          ? "bg-sand text-navy font-bold border-white"
                          : "bg-navy/90 text-ivory/80 border-navy/20"
                      }`}
                    >
                      {v.id}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Telemetry Mini-Badges */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-navy/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 text-navy/70 text-[11px] font-mono">
              <Compass size={12} className="text-teal" />
              <span>Click any vehicle marker to inspect live telemetry</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/30 text-teal text-[11px] font-mono">
              <Wifi size={12} />
              <span>Dual 4G/5G Failover Active</span>
            </div>
          </div>
        </div>

        {/* Right Telemetry Details & Live Event Console */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-navy/10 p-6 flex flex-col justify-between bg-white">
          {/* Selected Vehicle Telemetry Card */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-navy/10 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sand font-bold">
                Vehicle Telemetry HUD
              </span>
              <span className="px-2 py-0.5 rounded-full bg-teal/20 border border-teal/40 text-teal text-[10px] font-mono font-semibold">
                {selectedVehicle.status}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVehicle.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div>
                  <h4 className="font-display text-xl font-bold text-navy">
                    {selectedVehicle.id}
                  </h4>
                  <p className="text-xs font-mono text-navy/50">
                    {selectedVehicle.city} • {selectedVehicle.model}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-navy/5 border border-navy/10">
                    <span className="text-navy/40 block text-[10px] uppercase">Speed</span>
                    <span className="text-sand font-bold text-sm">{selectedVehicle.speed}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy/5 border border-navy/10">
                    <span className="text-navy/40 block text-[10px] uppercase">ETA Destination</span>
                    <span className="text-teal font-bold text-sm">{selectedVehicle.eta}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy/5 border border-navy/10">
                    <span className="text-navy/40 block text-[10px] uppercase">Geofence Lock</span>
                    <span className="text-navy font-semibold flex items-center gap-1">
                      <ShieldCheck size={12} className="text-teal" />
                      {selectedVehicle.geofence}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy/5 border border-navy/10">
                    <span className="text-navy/40 block text-[10px] uppercase">Battery / Fuel</span>
                    <span className="text-navy font-semibold flex items-center gap-1">
                      <BatteryCharging size={12} className="text-sand" />
                      {selectedVehicle.battery}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-navy/5 border border-navy/10 text-xs font-mono">
                  <div className="text-navy/40 text-[10px] uppercase">Next Drop / Boarding Point</div>
                  <div className="text-navy font-medium truncate mt-0.5">
                    {selectedVehicle.nextStop}
                  </div>
                  <div className="text-teal text-[11px] mt-1">
                    Chauffeur: {selectedVehicle.driver}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Real-time Ticker Feed */}
          <div className="mt-6 pt-4 border-t border-navy/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-navy/50">
                Live Telematics Feed
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-teal">
                <Radio size={10} className="animate-pulse" />
                Streaming
              </span>
            </div>

            <div className="space-y-2 font-mono text-[11px]">
              <AnimatePresence initial={false}>
                {logs.slice(0, 3).map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="p-2 rounded-lg bg-navy/5 border border-navy/5 flex items-start gap-2"
                  >
                    <span className="text-navy/40 shrink-0 text-[10px] mt-0.5">
                      {log.time}
                    </span>
                    <span
                      className={`text-[9px] px-1 rounded uppercase font-bold shrink-0 mt-0.5 ${
                        log.type === "teal" ? "bg-teal/20 text-teal" : "bg-sand/20 text-sand"
                      }`}
                    >
                      {log.tag}
                    </span>
                    <span className="text-navy/80 text-[11px] leading-tight truncate">
                      {log.text}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCommandSimulator;
