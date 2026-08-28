import { NavLink } from "react-router-dom";
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
import { services } from "../data/content";

const Services = () => {
  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* 01 — SUBPAGE HEADER: CLEAN WHITE/SOFT SECTION WITH HERO SHOWCASE IMAGE    */}
      {/* ========================================================================= */}
      <section className="pt-36 sm:pt-44 pb-14 md:pb-20 bg-soft border-b border-navy/10">
        <div className="container-px">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-navy/40 mb-6 uppercase tracking-wider">
            <NavLink to="/" className="hover:text-teal transition-colors">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Services</span>
          </div>

          {/* Title & Intro Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[11px] font-mono tracking-widest uppercase font-semibold">
                  Enterprise Solutions
                </span>
                <span className="text-xs font-mono text-navy/40">
                  Pan-India Corporate Fleet Network
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-navy leading-[1.04] tracking-tight">
                Corporate Mobility & <br />
                <span className="italic text-teal font-normal">
                  Fleet Solutions Engineered for Scale.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-navy/70 text-base sm:text-lg font-light leading-relaxed pb-2">
              End-to-end employee transportation, tech park shuttle networks, executive transit, and airport transfers managed with 99.8% on-time precision.
            </p>
          </div>

          {/* Prominent Header Showcase Image Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 mb-12 group">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1800&q=80"
              alt="Acciva Corporate Fleet Solutions"
              className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <Car size={22} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl text-navy font-bold">5,000+ Cabs</p>
                <p className="text-[11px] font-mono text-navy/50 uppercase">Pan-India Fleet</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl text-teal font-bold">99.8% SLA</p>
                <p className="text-[11px] font-mono text-navy/50 uppercase">Shift Punctuality</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl text-navy font-bold">100% Vetted</p>
                <p className="text-[11px] font-mono text-navy/50 uppercase">Background Checks</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <Users size={22} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl text-teal font-bold">24/7 ERT</p>
                <p className="text-[11px] font-mono text-navy/50 uppercase">Command Tower</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — SERVICES CATALOGUE GRID                                              */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-32 bg-soft">
        <div className="container-px">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-navy/10 gap-6">
            <div>
              <span className="eyebrow text-teal">Our Fleet Offerings</span>
              <h2 className="font-display text-3xl sm:text-5xl text-navy mt-2">
                Tailored Mobility Programs
              </h2>
            </div>
            <p className="text-navy/60 text-sm sm:text-base max-w-md font-light">
              Explore our comprehensive range of specialized transport capabilities designed for corporate technology parks, GCCs, and enterprise teams.
            </p>
          </div>

          <ServiceList services={services} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — CINEMATIC MAGNETIC CLOSING CTA WITH BACKGROUND VIDEO                 */}
      {/* ========================================================================= */}
      <section className="py-28 md:py-40 bg-midnight text-ivory relative overflow-hidden border-t border-ivory/15">
        {/* Background Video & Overlays */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-ocean.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-midnight/85 via-midnight/60 to-midnight/85 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-mono uppercase tracking-widest mb-6">
            <Award size={14} />
            <span>Enterprise Mobility Consulting</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-ivory leading-tight drop-shadow-md">
            Ready to Optimize Your <br />
            <span className="italic text-sand font-normal">Company Transportation?</span>
          </h2>

          <p className="mt-6 text-ivory/80 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Get a tailored fleet proposal with live telemetry integration, automated shift rostering, and dedicated command support.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Magnetic strength={20}>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-sand text-navy font-bold text-sm sm:text-base hover:bg-white hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span>Request Enterprise Quote</span>
                <ArrowUpRight size={18} />
              </NavLink>
            </Magnetic>

            <Magnetic strength={15}>
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ivory/20 bg-white/5 text-ivory hover:bg-white/10 hover:border-ivory/40 transition-all text-sm font-medium backdrop-blur-xs"
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
