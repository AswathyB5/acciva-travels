import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import RevealImage from "./RevealImage";

const BlogFeature = ({ featured, rest }) => (
  <div>
    <NavLink to="/blog" className="group relative block">
      <RevealImage
        src={featured.image}
        alt={featured.title}
        className="h-[55vh] md:h-[85vh]"
        imgClassName="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-midnight/80 via-midnight/10 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-14">
        <span className="eyebrow text-sand mb-4">{featured.category}</span>
        <h3 className="font-display italic text-ivory text-4xl sm:text-5xl md:text-7xl max-w-3xl leading-tight">
          {featured.title}
        </h3>
        <p className="eyebrow text-ivory/50 mt-6">{featured.date}</p>
      </div>
    </NavLink>

    <div className="mt-6 md:mt-10">
      {rest.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <NavLink
            to="/blog"
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-7 border-t border-navy/10 last:border-b"
          >
            <div className="flex items-baseline gap-5">
              <span className="eyebrow opacity-40">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="font-display text-xl sm:text-2xl md:text-3xl group-hover:italic transition-all">
                {post.title}
              </h4>
            </div>
            <span className="eyebrow opacity-50 shrink-0">{post.category}</span>
          </NavLink>
        </motion.div>
      ))}
    </div>
  </div>
);

export default BlogFeature;
