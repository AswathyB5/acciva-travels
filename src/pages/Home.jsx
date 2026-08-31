import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import SplitText from "../components/SplitText";
import RevealImage from "../components/RevealImage";
import DestinationExpand from "../components/DestinationExpand";
import FeaturedServices from "../components/FeaturedServices";
import HorizontalGallery from "../components/HorizontalGallery";
import StatCounter from "../components/StatCounter";
import BlogFeature from "../components/BlogFeature";
import Testimonial from "../components/Testimonial";
import Magnetic from "../components/Magnetic";
import { services, destinations, stats, blogPosts } from "../data/content";

const galleryPanels = [
  {
    word: "Wander.",
    label: "01 — Open Road",
    description: "Coastal drives, mountain passes, and cities that reveal themselves slowly.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
  },
  {
    word: "Discover.",
    label: "02 — New Ground",
    description: "Places that stay with you long after the trip has ended.",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1600&q=80",
  },
  {
    word: "Experience.",
    label: "03 — Live It",
    description: "Journeys built around moments, not just itineraries.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
  },
];

const featuredPost = blogPosts.find((p) => p.featured);
const restPosts = blogPosts.filter((p) => !p.featured).slice(0, 3);

const Home = () => {
  return (
    <>
      <Hero />

      {/* 01 — Introduction + Giant image story */}
      <section className="bg-soft py-16 md:py-24 overflow-hidden">
        <div className="container-px grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow text-teal">01 — The Acciva Experience</span>
            <div className="mt-8 space-y-2">
              <h1 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.05]">
                We Don&rsquo;t <br />
                Just Plan <span className="italic text-teal font-normal">Trips.</span>
              </h1>
            </div>
            <div className="mt-16">
              <span className="eyebrow text-teal">The Journey</span>
              <h2 className="font-display text-navy text-xl sm:text-2xl md:text-3xl mt-4 leading-tight">
                Every itinerary begins with a single question.
              </h2>
              <p className="mt-5 text-navy/60 leading-relaxed max-w-sm">
                What will make this trip unforgettable? We start there, then
                design everything else around the answer.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 relative md:sticky md:top-32">
            <RevealImage
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80"
              alt="Traveler overlooking a vast mountain landscape"
              className="h-[50vh] md:h-[78vh] ml-auto w-full md:w-[90%]"
            />
            <div className="absolute -bottom-10 -left-4 sm:left-0 md:-left-10 w-1/2 md:w-[40%] shadow-[0_20px_60px_rgba(7,26,36,0.25)] border-4 border-soft">
              <RevealImage
                src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1000&q=80"
                alt="Traveler planning a journey with a map and camera"
                className="h-[24vh] md:h-[32vh]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Destinations expanding accordion */}
      <section className="bg-soft py-16 md:py-20">
        <div className="container-px mb-16">
          <span className="eyebrow text-teal">02 — Featured Destinations</span>
          <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 max-w-2xl tracking-tight">
            Places Worth Crossing <span className="italic text-teal font-normal">The World For.</span>
          </h2>
        </div>
        <DestinationExpand destinations={destinations} />
      </section>

      {/* 03 — Huge statement with Cinematic Background Video */}
      <section className="relative bg-soft py-14 md:py-18 overflow-hidden">
        {/* Background Video & Overlays */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-mountains.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-soft/95 via-soft/85 to-soft/95 pointer-events-none" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        {/* Corner quarter-circle accents — same motif as the About page's cards */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px text-center relative z-10">
          <motion.div
            className="mx-auto mb-6 h-px w-16 bg-teal/50"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <div className="text-navy flex flex-col items-center">
            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic text-2xl sm:text-3xl md:text-4xl text-navy/70 block"
            >
              Your
            </motion.span>

            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-medium text-4xl sm:text-6xl md:text-7xl text-navy block mt-2"
            >
              Next Chapter
            </motion.span>

            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)",
                lineHeight: "1.05",
              }}
              className="italic text-teal font-normal block mt-2"
            >
              Starts Here.
            </motion.span>
          </div>
          <p className="mt-10 eyebrow text-teal font-mono tracking-widest uppercase">
            Acciva Travels &mdash; Pan-India Corporate Mobility Benchmark
          </p>

          <Magnetic className="mt-10 inline-block">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-sand text-navy font-bold text-sm hover:bg-navy hover:text-ivory hover:shadow-2xl transition-all shadow-xl"
            >
              <span>Book Now</span>
              <ArrowUpRight size={16} />
            </NavLink>
          </Magnetic>
        </div>
      </section>

      {/* 04 — What We Offer (Enhanced Featured Showcase) */}
      <section className="bg-soft py-16 md:py-20 text-navy">
        <div className="container-px">
          <FeaturedServices />
        </div>
      </section>

      {/* 05 — Horizontal storytelling */}
      <HorizontalGallery panels={galleryPanels} />

      {/* 06 — Numbers / Metrics */}
      <section className="bg-soft py-14 md:py-18">
        <div className="container-px grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* 07 — Creative Modern Animated Testimonials */}
      <Testimonial />

      {/* 08 — Travel Journal */}
      <section className="bg-soft py-16 md:py-20">
        <div className="container-px">
          <span className="eyebrow text-teal">08 — The Journal</span>
          <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 max-w-xl tracking-tight">
            Stories From The <span className="italic text-teal font-normal">Open Road.</span>
          </h2>
          <div className="mt-16">
            <BlogFeature featured={featuredPost} rest={restPosts} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-soft/85" />
        <div className="relative z-10 container-px text-center">
          <motion.span
            className="eyebrow text-teal inline-block"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let&rsquo;s Create Your Next Journey
          </motion.span>
          <motion.div
            className="mx-auto mt-6 h-px w-20 bg-sand/60"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          />
          <h2 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.05] mt-6">
            Where Will <br />
            <span className="italic text-teal font-normal">You Go Next?</span>
          </h2>
          <Magnetic className="mt-12">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-navy/40 text-navy px-10 py-5 eyebrow hover:bg-navy hover:text-soft transition-colors duration-500"
            >
              Plan Your Journey &rarr;
            </NavLink>
          </Magnetic>
        </div>
      </section>
    </>
  );
};

export default Home;
