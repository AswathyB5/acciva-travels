import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePageContent } from "../data/useContent";

const NAVBAR_DEFAULTS = {
  logoSolid: "/acciva-logo.png",
  logoTransparent: "/acciva-logo-white.png",
  ctaLabel: "Book Now",
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Technology", path: "/technology" },
    { label: "Journal", path: "/blog" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ],
  servicesDropdownLabel: "Employee Transportation Services",
};

const Navbar = () => {
  const { data: content } = usePageContent("navbar", NAVBAR_DEFAULTS);

  const links = (content.navLinks || []).map((l) => ({
    to: l.path,
    label: l.label,
  }));
  const servicesLink = links.find((l) => l.to === "/services");
  if (servicesLink) {
    servicesLink.children = [
      {
        to: "/services/employee-transportation-services",
        label: content.servicesDropdownLabel,
      },
    ];
  }

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const hasDarkHero = location.pathname === "/";
  const solid = scrolled || open || !hasDarkHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-soft/95 backdrop-blur-md border-b border-navy/10 py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-3 py-1 group"
        >
          <img
            src={solid ? content.logoSolid : content.logoTransparent}
            alt="Acciva Travels"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
        <ul className="flex items-center gap-8">
          {links.map((link) =>
            link.children ? (
              <li key={link.to} className="relative group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `eyebrow relative pb-1 transition-colors duration-300 inline-flex items-center gap-1.5 ${
                      isActive
                        ? "text-teal"
                        : solid
                        ? "text-navy/70 hover:text-navy"
                        : "text-ivory/70 hover:text-ivory"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative inline-flex items-center gap-1.5">
                      {link.label}
                      <ChevronDown
                        size={13}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                      <span
                        className={`absolute left-0 -bottom-1 h-px bg-teal transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>

                {/* Dropdown panel */}
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <ul className="relative w-max min-w-64 rounded-2xl bg-soft/95 backdrop-blur-md border border-navy/10 shadow-xl overflow-hidden py-2 pl-1">
                    <span className="absolute top-0 bottom-0 left-0 w-1 bg-linear-to-b from-teal via-sand to-teal" />
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                              isActive
                                ? "text-teal bg-teal/5"
                                : "text-navy/80 hover:text-teal hover:bg-teal/5"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `eyebrow relative pb-1 transition-colors duration-300 ${
                      isActive
                        ? "text-teal"
                        : solid
                        ? "text-navy/70 hover:text-navy"
                        : "text-ivory/70 hover:text-ivory"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative inline-block">
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-px bg-teal transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <NavLink
          to="/contact"
          className="inline-flex items-center px-6 py-2.5 rounded-full bg-sand text-navy font-semibold text-xs tracking-wide transition-all hover:shadow-lg shrink-0"
        >
          {content.ctaLabel}
        </NavLink>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`flex lg:hidden items-center gap-3 ${solid ? "text-navy" : "text-ivory"}`}
        >
          <span className="eyebrow">{open ? "Close" : "Menu"}</span>
          <span className="relative w-6 h-4">
            <span
              className={`absolute left-0 top-0 w-full h-px transition-transform duration-300 ${
                solid ? "bg-navy" : "bg-ivory"
              } ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 w-full h-px transition-transform duration-300 ${
                solid ? "bg-navy" : "bg-ivory"
              } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-soft border-t border-navy/10"
          >
            <ul className="container-px py-8 flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `font-display text-3xl py-3 block border-b ${
                        link.children ? "border-transparent" : "border-navy/10"
                      } ${isActive ? "text-teal" : "text-navy"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {link.children && (
                    <ul className="pl-4 pb-3 flex flex-col gap-1 border-b border-navy/10">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              `block py-2 text-sm font-semibold ${
                                isActive ? "text-teal" : "text-navy/70"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
