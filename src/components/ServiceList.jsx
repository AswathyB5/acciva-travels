import { NavLink } from "react-router-dom";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const ServiceList = ({ services }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <div
            key={service.slug}
            className="rounded-3xl bg-white border border-navy/10 hover:border-teal/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            {/* Top Image Showcase - Clean Without Small Cards */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Content & Features */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
              <div>
                {/* Header Tag and Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[11px] font-mono tracking-wider uppercase font-semibold">
                    {service.tag}
                  </span>
                  <span className="text-xs font-mono text-navy/40 font-bold">
                    0{i + 1}
                  </span>
                </div>

                {/* Service Title with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-navy font-bold leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-navy/70 leading-relaxed font-light mt-2">
                  {service.description}
                </p>
              </div>

              {/* 4 Feature Bullet Points */}
              {service.features && (
                <div className="grid sm:grid-cols-2 gap-2.5 pt-4 border-t border-navy/10">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-teal shrink-0" />
                      <span className="text-xs text-navy/80 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 border-t border-navy/10 flex items-center justify-between">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-ivory text-xs font-mono font-semibold hover:bg-teal transition-all group/btn shadow-xs"
                >
                  <span>Book / Inquire Fleet</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </NavLink>
                <span className="text-[11px] font-mono text-navy/40 uppercase">
                  Contract & On-Demand
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceList;
