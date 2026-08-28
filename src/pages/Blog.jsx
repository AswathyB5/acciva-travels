import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import RevealImage from "../components/RevealImage";
import SplitText from "../components/SplitText";
import { blogPosts, blogCategories } from "../data/content";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured);
  const rest = useMemo(
    () =>
      blogPosts
        .filter((p) => !p.featured)
        .filter((p) => activeCategory === "All" || p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <section className="pt-56 pb-16 md:pt-64 md:pb-24 bg-soft">
        <div className="container-px">
          <span className="eyebrow text-teal">The Journal</span>
          <SplitText
            lines={["Travel Stories", "& Inspiration."]}
            className="font-display text-navy text-[13vw] sm:text-7xl md:text-8xl leading-[0.95] mt-6"
          />
        </div>
      </section>

      {featured && (
        <section className="bg-soft pb-24 md:pb-32">
          <div className="container-px">
            <NavLink to="/blog" className="group relative block">
              <RevealImage
                src={featured.image}
                alt={featured.title}
                className="h-[55vh] md:h-[85vh]"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight/80 via-midnight/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-14">
                <span className="eyebrow text-sand mb-4">Travel Guide</span>
                <h3 className="font-display italic text-ivory text-4xl sm:text-5xl md:text-7xl max-w-3xl leading-tight">
                  {featured.title}
                </h3>
                <p className="eyebrow text-ivory/50 mt-6">{featured.date}</p>
              </div>
            </NavLink>
          </div>
        </section>
      )}

      <section className="bg-soft pb-32 md:pb-48">
        <div className="container-px">
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-16 border-t border-b border-navy/10 py-6">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`eyebrow transition-colors duration-300 ${
                  activeCategory === cat ? "text-teal" : "text-navy/40 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div>
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              >
                <NavLink
                  to="/blog"
                  className="group grid sm:grid-cols-12 items-center gap-4 sm:gap-8 py-8 border-t border-navy/10 last:border-b"
                >
                  <span className="sm:col-span-1 eyebrow opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:col-span-2 h-32 sm:h-20 overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="sm:col-span-6">
                    <h4 className="font-display text-2xl md:text-3xl group-hover:italic transition-all">
                      {post.title}
                    </h4>
                    <p className="text-navy/50 mt-2 max-w-md hidden md:block">{post.excerpt}</p>
                  </div>
                  <span className="sm:col-span-2 eyebrow opacity-50">{post.category}</span>
                  <span className="sm:col-span-1 text-2xl justify-self-end transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                    &#8599;
                  </span>
                </NavLink>
              </motion.div>
            ))}
          </div>

          {rest.length === 0 && (
            <p className="text-center text-navy/40 mt-10 eyebrow">No articles in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
