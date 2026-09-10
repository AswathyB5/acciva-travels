import { NavLink, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, MessageSquare, Truck, LogOut, ExternalLink } from "lucide-react";
import { collections } from "../collectionsConfig";
import { pages } from "../pagesConfig";
import { useAuth } from "../lib/useAuth";

const navItemClass = ({ isActive }) =>
  `flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
    isActive ? "bg-teal text-white shadow-sm" : "text-ivory/70 hover:bg-white/10 hover:text-ivory"
  }`;

const sectionLabelClass = "px-3 text-[11px] uppercase tracking-wider font-semibold text-ivory/35 mt-6 mb-2";

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
    <div className="min-h-screen flex bg-ivory">
      <aside className="w-72 shrink-0 bg-navy text-ivory flex flex-col p-4">
        <div className="flex items-center gap-2.5 px-1 mb-2">
          <div className="w-9 h-9 rounded-xl bg-teal flex items-center justify-center shrink-0">
            <Truck size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <p className="font-display font-bold text-white leading-tight truncate">Acciva Admin</p>
            <p className="text-[11px] text-ivory/40 truncate">Content Control Center</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto mt-2">
          <p className={sectionLabelClass}>Overview</p>
          <NavLink to="/admin" end className={navItemClass}>
            <LayoutDashboard size={17} />
            Dashboard
          </NavLink>

          <p className={sectionLabelClass}>Pages</p>
          <div className="space-y-1">
            {pages.map((p) => {
              const Icon = p.icon;
              return (
                <NavLink key={p.key} to={`/admin/pages/${p.key}`} className={navItemClass}>
                  <Icon size={17} />
                  {p.label}
                </NavLink>
              );
            })}
          </div>

          <p className={sectionLabelClass}>Content Library</p>
          <div className="space-y-1">
            {collections.map((c) => {
              const Icon = c.icon;
              return (
                <NavLink key={c.key} to={`/admin/content/${c.key}`} className={navItemClass}>
                  <Icon size={17} />
                  {c.label}
                </NavLink>
              );
            })}
          </div>

          <p className={sectionLabelClass}>Form Submissions</p>
          <div className="space-y-1">
            <NavLink to="/admin/submissions/contact" className={navItemClass}>
              <MessageSquare size={17} />
              Contact Enquiries
            </NavLink>
            <NavLink to="/admin/submissions/partner" className={navItemClass}>
              <MessageSquare size={17} />
              Partner Applications
            </NavLink>
          </div>
        </nav>

        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-ivory/70 hover:bg-white/10 hover:text-ivory transition-colors mt-2"
        >
          <ExternalLink size={17} />
          View Live Site
        </a>

        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-sand text-navy flex items-center justify-center text-sm font-bold shrink-0">
              {initial}
            </div>
            <p className="text-sm font-medium text-ivory truncate">{username}</p>
          </div>
          <button
            onClick={logout}
            title="Log out"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-ivory/60 hover:bg-white/10 hover:text-white shrink-0"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 shrink-0 bg-white border-b border-navy/10 flex items-center px-6 md:px-10">
          <h1 className="font-display font-bold text-navy text-lg">{pageTitle(location.pathname)}</h1>
        </header>
        <main className="flex-1 min-w-0 p-6 md:p-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
