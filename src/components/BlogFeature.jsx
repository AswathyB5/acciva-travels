import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import AnimatedImage from "./AnimatedImage";

const cardVariants = {
  hidden: (i) =>
    i === 1
      ? { opacity: 0, y: 50 }
      : { opacity: 0, x: i === 0 ? -50 : 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const BlogCard = ({ post, index }) => (
  <motion.article
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(7,26,36,0.07)] hover:shadow-[0_12px_40px_rgba(7,26,36,0.14)] transition-shadow duration-500"
  >
    {/* Image */}
    <div className="relative overflow-hidden h-52 shrink-0">
      <AnimatedImage
        src={post.image}
        alt={post.title}
        effect={index % 2 === 0 ? "zoom-in" : "zoom-out"}
        delay={index * 0.1}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Category pill */}
      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-midnight/70 backdrop-blur-sm text-sand text-[10px] font-semibold tracking-widest uppercase">
        <Tag size={10} />
        {post.category}
      </span>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-6 gap-3">
      {/* Date */}
      <p className="flex items-center gap-1.5 text-navy/40 text-xs font-medium">
        <Calendar size={12} />
        {post.date}
      </p>

      {/* Title */}
      <h3 className="font-display text-navy text-xl sm:text-2xl leading-snug tracking-tight group-hover:text-teal transition-colors duration-300">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-slate-600 text-[15px] font-normal leading-relaxed line-clamp-3 flex-1">
        {post.excerpt}
      </p>

      {/* Read more */}
      <NavLink
        to="/blog"
        className="mt-2 inline-flex items-center gap-1.5 text-teal font-semibold text-xs tracking-widest uppercase hover:gap-2.5 transition-all duration-300"
      >
        Read More
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </NavLink>
    </div>
  </motion.article>
);

const BlogFeature = ({ posts }) => (
  <div>
    {/* 3-column card grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post, i) => (
        <BlogCard key={post.slug} post={post} index={i} />
      ))}
    </div>

    {/* CTA — redirect to blog page */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.3 }}
      className="mt-12 flex justify-center"
    >
      <NavLink
        to="/blog"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-navy/20 text-navy font-bold text-sm tracking-widest uppercase hover:bg-navy hover:text-ivory hover:border-navy transition-all duration-300 shadow-sm hover:shadow-xl"
      >
        Read All Stories
        <ArrowUpRight size={16} />
      </NavLink>
    </motion.div>
  </div>
);

export default BlogFeature;
