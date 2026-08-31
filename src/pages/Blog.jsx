import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  Clock,
  Calendar,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Send,
  CheckCircle2,
  TrendingUp,
  Zap,
  ShieldCheck,
  Award,
} from "lucide-react";
import Magnetic from "../components/Magnetic";
import { blogPosts, blogCategories } from "../data/content";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const filteredPosts = useMemo(
    () =>
      blogPosts.filter(
        (p) => activeCategory === "All" || p.category === activeCategory
      ),
    [activeCategory]
  );

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

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
            <span className="text-teal font-semibold">The Journal</span>
          </div>

          {/* Title & Intro Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">01 — Mobility Intelligence & Insights</span>

              <h1 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.08] mt-6 tracking-tight">
                Stories, Tech & <br />
                <span className="italic text-teal font-normal">
                  Fleet Innovation.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="max-w-md text-navy/70 text-base sm:text-lg font-light leading-relaxed pb-2"
            >
              Explore key industry insights on corporate employee transportation, AI dispatch telematics, EV sustainability, and mobility benchmarks across India.
            </motion.p>
          </div>

          {/* Prominent Header Showcase Image Banner */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 mb-12 group"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
              alt="Acciva Corporate Mobility Intelligence & Tech"
              className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <BookOpen size={22} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl text-navy font-bold">25+ Articles</p>
                <p className="text-[11px] font-mono text-navy/50 uppercase">Research & Guides</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <Zap size={22} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl text-teal font-bold">EV & AI</p>
                <p className="text-[11px] font-mono text-navy/50 uppercase">Smart Telematics</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <TrendingUp size={22} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl text-navy font-bold">50K+ Monthly</p>
                <p className="text-[11px] font-mono text-navy/50 uppercase">Active Readers</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl text-teal font-bold">100% Verified</p>
                <p className="text-[11px] font-mono text-navy/50 uppercase">SLA Benchmarks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — CATEGORY FILTER & ARTICLES GRID WITH STAGGER ANIMATIONS              */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-32 bg-soft">
        <div className="container-px">
          {/* Animated Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-14 pb-6 border-b border-navy/10">
            {blogCategories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer relative ${
                    isSelected
                      ? "bg-navy text-ivory font-bold shadow-md scale-105"
                      : "bg-white border border-navy/10 text-navy/70 hover:border-teal/40 hover:text-teal"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Articles Stagger Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl bg-white border border-navy/10 hover:border-teal/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative shadow-md"
                >
                  {/* Article Card Photo */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Article Card Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                    <div>
                      {/* Category & Date */}
                      <div className="flex items-center justify-between mb-3 text-xs font-mono text-navy/50">
                        <span className="px-3 py-1 rounded-full bg-teal/10 text-teal text-[11px] font-bold uppercase">
                          {post.category || "Transit Tech"}
                        </span>
                        <span>{post.date}</span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl text-navy font-bold leading-snug group-hover:text-teal transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-navy/70 leading-relaxed font-light mt-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer / Read Time */}
                    <div className="pt-4 border-t border-navy/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-navy/40 flex items-center gap-1.5">
                        <Clock size={12} />
                        <span>{post.readTime || "4 min read"}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-navy group-hover:text-teal transition-colors">
                        <span>Read Full Story</span>
                        <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — NEWSLETTER & MOBILITY INTELLIGENCE SUBSCRIPTION WITH VIDEO BG        */}
      {/* ========================================================================= */}
      <section className="py-14 md:py-20 bg-soft text-navy relative overflow-hidden border-t border-navy/10">
        {/* Background Video Loop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-mountains.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-soft/95 via-soft/85 to-soft/95 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none" />
        {/* Corner quarter-circle accents — same motif as the About page's cards */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sand/25 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/20 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-3xl mx-auto">
          <span className="eyebrow text-teal inline-block mb-6">
            02 — Monthly Fleet Dispatch Digest
          </span>

          <h2 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight mb-6">
            {[
              { text: "Stay Ahead in Corporate", cls: "" },
              { text: "Mobility Innovation.", cls: "italic text-teal font-normal" },
            ].map((line, i) => (
              <span className="line-mask block" key={line.text}>
                <motion.span
                  initial={{ y: "40%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                  className={`block ${line.cls}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          <p className="mt-6 text-navy/70 text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Subscribe to receive quarterly whitepapers, EV transition benchmarks, and tech park transit optimization case studies.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 p-5 rounded-2xl bg-teal/10 border border-teal/40 text-navy inline-flex items-center gap-3 text-sm font-semibold"
            >
              <CheckCircle2 size={20} className="text-teal" />
              <span>Thank you for subscribing to Acciva Mobility Intelligence!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your corporate email"
                className="flex-1 px-5 py-3.5 rounded-full bg-white border border-navy/15 text-navy placeholder:text-navy/40 text-sm focus:outline-none focus:border-teal transition-colors"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-sand text-navy font-bold text-xs font-mono uppercase tracking-wider hover:bg-navy hover:text-ivory transition-all shrink-0 cursor-pointer shadow-lg"
              >
                <span>Subscribe</span>
              </button>
            </form>
          )}

          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-ivory hover:border-navy transition-all text-xs font-mono uppercase tracking-wider font-semibold"
          >
            <span>Book Now</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Blog;
