import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Clock,
  Car,
  Users,
  ArrowUpRight,
  Award,
} from "lucide-react";
import ServiceList from "../components/ServiceList";
import Magnetic from "../components/Magnetic";
import AnimatedImage from "../components/AnimatedImage";
import { services } from "../data/content";

const Services = () => {
  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* SUBPAGE HEADER: CLEAN WHITE/SOFT SECTION WITH HERO SHOWCASE IMAGE    */}
      {/* ========================================================================= */}
      <section
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XMRtF5FrYcjM5vMeWg8KtJOKuYgPyxxr8TqEz62sVFziSolGhfrIs6Y&s=10')`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Light overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        <div className="container-px relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider">
            <NavLink
              to="/"
              className="hover:text-teal transition-colors text-navy/70 font-bold"
            >
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Services</span>
          </div>

          {/* Title & Intro Row with Staggered Fade Up */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">Enterprise Solutions</span>
              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                Corporate Mobility & Fleet Solutions{" "}
                <span className="italic text-teal font-normal">At Scale.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="max-w-md text-navy/90 text-[15px] font-medium leading-relaxed pb-2"
            >
              End-to-end employee transportation, tech park shuttle networks,
              executive transit, and airport transfers managed with 99.8%
              on-time precision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SERVICES CATALOGUE GRID                                              */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <span className="eyebrow text-teal">Our Fleet Offerings</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
                Tailored Mobility{" "}
                <span className="italic text-teal font-normal">Programs.</span>
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] font-normal leading-relaxed max-w-md">
              Explore our comprehensive range of specialized transport
              capabilities designed for corporate technology parks, GCCs, and
              enterprise teams.
            </p>
          </motion.div>

          <ServiceList services={services} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CINEMATIC MAGNETIC CLOSING CTA WITH BACKGROUND VIDEO                 */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-soft text-navy relative overflow-hidden">
        {/* Background Video & Overlays */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-ocean.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-soft/95 via-soft/85 to-soft/95 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none" />
        {/* Corner quarter-circle accents — same motif as the About page's cards */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-4xl mx-auto">
          <span className="eyebrow text-teal inline-block">
            Enterprise Mobility Consulting
          </span>

          <motion.div
            className="mx-auto my-6 h-px w-16 bg-sand/60"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
            {[
              { text: "Ready to Optimize Your", cls: "" },
              {
                text: "Company Transportation?",
                cls: "italic text-teal font-normal",
              },
            ].map((line, i) => (
              <span className="line-mask block" key={line.text}>
                <motion.span
                  initial={{ y: "40%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.12,
                  }}
                  className={`block ${line.cls}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          <p className="mt-6 text-slate-700 text-[15px] font-normal max-w-2xl mx-auto leading-relaxed">
            Get a tailored fleet proposal with live telemetry integration,
            automated shift rostering, and dedicated command support.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Magnetic strength={20}>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-sand text-navy font-bold text-sm sm:text-base hover:bg-navy hover:text-ivory hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span>Request Enterprise Quote</span>
                <ArrowUpRight size={18} />
              </NavLink>
            </Magnetic>

            <Magnetic strength={15}>
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-navy/20 bg-white text-navy hover:bg-navy/5 hover:border-navy/40 transition-all text-sm font-medium"
              >
                <span>Learn About Our Standards</span>
              </NavLink>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;








