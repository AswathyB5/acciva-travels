import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-9 h-9 flex items-center justify-center rounded-full border border-navy/15 text-navy/60 hover:text-soft hover:bg-teal hover:border-teal transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-soft text-navy pt-24 pb-10 border-t border-navy/10">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 pb-16 border-b border-navy/10">
          <div className="space-y-4 max-w-sm">
            <img
              src="/acciva-logo.png"
              alt="Acciva Travels"
              className="h-12 sm:h-14 w-auto object-contain opacity-95"
            />
            <p className="text-xs font-mono text-navy/50 uppercase tracking-widest leading-relaxed">
              Pan-India Corporate Mobility Benchmark • 24/7 Dedicated Command Tower
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-20 shrink-0">
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="eyebrow text-navy/60 hover:text-teal transition-colors"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="space-y-3 text-sm">
              <p className="text-navy/60">
                <a href="mailto:info@accivatravels.com" className="hover:text-teal transition-colors">
                  info@accivatravels.com
                </a>
              </p>
              <p className="text-navy/60">
                <a href="tel:+919035012166" className="hover:text-teal transition-colors">
                  +91 903 501 2166
                </a>
              </p>
              <p className="text-navy/40 max-w-[220px]">
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="eyebrow text-navy/40">© 2026 Acciva Travels</p>
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
