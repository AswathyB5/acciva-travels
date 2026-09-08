import { useId, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Boxes,
  Cog,
  Cpu,
  TrendingUp,
  ShieldCheck,
  MapPin,
  LifeBuoy,
  ClipboardCheck,
} from "lucide-react";

const reasons = [
  {
    title: "One-Stop Mobility",
    description: "Multiple transportation services under one partner.",
    icon: Boxes,
  },
  {
    title: "Operational Expertise",
    description: "Professionally managed transportation operations.",
    icon: Cog,
  },
  {
    title: "Technology Enabled",
    description: "Technology-supported visibility and control where available.",
    icon: Cpu,
  },
  {
    title: "Scalable Fleet",
    description: "Solutions from individual executives to large employee transportation programs.",
    icon: TrendingUp,
  },
  {
    title: "Professional Drivers",
    description: "Focus on safety, discipline and customer experience.",
    icon: ShieldCheck,
  },
  {
    title: "PAN India Capability",
    description: "Multi-city mobility based on genuine service coverage.",
    icon: MapPin,
  },
  {
    title: "Operational Support",
    description: "Support aligned to actual service commitments.",
    icon: LifeBuoy,
  },
  {
    title: "End-to-End Management",
    description: "From requirement and allocation through trip completion, reporting and billing.",
    icon: ClipboardCheck,
  },
];

const ROW_SIZE = 3;
const rawRows = [];
for (let i = 0; i < reasons.length; i += ROW_SIZE) {
  rawRows.push(reasons.slice(i, i + ROW_SIZE));
}

// Snake layout: even rows render left-to-right, odd rows render right-to-left
// (achieved by reversing the array), so the flow zig-zags row after row.
const rows = rawRows.map((row, i) =>
  i % 2 === 0
    ? row.map((r, idx) => ({ ...r, globalIdx: i * ROW_SIZE + idx }))
    : row
        .map((r, idx) => ({ ...r, globalIdx: i * ROW_SIZE + idx }))
        .reverse()
);

// A single ball relays through the whole snake: each row, then the curve down
// to the next row, one segment at a time, looping forever.
const segments = [];
rows.forEach((_, i) => {
  segments.push({ type: "row", idx: i });
  if (i < rows.length - 1) {
    segments.push({ type: "curve", idx: i, side: i % 2 === 0 ? "right" : "left" });
  }
});

