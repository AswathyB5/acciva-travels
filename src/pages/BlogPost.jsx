import { useMemo, useState } from "react";
import { useParams, NavLink, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Clock, ArrowUpRight, ArrowLeft, RefreshCw } from "lucide-react";
import AnimatedImage from "../components/AnimatedImage";
import Seo from "../components/Seo";
import { blogPosts as fallbackBlogPosts } from "../data/content";
import { useCollection, usePageContent } from "../data/useContent";
import { sanitizeArticleHtml } from "../data/articleHtml";

// Same hero background image as the Blog listing page ("The Journal") — it
// lives on the shared "blog" page content, not per-post, so every post gets
// it automatically, admin-added or not, and editing it once updates it
// everywhere.
const BLOG_INTRO_DEFAULTS = {
  heroBackgroundImage:
    "https://dam.alfuttaim.com/dx/api/dam/v1/collections/26711d2e-640a-4167-bd6a-a2f1ebd504d6/items/cf0b0423-4519-4326-981d-a3f8f580513e/renditions/6063f964-039e-4fa3-93dd-2903c8ebc68c?binary=true&mformat=true",
};

// Highlights the admin-picked "Title Accent" substring within the title using
// the same italic-teal accent style every other page's heading uses. Falls
// back to a plain title when there's no accent, or it doesn't match.
const renderTitleWithAccent = (title, accent) => {
  if (!title) return title;
  if (!accent) return title;
  const idx = title.indexOf(accent);
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <span className="italic text-teal font-normal">{accent}</span>
      {title.slice(idx + accent.length)}
    </>
  );
};

// Renders any blog post created/edited through the admin CMS. Its "Full
// Content" field is HTML, written with the admin's WYSIWYG editor — rendered
// here through the same styling as the site's hand-built articles.
const BlogPost = () => {
  const { slug } = useParams();
  const [retryKey, setRetryKey] = useState(0);
  const { items: blogPosts, loading, error } = useCollection("blog-posts", fallbackBlogPosts, retryKey);
  const { data: blogContent } = usePageContent("blog", BLOG_INTRO_DEFAULTS);
  const post = blogPosts.find((p) => p.slug === slug);
  const contentHtml = useMemo(() => sanitizeArticleHtml(post?.content), [post?.content]);

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

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {post && (
        <Seo
          title={post.metaTitle || post.title}
          description={post.metaDescription || post.excerpt}
          schema={post.schemaMarkup}
        />
      )}

      <section
        className="pt-28 sm:pt-32 pb-10 md:pb-14 relative overflow-hidden"
        style={{
          backgroundImage: `url('${blogContent.heroBackgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Light overlay for text legibility, matching the Journal listing page */}
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        <div className="container-px relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider">
            <NavLink to="/" className="hover:text-teal transition-colors text-navy/70 font-bold">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <NavLink to="/blog" className="hover:text-teal transition-colors text-navy/70 font-bold">
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
              className="max-w-4xl"
            >
              {post.category && (
                <span className="px-3 py-1 rounded-full bg-teal/10 text-teal text-[11px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              )}
              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                {renderTitleWithAccent(post.title, post.titleAccent)}
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
        <section className="container-px pt-10 md:pt-14 pb-10 md:pb-14">
          <div className="rounded-3xl overflow-hidden border border-navy/10 shadow-xl max-w-4xl mx-auto bg-white">
            <AnimatedImage
              src={post.image}
              alt={post.title}
              effect="zoom-in"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      )}

      <section className="pb-16 md:pb-20">
        <div className="container-px">
          {contentHtml ? (
            <div
              className="article-content blog-article max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          ) : (
            <p className="max-w-4xl mx-auto text-slate-700 text-[16px] leading-relaxed font-normal">
              {post?.excerpt}
            </p>
          )}

          <div className="max-w-4xl mx-auto mt-14 flex flex-wrap items-center justify-between gap-4">
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
