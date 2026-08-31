import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
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
            src={solid ? "/acciva-logo.png" : "/acciva-logo-white.png"}
            alt="Acciva Travels"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </NavLink>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
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
          ))}
        </ul>

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
                      `font-display text-3xl py-3 block border-b border-navy/10 ${
                        isActive ? "text-teal" : "text-navy"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
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
