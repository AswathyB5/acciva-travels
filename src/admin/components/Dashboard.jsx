import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Mail, Truck } from "lucide-react";
import { collections } from "../collectionsConfig";
import { pages } from "../pagesConfig";
import { api } from "../lib/api";

const useCounts = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    Promise.resolve().then(async () => {
      const entries = await Promise.all(
        collections.map(async (c) => {
          try {
            const items = await api.list(c.key);
            return [c.key, items.length];
          } catch {
            return [c.key, null];
          }
        })
      );
      setCounts(Object.fromEntries(entries));
    });
  }, []);

  return counts;
};

const Dashboard = () => {
  const counts = useCounts();

  return (
    <div>
      <div className="bg-navy rounded-2xl p-7 flex items-center gap-5 text-white">
        <div className="w-12 h-12 rounded-2xl bg-teal flex items-center justify-center shrink-0">
          <Truck size={22} />
        </div>
        <div>
          <p className="font-display font-bold text-xl">Welcome back</p>
          <p className="text-ivory/60 text-sm mt-0.5">
            Pick a page below to edit its text, or open the Content Library to manage lists like services and blog posts.
          </p>
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mt-9 mb-3">
        Pages &mdash; Edit Any Section
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((p) => {
          const Icon = p.icon;
          return (
            <NavLink
              key={p.key}
              to={`/admin/pages/${p.key}`}
              className="group bg-white rounded-2xl border border-navy/10 p-5 hover:border-teal/50 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <ArrowRight
                  size={18}
                  className="text-navy/20 group-hover:text-teal group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <p className="font-display font-bold text-navy mt-4">{p.label}</p>
              <p className="text-xs text-navy/45 mt-1 line-clamp-2">{p.description}</p>
            </NavLink>
          );
        })}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mt-9 mb-3">
        Content Library &mdash; Lists Shown Across Pages
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {collections.map((c) => {
          const Icon = c.icon;
          const count = counts[c.key];
          return (
            <NavLink
              key={c.key}
              to={`/admin/content/${c.key}`}
              className="group bg-white rounded-2xl border border-navy/10 p-5 hover:border-teal/50 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-sand/40 text-navy flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <ArrowRight
                  size={18}
                  className="text-navy/20 group-hover:text-teal group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <p className="font-display font-bold text-navy mt-4">{c.label}</p>
              <p className="text-xs text-navy/45 mt-1">
                {count === null ? "Unavailable" : count === undefined ? "Loading..." : `${count} ${count === 1 ? "entry" : "entries"}`}
              </p>
            </NavLink>
          );
        })}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mt-9 mb-3">Form Submissions</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <NavLink
          to="/admin/submissions/contact"
          className="group bg-white rounded-2xl border border-navy/10 p-5 hover:border-teal/50 hover:shadow-lg transition-all flex items-center gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-sand/40 text-navy flex items-center justify-center shrink-0">
            <Mail size={20} />
          </div>
          <div className="min-w-0">
            <p className="font-display font-bold text-navy">Contact Enquiries</p>
            <p className="text-xs text-navy/45 mt-0.5">Messages submitted via the Contact page.</p>
          </div>
          <ArrowRight
            size={18}
            className="ml-auto shrink-0 text-navy/20 group-hover:text-teal group-hover:translate-x-0.5 transition-all"
          />
        </NavLink>

        <NavLink
          to="/admin/submissions/partner"
          className="group bg-white rounded-2xl border border-navy/10 p-5 hover:border-teal/50 hover:shadow-lg transition-all flex items-center gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-sand/40 text-navy flex items-center justify-center shrink-0">
            <Mail size={20} />
          </div>
          <div className="min-w-0">
            <p className="font-display font-bold text-navy">Partner Applications</p>
            <p className="text-xs text-navy/45 mt-0.5">Driver/vehicle sign-ups from the Careers page.</p>
          </div>
          <ArrowRight
            size={18}
            className="ml-auto shrink-0 text-navy/20 group-hover:text-teal group-hover:translate-x-0.5 transition-all"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
