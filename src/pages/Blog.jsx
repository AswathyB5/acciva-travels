import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import AnimatedImage from "../components/AnimatedImage";
import { blogPosts } from "../data/content";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(blogPosts.map((post) => post.category).filter(Boolean))
    );
    return ["All", ...unique];
  }, []);

  const filteredPosts = useMemo(
    () =>
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* SUBPAGE HEADER: CLEAN WHITE/SOFT SECTION WITH HERO SHOWCASE IMAGE    */}
      {/* ========================================================================= */}
      <section
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://dam.alfuttaim.com/dx/api/dam/v1/collections/26711d2e-640a-4167-bd6a-a2f1ebd504d6/items/cf0b0423-4519-4326-981d-a3f8f580513e/renditions/6063f964-039e-4fa3-93dd-2903c8ebc68c?binary=true&mformat=true')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Light overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        <div className="container-px relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider">
            <NavLink to="/" className="hover:text-teal transition-colors text-navy/70 font-bold">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">The Journal</span>
          </div>

          {/* Title & Intro Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">Mobility Intelligence & Insights</span>

              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                Stories, Tech & <br />
                <span className="italic text-teal font-normal">
                  Fleet Innovation.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="max-w-md text-navy/90 text-[15px] font-medium leading-relaxed pb-2"
            >
              Explore key industry insights on corporate employee transportation, AI dispatch telematics, EV sustainability, and mobility benchmarks across India.
            </motion.p>
          </div>


        </div>
      </section>

      {/* ========================================================================= */}
      {/* CATEGORY FILTER & ARTICLES GRID WITH STAGGER ANIMATIONS              */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-soft">
        <div className="px-5 md:px-8 xl:px-12 2xl:px-16">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-teal text-white shadow-md"
                    : "bg-white text-navy/60 border border-navy/10 hover:border-teal/40 hover:text-teal"
                }`}
              >
                {category}
              </button>
            ))}
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
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="rounded-3xl bg-white border border-navy/10 hover:border-teal/40 hover:shadow-[0_25px_60px_rgba(38,55,74,0.12)] transition-[border-color,box-shadow] duration-500 flex flex-col justify-between overflow-hidden group relative shadow-[0_10px_35px_rgba(38,55,74,0.05)]"
                >
                  <NavLink to={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={post.title} />

                  {/* Subtle top shimmer sweep on card hover — matches ServiceList/About card pattern */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                  {/* Article Card Photo */}
                  <div className="relative h-56 w-full overflow-hidden bg-white">
                    <AnimatedImage
                      src={post.image}
                      alt={post.title}
                      effect={i % 2 === 0 ? "zoom-in" : "zoom-out"}
                      delay={(i % 3) * 0.08}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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

                      <p className="text-slate-600 text-[15px] font-normal leading-relaxed mt-3 line-clamp-3">
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
      {/* NEWSLETTER & MOBILITY INTELLIGENCE SUBSCRIPTION WITH VIDEO BG        */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft text-navy relative overflow-hidden">
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
            Monthly Fleet Dispatch Digest
          </span>

          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight mb-6">
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

          <p className="mt-6 text-slate-700 text-[15px] font-normal max-w-xl mx-auto leading-relaxed">
            Subscribe to receive quarterly whitepapers, EV transition benchmarks, and tech park transit optimization case studies.
          </p>

          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
          >
            <span>Book Now</span>
            <ArrowUpRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Blog;








