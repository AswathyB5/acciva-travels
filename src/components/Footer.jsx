import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/blog", label: "Journal" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-9 h-9 flex items-center justify-center rounded-full border border-navy/15 text-navy/60 hover:text-soft hover:bg-teal hover:border-teal transition-colors duration-300 shrink-0"
  >
    {children}
  </a>
);

const FooterHeading = ({ children }) => (
  <p className="eyebrow text-teal mb-6">{children}</p>
);

const Footer = () => {
  return (
    <footer className="bg-soft text-navy pt-16 md:pt-20 pb-8 border-t border-navy/10">
      <div className="container-px">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-navy/10">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <img
              src="/acciva-logo.png"
              alt="Acciva Travels"
              className="h-12 sm:h-14 w-auto object-contain opacity-95"
            />
            <p className="text-navy/65 text-sm leading-relaxed max-w-sm font-light">
              Acciva Travels is Pan-India's leading corporate employee transport partner &mdash; delivering safe, punctual, and technology-driven mobility for enterprises and GCCs.
            </p>
            <p className="text-[11px] font-mono text-teal uppercase tracking-widest font-semibold">
              24/7 Dedicated Command Tower
            </p>
          </div>

          {/* Quick Links column */}
          <div className="lg:col-span-3">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="grid grid-cols-2 grid-flow-col grid-rows-3 gap-x-8 gap-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-sm text-navy/65 hover:text-teal transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-navy/30 group-hover:bg-teal group-hover:scale-150 transition-all duration-300 shrink-0" />
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-5">
            <FooterHeading>Get In Touch</FooterHeading>
            <ul className="grid sm:grid-cols-2 gap-4">
              <li>
                <a
                  href="tel:+919035012166"
                  className="group flex items-start gap-3 text-sm text-navy/65 hover:text-teal transition-colors duration-300"
                >
                  <span className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <Phone size={14} />
                  </span>
                  <span className="pt-1.5">+91 903 501 2166</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@accivatravels.com"
                  className="group flex items-start gap-3 text-sm text-navy/65 hover:text-teal transition-colors duration-300"
                >
                  <span className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <Mail size={14} />
                  </span>
                  <span className="pt-1.5 break-all">info@accivatravels.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy/65">
                <span className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </span>
                <span className="pt-1.5">Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy/65">
                <span className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">
                  <Clock size={14} />
                </span>
                <span className="pt-1.5">24/7/365 Non-Stop Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy/40 font-mono">
            &copy; 2026 Acciva Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <IconLink href="https://instagram.com" label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </IconLink>
            <IconLink href="https://facebook.com" label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </IconLink>
            <IconLink href="https://linkedin.com" label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="7" y1="10" x2="7" y2="17" />
                <circle cx="7" cy="7" r="0.6" fill="currentColor" />
                <path d="M12 17v-4.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17" />
              </svg>
            </IconLink>
            <IconLink href="https://youtube.com" label="YouTube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="6" width="18" height="12" rx="4" />
                <path d="M11 10l4 2-4 2z" fill="currentColor" stroke="none" />
              </svg>
            </IconLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