const AccentCard = ({ item, isActive }) => {
  const isTeal = item.globalIdx % 2 === 0;
  const Icon = item.icon;
  const glow = isTeal ? "rgba(59,141,196,0.4)" : "rgba(225,197,157,0.55)";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 350, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 350, damping: 24 });

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
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.06, y: -6 }}
      animate={
        isActive
          ? { scale: 1.12, y: -12, boxShadow: `0 30px 60px ${glow}` }
          : { scale: 1, y: 0, boxShadow: "0 10px 30px rgba(38,55,74,0.06)" }
      }
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative z-40 mx-auto w-full max-w-65 rounded-3xl bg-white border-2 overflow-hidden ${
        isTeal ? "border-teal/30" : "border-sand/50"
      }`}
    >
      {/* Top sweep line — animates in when the traveling ball reaches this card (no color swap, just motion) */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-navy/5 overflow-hidden z-10">
        {isActive && (
          <motion.div
            key="sweep"
            className="h-full origin-left bg-linear-to-r from-teal via-sand to-teal"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </div>

      {/* Corner round pattern — same accent always, just pulses in place when active */}
      <motion.div
        className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full pointer-events-none origin-top-right ${
          isTeal ? "bg-teal/15" : "bg-sand/25"
        }`}
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="p-5 relative" style={{ transform: "translateZ(20px)" }}>
        <div
          className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
            isTeal ? "bg-teal/10 text-teal" : "bg-sand/20 text-navy"
          }`}
        >
          {/* Pulsing ring + glow on the icon when the traveling ball reaches this card */}
          {isActive && (
            <>
              <motion.span
                className={`absolute -inset-2 rounded-2xl border-2 pointer-events-none ${
                  isTeal ? "border-teal/60" : "border-sand/70"
                }`}
                initial={{ opacity: 0.8, scale: 0.85 }}
                animate={{ opacity: [0.8, 0], scale: [0.85, 1.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    `0 0 0px 0px ${glow}`,
                    `0 0 18px 7px ${glow}`,
                    `0 0 0px 0px ${glow}`,
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}
          <Icon size={26} className="stroke-[1.75] relative z-10" />
        </div>
        <h3 className="font-display text-navy text-lg font-bold leading-snug">{item.title}</h3>
        <p className="text-slate-600 text-[13px] leading-relaxed mt-2">{item.description}</p>
      </div>
    </motion.div>
  );
};

// ---- Curve tuning knobs ------------------------------------------------
// CURVE_SIZE   — overall scale of the curve (1 = default, 1.3 = 30% bigger, 0.7 = smaller)
// CURVE_BEND   — how far it bulges outward (1 = default, >1 more curved, <1 straighter/flatter)
// CURVE_REACH  — how far the tail stretches down into the next row's card (1 = default, bigger = further)
// ROW_GAP      — vertical space (px) reserved between two rows for the curve to sit in
const CURVE_SIZE = 1.25;
const CURVE_BEND = 1.3;
const CURVE_REACH = 2.2;
const ROW_GAP = 45;

// Base proportions (at CURVE_SIZE 1) for a box of BASE_W x BASE_H pixels.
const BASE_W = 120;
const BASE_H = 100;
const BASE_POINTS = {
  right: { start: 4, end: 40, bulge: 110 },
  left: { start: 116, end: 80, bulge: 10 },
};

// Builds the path + matching waypoints for the traveling ball, scaled by
// CURVE_SIZE and CURVE_BEND so both knobs affect the same geometry. CURVE_REACH
// only stretches the tail's length (end/control-point y), not its width.
const buildCurve = (side, size, bend, reach) => {
  const p = BASE_POINTS[side];
  const w = BASE_W * size;
  const h = BASE_H * size * reach;
  const start = p.start * size;
  const end = p.end * size;
  const mid = (start + end) / 2;
  const bulge = mid + (p.bulge * size - mid) * bend;
  const cp1y = h * 0.1;
  const cp2y = h * 0.9;
  return {
    w,
    h,
    d: `M${start} 0 C ${bulge} ${cp1y}, ${bulge} ${cp2y}, ${end} ${h}`,
    waypoints: { cx: [start, bulge, end], cy: [0, h * 0.45, h] },
  };
};

// Starting position of the curved connector (in pixels). Drag the curve on the
// live page to reposition it — its onDragEnd logs the new x/y to the browser
// console, so you can copy those numbers back in here to lock it in.
const CURVE_OFFSET = {
  right: { x: -11, y: -118 },
  left: { x: 1, y: -100 },
};

const RowCurve = ({ side, running, onDone, gradientId }) => {
  const isRight = side === "right";
  const base = CURVE_OFFSET[side];
  const geo = buildCurve(side, CURVE_SIZE, CURVE_BEND, CURVE_REACH);

  return (
    <div className="hidden lg:block absolute top-full left-0 right-0 z-30" style={{ height: ROW_GAP }}>
      <div
        style={{ transform: `translate(${base.x}px, ${base.y}px)` }}
        className={`absolute -top-2 ${isRight ? "right-0" : "left-0"}`}
      >
        <svg
          width={geo.w}
          height={geo.h}
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          fill="none"
          className="overflow-visible pointer-events-none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b8dc4" />
              <stop offset="50%" stopColor="#e1c59d" />
              <stop offset="100%" stopColor="#3b8dc4" />
            </linearGradient>
          </defs>
          {/* Grey by default */}
          <motion.path
            d={geo.d}
            stroke="#c7ced4"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Colored overlay — fades in only while the ball is passing through */}
          <motion.path
            d={geo.d}
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: running ? 1 : 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
          {running && (
            <motion.circle
              r="4"
              fill="#3b8dc4"
              initial={{
                cx: geo.waypoints.cx[0],
                cy: geo.waypoints.cy[0],
                opacity: 0,
              }}
              animate={{
                cx: geo.waypoints.cx,
                cy: geo.waypoints.cy,
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1] }}
              onAnimationComplete={onDone}
            />
          )}
        </svg>
      </div>
    </div>
  );
};

const StepRow = ({ row, rowIdx, running, onDone, curve, curveRunning, onCurveDone }) => {
  const [activeStep, setActiveStep] = useState(-1);
  const reversed = rowIdx % 2 === 1;
  const total = row.length;
  const gradientId = useId();

  // Node centers sit at fixed 3-column positions regardless of how many cards
  // are actually in this row, so a short last row doesn't leave a stray line
  // hanging past its final node.
  const leftPct = (0.5 / ROW_SIZE) * 100;
  const rightPct = 100 - ((total - 1 + 0.5) / ROW_SIZE) * 100;

  return (
    <div className="relative mb-2 lg:mb-0" style={curve ? { marginBottom: ROW_GAP } : undefined}>
      {/* Connecting line + traveling comet only — sits behind the cards (z-0)
          so it's visible only in the gaps between them, never over a card. */}
      {total > 1 && (
        <div
          className="hidden lg:block absolute top-9 h-px bg-navy/10 overflow-visible pointer-events-none z-0"
          style={{ left: `${leftPct}%`, right: `${rightPct}%` }}
        >
          <motion.div
            className={`h-full bg-linear-to-r from-teal via-sand to-teal ${reversed ? "origin-right" : "origin-left"}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          {running && (
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(59,141,196,0.55)]"
              initial={{ left: reversed ? "100%" : "0%", opacity: 0 }}
              animate={{ left: reversed ? "0%" : "100%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.4, ease: "easeInOut", times: [0, 0.08, 0.92, 1] }}
              onUpdate={(latest) => {
                const pct = parseFloat(latest.left);
                if (Number.isNaN(pct)) return;
                const step = Math.min(total - 1, Math.max(0, Math.round((pct / 100) * (total - 1))));
                setActiveStep((prev) => (prev === step ? prev : step));
              }}
              onAnimationComplete={onDone}
            />
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {row.map((r, colIdx) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: colIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-40"
          >
            <AccentCard item={r} isActive={running && activeStep === colIdx} />
          </motion.div>
        ))}
      </div>

      {curve && (
        <RowCurve side={curve.side} running={curveRunning} onDone={onCurveDone} gradientId={gradientId} />
      )}
    </div>
  );
};

const WhyAcciva = () => {
  const [phase, setPhase] = useState(0);
  const advance = () => setPhase((p) => (p + 1) % segments.length);

  return (
    <section className="relative bg-soft pt-4 md:pt-6 pb-16 md:pb-24">
      <div className="container-px relative z-10">
        {rows.map((row, rowIdx) => {
          const rowSegIdx = segments.findIndex((s) => s.type === "row" && s.idx === rowIdx);
          const curveSegIdx = segments.findIndex((s) => s.type === "curve" && s.idx === rowIdx);
          const curve = segments[curveSegIdx];
          return (
            <StepRow
              key={rowIdx}
              row={row}
              rowIdx={rowIdx}
              running={phase === rowSegIdx}
              onDone={advance}
              curve={curve}
              curveRunning={phase === curveSegIdx}
              onCurveDone={advance}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyAcciva;
