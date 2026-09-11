import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, MessageSquare, Truck, LogOut, ExternalLink, CornerDownRight } from "lucide-react";
import { collections } from "../collectionsConfig";
import { pages } from "../pagesConfig";
import { useAuth } from "../lib/useAuth";

const navItemClass = ({ isActive }) =>
  `group relative flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-teal/40 ${
    isActive
      ? "bg-teal text-white shadow-md shadow-teal/25"
      : "text-navy/70 hover:bg-navy/6 hover:text-navy"
  }`;

const subNavItemClass = ({ isActive }) =>
  `flex items-center gap-2 pl-2 pr-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-teal/40 ${
    isActive
      ? "bg-teal/90 text-white shadow-sm shadow-teal/25"
      : "text-navy/60 hover:bg-navy/6 hover:text-navy"
  }`;

const sectionLabelClass = "px-4 text-[10.5px] uppercase tracking-[0.12em] font-bold text-navy/40 mt-7 mb-2.5";

const topLevelPages = pages.filter((p) => !p.parent);
const childPagesOf = (key) => pages.filter((p) => p.parent === key);

function pageTitle(pathname) {
  if (pathname === "/admin" || pathname === "/admin/") return "Dashboard";
  const pageMatch = pages.find((p) => pathname.includes(`/pages/${p.key}`));
  if (pageMatch) return pageMatch.label;
  const collectionMatch = collections.find((c) => pathname.includes(`/content/${c.key}`));
  if (collectionMatch) return collectionMatch.label;
  if (pathname.includes("/submissions/contact")) return "Contact Enquiries";
  if (pathname.includes("/submissions/partner")) return "Driver / Partner Applications";
  return "Admin";
}

const Layout = () => {
  const { username, logout } = useAuth();
  const location = useLocation();
  const initial = username ? username.charAt(0).toUpperCase() : "A";

  return (
    <div className="h-screen flex bg-ivory overflow-hidden">
      <aside className="w-72 shrink-0 h-full bg-soft border-r border-navy/10 text-navy flex flex-col relative">
        <span className="absolute top-0 right-0 w-24 h-24 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
        <span className="absolute bottom-24 left-0 w-28 h-28 bg-sand/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2.5 px-4 pt-4 pb-3 relative shrink-0">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-9 h-9 rounded-xl bg-linear-to-br from-teal to-teal/70 shadow-md shadow-teal/25 flex items-center justify-center shrink-0"
          >
            <Truck size={18} className="text-white" />
          </motion.div>
          <div className="min-w-0">
            <p className="font-display font-bold text-navy leading-tight truncate">Acciva Admin</p>
            <p className="text-[11px] text-navy/55 truncate">Content Control Center</p>
          </div>
        </div>

        <div className="h-px mx-4 bg-navy/10 shrink-0" />

        <nav className="flex-1 min-h-0 overflow-y-auto px-3 pb-3 scrollbar-thin">
          <p className={sectionLabelClass}>Overview</p>
          <NavLink to="/admin" end className={navItemClass}>
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full bg-sand" />
                )}
                <LayoutDashboard size={17} className="shrink-0" />
                Dashboard
              </>
            )}
          </NavLink>

          <p className={sectionLabelClass}>Pages</p>
          <div className="space-y-1">
            {topLevelPages.map((p) => {
              const Icon = p.icon;
              const children = childPagesOf(p.key);
              return (
                <div key={p.key}>
                  <NavLink to={`/admin/pages/${p.key}`} className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full bg-sand" />
                        )}
                        <Icon size={17} className="shrink-0" />
                        <span className="truncate">{p.label}</span>
                      </>
                    )}
                  </NavLink>
                  {children.length > 0 && (
                    <div className="mt-1 ml-4 pl-3 border-l border-navy/10 space-y-1">
                      {children.map((c) => {
                        const CIcon = c.icon;
                        return (
                          <NavLink key={c.key} to={`/admin/pages/${c.key}`} className={subNavItemClass}>
                            <CornerDownRight size={13} className="shrink-0 opacity-60" />
                            <CIcon size={14} className="shrink-0" />
                            <span className="truncate">{c.label}</span>
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className={sectionLabelClass}>Content Library</p>
          <div className="space-y-1">
            {collections.map((c) => {
              const Icon = c.icon;
              return (
                <NavLink key={c.key} to={`/admin/content/${c.key}`} className={navItemClass}>
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full bg-sand" />
                      )}
                      <Icon size={17} className="shrink-0" />
                      <span className="truncate">{c.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          <p className={sectionLabelClass}>Form Submissions</p>
          <div className="space-y-1">
            <NavLink to="/admin/submissions/contact" className={navItemClass}>
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full bg-sand" />
                  )}
                  <MessageSquare size={17} className="shrink-0" />
                  Contact Enquiries
                </>
              )}
            </NavLink>
            <NavLink to="/admin/submissions/partner" className={navItemClass}>
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full bg-sand" />
                  )}
                  <MessageSquare size={17} className="shrink-0" />
                  Partner Applications
                </>
              )}
            </NavLink>
          </div>
        </nav>

        <div className="shrink-0 px-3 pb-3">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-navy/70 hover:bg-navy/6 hover:text-navy transition-colors outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
          >
            <ExternalLink size={17} className="shrink-0" />
            View Live Site
          </a>

          <div className="mt-2 pt-3 border-t border-navy/10 flex items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-sand to-sand/70 text-navy flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">
                {initial}
              </div>
              <p className="text-sm font-medium text-navy truncate">{username}</p>
            </div>
            <button
              onClick={logout}
              title="Log out"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-navy/60 hover:bg-navy/6 hover:text-navy shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 h-full flex flex-col">
        <header className="h-16 shrink-0 bg-white border-b border-navy/10 flex items-center px-6 md:px-10 relative overflow-hidden">
          <motion.h1
            key={pageTitle(location.pathname)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-display font-bold text-navy text-lg"
          >
            {pageTitle(location.pathname)}
          </motion.h1>
          <span className="absolute left-0 bottom-0 h-0.5 w-full bg-linear-to-r from-teal via-sand to-teal/40" />
        </header>
        <main className="flex-1 min-h-0 overflow-y-auto p-6 md:p-10">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
