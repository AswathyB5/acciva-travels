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
import { services, stats, blogPosts } from "../data/content";

const whyChoosePanels = [
  {
    word: "Safety And Security",
    label: "01 — Real-Time Protection",
    description:
      "Acciva's software provides real time monitoring, centralised to security operations, an automated safe drop confirmation through IVR call and assures response time of less than 60 seconds in any panic situations.",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80",
  },
  {
    word: "Cost Optimization",
    label: "02 — Maximum Efficiency",
    description:
      "It increases transport efficiency by utilising the largest technologies and reduces operation cost by utilising manpower and fleet optimally.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    word: "Technology Integration",
    label: "03 — Automation Platform",
    description:
      "Acciva’s state of art technology is an automation platform for employee transportation that helps Rostering, routing, deployment, live tracking, paperless automated billing and e-trip sheet.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
  },
];

const luxuryCabs = [
  {
    name: "Rolls-Royce",
    country: "Ultra Luxury",
    description: "Cullinan · Phantom · Wraith — The pinnacle of prestige motoring. Chauffeur-driven opulence for executives and high-profile events.",
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Mercedes-Benz",
    country: "Premium Luxury",
    description: "AMG GLC · CLK · B-Class — Sophisticated engineering meets executive comfort. Perfect for corporate airport transfers and client rides.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "BMW",
    country: "Sport Luxury",
    description: "M Sport · Luxury · xDrive — The ultimate driving experience. Dynamic, refined, and built for those who expect nothing but excellence.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Audi",
    country: "Executive Luxury",
    description: "Audi A6 · Q5 · A8 · S5 — Vorsprung durch Technik. Sleek, intelligent cabins crafted for the discerning corporate traveller.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Jaguar",
    country: "British Luxury",
    description: "F-TYPE · F-PACE · XF · XE — Iconic British craftsmanship meets modern performance. A statement of style for every corporate journey.",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
  },
];

const journalPosts = blogPosts.filter((p) => !p.featured).slice(0, 3);

const Home = () => {
  return (
    <>
      <Hero />

      {/* 01 — Introduction + Giant image story */}
      <section className="bg-soft py-16 md:py-24 overflow-hidden">
        <div className="container-px grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow text-teal">01 — About Us</span>
            <div className="mt-8 space-y-2">
              <h1 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.05]">
                Welcome To <span className="italic text-teal font-normal">Acciva.</span>
              </h1>
            </div>
            <div className="mt-10">
              <p className="text-navy/65 leading-relaxed text-base max-w-sm">
                Acciva Travels has emerged to be one of the best leading Corporate Employee Transport Services &amp; Solutions Pan India. We are committed to provide quality and reliable Employee Transportation services. Our state-of-art app based Technology empowers the entire Employee Transportation Management System process for our Corporate companies.
              </p>
            </div>

            {/* Service list */}
            <div className="mt-10 space-y-3">
              {[
                "Monthly Basis Cab Taxi Hiring Services Sedan",
                "Providing Vehicles for Office Work",
                "Sedan Vehicle on Rental Basis for Corporate",
                "Hiring of Taxi Services for Corporate",
                "Cab Taxi Hiring Services Sedan / SUV / MUV",
                "Hiring of Sedan / SUV / MUV Cars",
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <span className="mt-1 w-5 h-5 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:border-teal transition-colors duration-300">
                    <svg className="w-2.5 h-2.5 text-teal group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 10 10">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-navy/75 text-sm leading-relaxed">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 relative md:sticky md:top-32">
            <RevealImage
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=80"
              alt="Acciva corporate taxi cab fleet"
              className="h-[50vh] md:h-[78vh] ml-auto w-full md:w-[90%]"
            />
            <div className="absolute -bottom-10 -left-4 sm:left-0 md:-left-10 w-1/2 md:w-[40%] shadow-[0_20px_60px_rgba(7,26,36,0.25)] border-4 border-soft">
              <RevealImage
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80"
                alt="Acciva professional corporate chauffeur"
                className="h-[24vh] md:h-[32vh]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 02 — Luxury Cab Services */}
      <section className="bg-soft py-16 md:py-20">
        <div className="container-px mb-16">
          <span className="eyebrow text-teal">02 — Cab Service</span>
          <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 max-w-2xl tracking-tight">
            Luxury Cab Services <span className="italic text-teal font-normal">For Every Occasion.</span>
          </h2>
        </div>
        <DestinationExpand destinations={luxuryCabs} />
      </section>

      {/* 03 — Statement Banner */}
      <section className="relative bg-soft py-4 md:py-7 overflow-hidden">
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
        {/* Corner quarter-circle accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px text-center relative z-10">
          <motion.div
            className="mx-auto mb-4 h-px w-12 bg-teal/40"
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
              className="font-display italic text-xl sm:text-2xl md:text-3xl text-navy/70 block"
            >
              Your
            </motion.span>
            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-medium text-3xl sm:text-5xl md:text-6xl text-navy block mt-1"
            >
              Next Chapter
            </motion.span>
            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ fontFamily: "var(--font-accent)", fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: "1.05" }}
              className="italic text-teal font-normal block mt-1"
            >
              Starts Here.
            </motion.span>
          </div>
          <p className="mt-5 eyebrow text-teal font-mono tracking-widest uppercase">
            Acciva Travels &mdash; Pan-India Corporate Mobility Benchmark
          </p>
          <Magnetic className="mt-6 inline-block">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:bg-navy hover:text-ivory hover:shadow-2xl transition-all shadow-xl"
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

      {/* 05 — Enterprise Trust */}
      <section className="bg-soft pt-16 md:pt-24 pb-8">
        <div className="container-px">
          <span className="eyebrow text-teal">05 — Enterprise Trust</span>
          <h2 className="font-display text-navy text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
            Why Enterprises <span className="italic text-teal font-normal">Trust Us.</span>
          </h2>
        </div>
      </section>
      <HorizontalGallery panels={whyChoosePanels} />

      {/* 06 — Numbers / Metrics */}
      <section className="bg-soft py-14 md:py-18">
        <div className="container-px grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, idx) => (
            <StatCounter key={s.label} {...s} index={idx} />
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
          <div className="mt-12">
            <BlogFeature posts={journalPosts} />
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
