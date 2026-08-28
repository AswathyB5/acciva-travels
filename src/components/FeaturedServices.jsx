import { NavLink } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { services } from "../data/content";

const FeaturedServices = () => {
  // Select the top 3 flagship solutions for the homepage
  const featured = services.slice(0, 3);

  return (
    <div>
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-navy/10 gap-6">
        <div>
          <span className="eyebrow text-teal">04 — What We Offer</span>
          <h2 className="font-display text-3xl sm:text-5xl text-navy mt-2 leading-tight">
            Corporate Mobility Solutions <br />
            <span className="italic text-teal font-normal">Built Around Your Enterprise.</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <NavLink
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-ivory text-xs font-mono font-semibold hover:bg-teal transition-all shadow-xs shrink-0 group"
          >
            <span>Explore All 6+ Services</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>
        </div>
      </div>

      {/* 3 Flagship Featured Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.slug}
              className="rounded-3xl bg-white border border-navy/10 hover:border-teal/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Image Container - Clean Without Small Overlay Cards */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[10px] font-mono uppercase font-bold tracking-wider">
                      {service.tag}
                    </span>
                    <span className="text-xs font-mono text-navy/40 font-bold">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-navy font-bold leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-navy/70 leading-relaxed font-light mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-2 pt-2 border-t border-navy/10">
                  {service.features.slice(0, 2).map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-teal shrink-0" />
                      <span className="text-[11px] text-navy/80 font-medium truncate">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-navy/10 flex items-center justify-between">
                  <NavLink
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-navy hover:text-teal transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight size={13} />
                  </NavLink>
                  <span className="text-[10px] font-mono text-navy/40 uppercase">
                    SLA Backed
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Service Capability Strip */}
      <div className="mt-12 p-6 rounded-3xl bg-linear-to-r from-teal/10 via-navy/5 to-sand/15 border border-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal/20 text-teal flex items-center justify-center shrink-0">
            <Sparkles size={20} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-teal font-bold">
              Full Spectrum Fleet Management
            </p>
            <p className="text-xs text-navy/70 mt-0.5 font-light">
              Also offering Staff Bus Shuttles, Corporate Ad-Hoc VIP Delegations & Inter-City Transit.
            </p>
          </div>
        </div>

        <NavLink
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-ivory text-xs font-mono font-semibold hover:bg-teal transition-all shrink-0 shadow-xs"
        >
          <span>View All Solutions</span>
          <ArrowUpRight size={14} />
        </NavLink>
      </div>
    </div>
  );
};

export default FeaturedServices;
