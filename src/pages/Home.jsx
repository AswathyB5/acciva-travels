import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
      <section className="bg-soft py-32 md:py-48 overflow-hidden">
        <div className="container-px grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow text-teal">01 — The Acciva Experience</span>
            <div className="mt-8 space-y-2">
              <SplitText
                lines={["We Don't", "Just Plan", "Trips."]}
                className="font-display uppercase text-navy text-[13vw] sm:text-6xl md:text-7xl leading-[0.95]"
              />
            </div>
            <div className="mt-16">
              <span className="eyebrow text-teal">The Journey</span>
              <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl mt-4 leading-tight">
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
      <section className="bg-soft pb-32 md:pb-48 pt-16">
        <div className="container-px mb-16">
          <span className="eyebrow text-teal">02 — Featured Destinations</span>
          <h2 className="font-display text-navy text-4xl md:text-6xl mt-6 max-w-xl leading-tight">
            Places worth crossing the world for.
          </h2>
        </div>
        <DestinationExpand destinations={destinations} />
      </section>

      {/* 03 — Huge statement with Cinematic Background Video */}
      <section className="relative bg-midnight py-40 md:py-56 overflow-hidden">
        {/* Background Video & Overlays */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-mountains.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-midnight/80 via-midnight/50 to-midnight/80 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px text-center relative z-10">
          <h2 className="leading-[0.95] text-ivory drop-shadow-lg">
            {[
              { text: "Your", cls: "font-display italic" },
              { text: "Next Chapter", cls: "font-sans font-extrabold uppercase" },
              { text: "Starts Here.", cls: "font-display italic text-sand" },
            ].map((line, i) => (
              <span className="line-mask" key={line.text}>
                <motion.span
                  initial={{ y: "40%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  className={`block text-[13vw] sm:text-6xl md:text-7xl ${line.cls}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>
          <p className="mt-10 eyebrow text-sand/80 font-mono tracking-widest uppercase">
            Acciva Travels &mdash; Pan-India Corporate Mobility Benchmark
          </p>
        </div>
      </section>

      {/* 04 — What We Offer (Enhanced Featured Showcase) */}
      <section className="bg-soft py-24 md:py-36 text-navy">
        <div className="container-px">
          <FeaturedServices />
        </div>
      </section>

      {/* 05 — Horizontal storytelling */}
      <HorizontalGallery panels={galleryPanels} />

      {/* 06 — Numbers / Metrics */}
      <section className="bg-soft py-24 md:py-36 border-y border-navy/10">
        <div className="container-px grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* 07 — Creative Modern Animated Testimonials */}
      <Testimonial />

      {/* 08 — Travel Journal */}
      <section className="bg-soft py-24 md:py-40">
        <div className="container-px">
          <span className="eyebrow text-teal">08 — The Journal</span>
          <h2 className="font-display text-3xl md:text-5xl mt-6 max-w-lg">
            Stories from the road.
          </h2>
          <div className="mt-16">
            <BlogFeature featured={featuredPost} rest={restPosts} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 md:py-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 container-px text-center">
          <span className="eyebrow text-sand">Let&rsquo;s Create Your Next Journey</span>
          <h2 className="font-display uppercase text-ivory text-[13vw] sm:text-6xl md:text-8xl leading-[0.95] mt-6">
            Where Will
            <br />
            You Go Next?
          </h2>
          <Magnetic className="mt-12">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-ivory/50 text-ivory px-10 py-5 eyebrow hover:bg-ivory hover:text-navy transition-colors duration-500"
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
