import { useState } from "react";
import { useParams, NavLink, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Clock, ArrowUpRight, ArrowLeft, RefreshCw } from "lucide-react";
import AnimatedImage from "../components/AnimatedImage";
import Seo from "../components/Seo";
import { blogPosts as fallbackBlogPosts } from "../data/content";
import { useCollection } from "../data/useContent";

// Renders any blog post created/edited through the admin CMS. Its "Full
// Content" field is free text — split on blank lines into paragraphs so
// editors can write normally without needing to hand-author markup.
const BlogPost = () => {
  const { slug } = useParams();
  const [retryKey, setRetryKey] = useState(0);
  const { items: blogPosts, loading, error } = useCollection("blog-posts", fallbackBlogPosts, retryKey);
  const post = blogPosts.find((p) => p.slug === slug);

  // Only bounce back to the listing once we've *confirmed* (a successful
  // fetch) that no such post exists — a network hiccup on this page's own
  // fetch must never silently kick the visitor back to /blog.
  if (!loading && !error && !post) {
    return <Navigate to="/blog" replace />;
  }

  if (!loading && error && !post) {
    return (
      <div className="bg-soft text-navy min-h-[60vh] flex items-center justify-center pt-24">
        <div className="text-center max-w-sm px-4">
          <p className="font-display text-xl font-bold">Couldn't load this post</p>
          <p className="text-navy/60 text-sm mt-2">
            There was a connection problem loading this article. Please try again.
          </p>
          <button
            type="button"
            onClick={() => setRetryKey((k) => k + 1)}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sand text-navy font-bold text-xs hover:shadow-lg transition-all"
          >
            <RefreshCw size={14} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const paragraphs = (post?.content || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {post && <Seo title={post.title} description={post.excerpt} />}

      <section className="pt-28 sm:pt-32 pb-10 md:pb-14">
        <div className="container-px">
          <div className="flex items-center gap-2 text-xs font-bold text-navy/60 mb-6 uppercase tracking-wider">
            <NavLink to="/" className="hover:text-teal transition-colors font-bold">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <NavLink to="/blog" className="hover:text-teal transition-colors font-bold">
              The Journal
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold line-clamp-1">{post?.title}</span>
          </div>

          {post && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              {post.category && (
                <span className="px-3 py-1 rounded-full bg-teal/10 text-teal text-[11px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              )}
              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-6 text-sm text-slate-600 font-medium">
                {post.date && <span>{post.date}</span>}
                {post.readTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {post?.image && (
        <section className="container-px pb-10 md:pb-14">
          <div className="rounded-3xl overflow-hidden border border-navy/10 shadow-xl max-w-4xl mx-auto">
            <AnimatedImage
              src={post.image}
              alt={post.title}
              effect="zoom-in"
              className="w-full max-h-[480px] object-cover"
            />
          </div>
        </section>
      )}

      <section className="pb-16 md:pb-20">
        <div className="container-px">
          <div className="max-w-3xl mx-auto space-y-6 text-slate-700 text-[16px] leading-relaxed font-normal">
            {paragraphs.length > 0 ? (
              paragraphs.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{post?.excerpt}</p>
            )}
          </div>

          <div className="max-w-3xl mx-auto mt-14 flex flex-wrap items-center justify-between gap-4">
            <NavLink
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-teal transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to The Journal</span>
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
            >
              <span>Talk to Acciva Travels</span>
              <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
